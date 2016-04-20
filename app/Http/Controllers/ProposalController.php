<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Auth;
use Hash;
use App\User;
use App\Proposal as Proposal;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Knp\Snappy\Pdf;


class ProposalController extends Controller
{
    protected $user;
    protected $id;

    public function __construct()
    {
        if( !Auth::check() ){ 
            return redirect()->route('auth.login'); 
        }
        
        $this->id = Auth::user()->id;
        $this->user = User::findOrFail($this->id);
        
        $this->fields = [
            'project-details-title' =>  'required',
            'project-details-type' =>  'required',
            'project-details-client-company-name' =>  'required',
            'project-details-client-company-website' => 'required|url',
            'project-details-client-company-address' => 'required',
            'project-details-client-contact-name'   => 'required',
            'project-details-client-contact-email'  =>  'required|email',
            'project-overview'  =>  'required',
            'project-timeline-main'  =>  'required',
            'project-scope-of-work'  =>  'required',
            'project-scope-of-work-introduction'  =>  'string',
            'project-scope-of-work-end'  =>  'string',
            'project-investment'  =>  'required',
        ];
    }

    public function getNewProposalView()
    {
        $details = User::whereId($this->id)->first();
        $proposal = new Proposal;

        return view('proposal.edit.new', [
            'proposal' => $proposal,
            'action'      => 'new'
        ])->withAccount($details);
    }
    public function getEditProposalView( $uid )
    {
        $details = User::whereId($this->id)->first();
        
        // Get the proposal detail
        $proposal = Proposal::where('uid',$uid)->first();
        
        return view('proposal.edit.new', [ 
            'proposal'  => $proposal,
            'action'    => 'edit',
            'uid'       => $uid
        ])->withAccount($details);
    }
    public function getAllProposalView()
    {
        // Gets all the proposals
        $proposals = Proposal::where('deleted_at',NULL)->get();
        
        // Sets the type meta
        $type_meta = [
            'cto'   =>  [
                'name'  =>  'CTO',
                'class' =>  'success'   
            ],
            'custom-project'   =>  [
                'name'  =>  'Custom Project',
                'class' =>  'warning'   
            ]
        ];
        
        return view('proposal.list.all', [
            'proposals' => $proposals,
            'type_meta' => $type_meta,
        ]);
    }
    
    /**
     * Get Proposal Preview
     * 
     * @param  Request  $request
     * @return Response
     */
    public function getPreviewProposalView( $uid )
    {
        $proposal = Proposal::where('uid',$uid)->first();
        if( empty( $proposal->{'project-details-type'} ) ){
            $proposal->{'project-details-type'} = 'custom-project';
        }
        $proposal->{'project-investment'} = json_decode($proposal->{'project-investment'});
        $proposal->{'project-investment-sections'} = $proposal->{'project-investment'}->{'investment-sections'};
        
        return view('proposal.preview.'.$proposal->{'project-details-type'}.'.view', ['proposal' => $proposal]);
    }
    
    /**
     * Get Proposal PDF
     * 
     * @param  Request  $request
     * @return Response
     */
    public function getProposalPDF( $uid )
    {
        $proposal = Proposal::where('uid',$uid)->first();
        $msg = '';
        
        // No such proposal
        if( empty( $proposal ) ){
            $response = [
                'success'   =>  false,
                'msg'       =>  'There are no proposals with that ID.'
            ];
            
            return response()->json($response);
        }
        
        // Generates the proposal
        $filename = '/uploads/proposals/proposal-'.$uid.'.pdf';
        $snappy = new Pdf('/usr/local/bin/wkhtmltopdf');
        $snappy_options = array(
            'margin-top'    =>  0,
            'margin-bottom'    =>  0,
            'margin-left'    =>  0,
            'margin-right'    =>  0
        );
        $snappy->generate( 
            action('ProposalController@getPreviewProposalView', ['uid' => $uid]), 
            public_path().$filename,
            $snappy_options,
            true
        );
        
        $response = [
            'success'   =>  true,
            'msg'       =>  $msg,
            'url'       =>  asset($filename)
        ];
        
        //There is a proposal and we will generate it
        return response()->json($response);
        
    }
    
    /**
     * Updates created quotation
     *
     * @param  Request  $request
     * @return Response
     */
    public function updateProposal( Request $request, $uid )
    {
        
        // Validates the fields
        $this->validate($request, $this->fields);
        
        // Gets the proposal
        $proposal = Proposal::where('uid',$uid)->first();
        
        // Populate the fields
        foreach($this->fields as $field => $validation){
            $proposal->{$field} = $request->{$field};
        }
        
        // Saves the fields
        $success = $proposal->save();
        
        // response
        $response = [
            'success'   =>  $success,
            'uid'       =>  $uid
        ];
        
        return response()->json($response);
    }
    
    /**
     * Store a newly created quotation
     *
     * @param  Request  $request
     * @return Response
     */
    public function insertNewProposal( Request $request )
    {
        
        // validates the fields
        $this->validate($request, $this->fields);
        
        // Creates a new Proposal model
        $proposal = new Proposal;
        
        // Populate the fields
        foreach($this->fields as $field => $validation){
            $proposal->{$field} = $request->{$field};
        }
        
        // Give it a unique hash from the timestamp
        $proposal->uid = md5( time() );
        
        // Saves the fields
        $success = $proposal->save();
        
        // response
        $response = [
            'success'   =>  $success,
            'uid'       =>  $proposal->uid
        ];
        
        return response()->json($response);
    }
        
    /**
     * Deletes a created quotation
     *
     * @param  Request  $request
     * @return Response
     */
    public function deleteProposal( Request $request, $uid )
    {
        
        $success = Proposal::where('uid', $uid)->delete();
        
        $response = [
            'success'   =>  $success,
            'uid'       =>  $uid
        ];
        
        return response()->json($response);
        
    }
    
    /**
     * Performs redirections
     *
     * @param  Request  $request
     * @return Response
     */
    public function redirectToNewProposalPage(){
        return redirect()->route('proposal.new');
    }

}
