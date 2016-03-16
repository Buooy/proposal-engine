<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Auth;
use Hash;
use App\User;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Freshbooks\FreshBooksApi as Freshbooks;

class InvoicesController extends Controller
{
    protected $user;
    protected $id;

    public function __construct()
    {
        $this->id = Auth::user()->id;
        $this->user = User::findOrFail($this->id);
    }
    public function getAllInvoicesView(){
        return view('invoices.list.all');
    }
    public function getAllInvoices(){
        
        if( !empty(env('FRESHBOOKS_API_URL')) ){
            
            $freshbooks = new Freshbooks(env('FRESHBOOKS_SUBDOMAIN'), env('FRESHBOOKS_AUTH_TOKEN')); 
            $freshbooks->setMethod('invoice.list');
            $freshbooks->post(array(
                'per_page' => '100'
            ));
            $freshbooks->request();
            
            if( $freshbooks->success() ){
                $response = $freshbooks->getResponse();
                // Package the invoice
                $invoices = $response['invoices']['invoice'];
            }
            
        }
        
        return $this->sendSuccessResponse( $invoices );

    }
    public function getUnpaidInvoices(){
        
        if( !empty(env('FRESHBOOKS_API_URL')) ){
            
            $freshbooks = new Freshbooks(env('FRESHBOOKS_SUBDOMAIN'), env('FRESHBOOKS_AUTH_TOKEN')); 
            $freshbooks->setMethod('invoice.list');
            $freshbooks->post(array(
                'per_page'  =>  '100',
                'status'    =>  array('unpaid')
            ));
            $freshbooks->request();
            
            if( $freshbooks->success() ){
                $response = $freshbooks->getResponse();
                // Package the invoice
                $invoices = $response['invoices']['invoice'];
            }
            
        }
        
        return $this->sendSuccessResponse( $invoices );
        
    }
    public function sendSuccessResponse( $invoices ){
        
        $status_classes = [
            'paid'      =>  'label-success',
            'sent'      =>  'label-primary',
            'viewed'    =>  'label-info',
            'draft'     =>  'label-default',
            'partial'   =>  'label-warning'
        ];
        
        // response
        $response = [
            'success'           => true,
            'invoices'          => $invoices,
            'status_classes'    => $status_classes
        ];
        
        return response()->json($response);
        
    }

}
