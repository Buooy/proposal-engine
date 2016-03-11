<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Auth;
use Hash;
use App\User;
use App\Http\Requests;
use App\Http\Controllers\Controller;


class DashboardController extends Controller
{
    protected $user;
    protected $id;

    public function __construct()
    {
        $this->id = Auth::user()->id;
        $this->user = User::findOrFail($this->id);
    }
    
    /**
     * Gets Dashboard View
     *
     * @param  Request  $request
     * @return Response
     */
    public function getDashboardView(){
        return view('welcome');
    }

}
