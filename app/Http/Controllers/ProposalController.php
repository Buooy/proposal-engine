<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Auth;
use Hash;
use App\User;
use App\Proposal as Proposal;
use App\Http\Requests;
use App\Http\Controllers\Controller;


class ProposalController extends Controller
{
    protected $user;
    protected $id;

    public function __construct()
    {
        $this->id = Auth::user()->id;
        $this->user = User::findOrFail($this->id);
        
        $this->fields = [
            'project-details-title' =>  'required',
            'project-details-client-company-name' =>  'required',
            'project-details-client-company-website' => 'required|url',
            'project-details-client-company-address' => 'alpha_dash',
            'project-details-client-contact-name'   => 'required',
            'project-details-client-contact-email'  =>  'required|email',
            'project-overview'  =>  'required',
            'project-timeline-main'  =>  'required',
            'project-scope-of-work'  =>  'required',
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
        
        /*
        echo '<pre style="margin-top: 200px;">';
        print_r( $proposal->{'project-details-title'} );
        echo '</pre>';
        */
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
        
        return view('proposal.list.all', ['proposals' => $proposals]);
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
        return view('proposal.preview.view', ['proposal' => $proposal]);
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
