<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Auth;
use Hash;
use App\User;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use GuzzleHttp\Client;
use Freshbooks\FreshBooksApi as Freshbooks;

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
        
        // Package the request
        
        $params = array(
            'since' =>  $request->get('since',''),
            'until' =>  $request->get('until',''),
            'project_ids'   =>  $request->get('project_ids','')
        );
        $data = $this->fetchTimeTrackingReportPDF( $params );
        
        return $this->sendSuccessResponse( $data );
        
    }
    
    public function fetchTimeTrackingReportPDF( $request ){
        
        $client = new Client([
            'base_uri'  =>  $this->api_url,
            'verify'    =>  false,
            'auth'      =>  [$_ENV['TOGGL_API_KEY'],'api_token']
        ]);
        $endpoint = 'summary.pdf?workspace_id='.$_ENV['TOGGL_WORKSPACE_ID'].'&user_agent=buooy';
        
        // Attach the parameters to the endpoint
        if( !empty($request['since']) ){ 
            $endpoint .= '&since='.$request['since'] ;
        }
        if( !empty($request['until']) ){ 
            $endpoint .= '&until='.$request['until']; 
        }
        if( !empty($request['project_ids']) ){ 
            $endpoint .= '&project_ids='.$request['project_ids'];
        }
        
        // Request from the Toggl Server
        $filename = str_replace(',','-',$request['project_ids']).'_'.$request['since'].'_to_'.$request['until'].'.pdf';
        $resource = fopen(public_path('uploads/reports/'.$filename), 'w');
        $client->request('GET', $endpoint, ['sink' => $resource]);
        
        // Data 
        $data = [
            'token'    =>    $_ENV['TOGGL_API_KEY'],
            'url'       =>   asset('uploads/reports/'.$filename)
        ];
        
        return $data;
        
    }
    
    //  ==================================================================
    //  Invoices
    //  ==================================================================
    public function createTimeTrackingInvoice( Request $request ){
        
        if( !empty(env('FRESHBOOKS_API_URL')) ){
            
            $report = $this->fetchTimeTrackingReportPDF(array(
                'is_function_call'  =>  true,
                'since' =>  $request->get('since'),
                'until' =>  $request->get('until'),
                'project_ids'  =>  $request->get('project_ids')
            ));
            
            // Creates the Time Tracking Sheet First
            
            $freshbooks = new Freshbooks(env('FRESHBOOKS_SUBDOMAIN'), env('FRESHBOOKS_AUTH_TOKEN')); 
            $freshbooks->setMethod('invoice.create');
            $freshbooks->post(array(
                'invoice' => array(
                    'client_id' =>  $request->client_id,
                    'status'    =>  'draft',
                    'discount'  =>  $request->discount,
                    'lines'     =>  array(
                        'line'  =>  array(
                            'name'  =>  '(MSC-001B) Custom Development Per Hour',
                            'description'   =>  $request->description,
                            'unit_cost' =>  80,
                            'quantity'  =>  round($request->quantity, 1),
                        )
                    ),
                    'notes'     =>  'Please refer to '.$report['url'].' for more details'
                )
            ));
            $freshbooks->request();
            
            if( $freshbooks->success() ){
                $response = $freshbooks->getResponse();
                $response['invoice_url'] = 'https://buooy.freshbooks.com/showInvoice?invoiceid='.$response['invoice_id'];
            }else{
                $response = $freshbooks->getResponse();
            }
            
        }
        
        return $this->sendSuccessResponse( $response );
        
    }
    public function sendTimeTrackingInvoice( Request $request ){
        
        $response = false;
        
        if( !empty(env('FRESHBOOKS_API_URL')) && !empty($request->invoice_id) ){
            
            $freshbooks = new Freshbooks(env('FRESHBOOKS_SUBDOMAIN'), env('FRESHBOOKS_AUTH_TOKEN')); 
            $freshbooks->setMethod('invoice.sendByEmail');
            $freshbooks->post(array(
                'invoice_id' => $request->invoice_id
            ));
            $freshbooks->request();
            
            $response = $freshbooks->getResponse();
            
        }
        
        return $this->sendSuccessResponse( $response );
        
    }
    
    //  ==================================================================
    //  Creates Response
    //  ==================================================================
    public function sendSuccessResponse( $data ){
        
        
        return response()->json($data);
        
    }

}
