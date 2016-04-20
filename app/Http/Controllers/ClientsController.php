<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Auth;
use Hash;
use App\User;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Freshbooks\FreshBooksApi as Freshbooks;

class ClientsController extends Controller
{
    protected $user;
    protected $id;

    public function __construct()
    {
        $this->id = Auth::user()->id;
        $this->user = User::findOrFail($this->id);
    }
    
    //  ==================================================================
    //  Clients
    //  ==================================================================
    public function getClientsList(){
        
        $clients = 'false';
        if( !empty(getenv('FRESHBOOKS_API_URL')) ){
        
            $freshbooks = new Freshbooks(getenv('FRESHBOOKS_SUBDOMAIN'), getenv('FRESHBOOKS_AUTH_TOKEN')); 
            $freshbooks->setMethod('client.list');
            $freshbooks->post(array(
                'per_page' => '100'
            ));
            $freshbooks->request();
            
            if( $freshbooks->success() ){
                $response = $freshbooks->getResponse();
                $clients = $response['clients'];
            }
            
        }
        return $this->sendSuccessResponse( $clients );
        
    }
    
    
    //  ==================================================================
    //  Creates Response
    //  ==================================================================
    public function sendSuccessResponse( $data ){
        
        
        return response()->json($data);
        
    }

}
