<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Auth;
use Hash;
use App\User;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use GuzzleHttp\Client;

class TimeTrackingController extends Controller
{
    protected $user;
    protected $id;

    public function __construct()
    {
        $this->id = Auth::user()->id;
        $this->user = User::findOrFail($this->id);
        $this->api_url = "https://toggl.com/reports/api/v2/";
    }
    public function getAllTimeTrackingView(){
        return view('time-tracking.list.all');
    }
    public function getTimeTrackingReport( Request $request ){
        
        $client = new Client([
            'base_uri'  =>  $this->api_url,
            'verify'    =>  false,
            'auth'      =>  [$_ENV['TOGGL_API_KEY'],'api_token']
        ]);
        $endpoint = 'summary?workspace_id='.$_ENV['TOGGL_WORKSPACE_ID'].'&user_agent=buooy';
        
        // Attach the parameters to the endpoint
        $since = $request->get('since', '');
        if( !empty($since) ){ 
            $endpoint .= '&since='.$since ;
        }
        $until = $request->get('until', '');
        if( !empty($until) ){ 
            $endpoint .= '&until='.$until; 
        }
        $project_ids = $request->get('project_ids', '');
        if( !empty($project_ids) ){ 
            $endpoint .= '&project_ids='.$project_ids;
        }
        
        // Request from the Toggl Server
        $response = $client->request('GET',$endpoint);
        $items = $response->getBody()->getContents();
        
        // Data 
        $data = [
            'report'    =>   $items,
            'url'       =>   $endpoint
        ];
        
        return $this->sendSuccessResponse( $data );

    }
    public function getTimeTrackingReportPDF( Request $request ){
        
        $client = new Client([
            'base_uri'  =>  $this->api_url,
            'verify'    =>  false,
            'auth'      =>  [$_ENV['TOGGL_API_KEY'],'api_token']
        ]);
        $endpoint = 'summary.pdf?workspace_id='.$_ENV['TOGGL_WORKSPACE_ID'].'&user_agent=buooy';
        
        // Attach the parameters to the endpoint
        $since = $request->get('since', '');
        if( !empty($since) ){ 
            $endpoint .= '&since='.$since ;
        }
        $until = $request->get('until', '');
        if( !empty($until) ){ 
            $endpoint .= '&until='.$until; 
        }
        $project_ids = $request->get('project_ids', '');
        if( !empty($project_ids) ){ 
            $endpoint .= '&project_ids='.$project_ids;
        }
        
        // Request from the Toggl Server
        $filename = str_replace(',','-',$project_ids).'_'.$since.'_to_'.$until.'.pdf';
        $resource = fopen(public_path('uploads/reports/'.$filename), 'w');
        $client->request('GET', $endpoint, ['sink' => $resource]);
        
        // Data 
        $data = [
            'token'    =>    $_ENV['TOGGL_API_KEY'],
            'url'       =>   asset('uploads/reports/'.$filename)
        ];
        return $this->sendSuccessResponse( $data );

    }
    public function sendSuccessResponse( $data ){
        
        
        return response()->json($data);
        
    }

}
