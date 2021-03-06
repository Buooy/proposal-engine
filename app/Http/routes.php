<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/


/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {

    Route::get('/', [
        'uses' => 'DashboardController@getDashboardView',
        'as'   => 'dashboard.view',
        'middleware' => ['auth']
    ]);

    Route::get('/api', function () {
        return view('apidashboard');
    });

    Route::group(['prefix' => 'api'], function() {
        Route::get('github', [
            'uses' => 'GithubController@getPage',
            'as'   => 'api.github',
            'middleware' => ['auth']
        ]);

        Route::get('twitter', [
            'uses' => 'TwitterController@getPage',
            'as'   => 'api.twitter',
            'middleware' => ['auth']
        ]);

        Route::get('lastfm', [
            'uses' => 'LastFmController@getPage',
            'as'   => 'api.lastfm'
        ]);

        Route::get('nyt', [
            'uses' => 'NytController@getPage',
            'as'   => 'api.nyt'
        ]);

        Route::get('steam', [
            'uses' => 'SteamController@getPage',
            'as'   => 'api.steam'
        ]);

        Route::get('stripe', [
            'uses' => 'StripeController@getPage',
            'as'   => 'api.stripe'
        ]);

        Route::get('paypal', [
            'uses' => 'PaypalController@getPage',
            'as'   => 'api.paypal'
        ]);

        Route::get('twilio', [
            'uses' => 'TwilioController@getPage',
            'as'   => 'api.twilio'
        ]);

        Route::post('twilio', [
            'uses' => 'TwilioController@sendTextMessage'
        ]);

        Route::get('scraping', [
            'uses' => 'WebScrapingController@getPage',
            'as'   => 'api.scraping'
        ]);

        Route::get('yahoo', [
            'uses' => 'YahooController@getPage',
            'as'   => 'api.yahoo'
        ]);

        Route::get('clockwork', [
            'uses' => 'ClockworkController@getPage',
            'as'   => 'api.clockwork'
        ]);

        Route::post('clockwork', [
            'uses' => 'ClockworkController@sendTextMessage'
        ]);

        Route::get('aviary', [
            'uses' => 'AviaryController@getPage',
            'as'   => 'api.aviary'
        ]);

        Route::get('lob', [
            'uses' => 'LobController@getPage',
            'as'   => 'api.lob'
        ]);

        Route::get('slack', [
            'uses' => 'SlackController@getPage',
            'as'   => 'api.slack'
        ]);

        Route::get('facebook', [
            'uses' => 'FacebookController@getPage',
            'as'   => 'api.facebook',
            'middleware' => ['auth']
        ]);

        Route::get('linkedin', [
            'uses' => 'LinkedInController@getPage',
            'as'   => 'api.linkedin',
            'middleware' => ['auth']
        ]);

        Route::get('foursquare', [
            'uses' => 'FoursquareController@getPage',
            'as'   => 'api.foursquare'
        ]);

        Route::get('instagram', [
            'uses' => 'InstagramController@getPage',
            'as'   => 'api.instagram',
            'middleware' => ['auth']
        ]);

        Route::get('tumblr', [
            'uses' => 'TumblrController@getPage',
            'as'   => 'api.tumblr'
        ]);
    });

    Route::post('/slack/message', [
        'uses' => 'SlackController@sendMessageToTeam',
        'as'   => 'slack.message'
    ]);

    Route::post('/tweet/new', [
        'uses' => 'TwitterController@sendTweet',
        'as'   => 'tweet.new',
        'middleware' => ['auth']
    ]);

    Route::get('/login', [
        'uses' => 'Auth\AuthController@getLogin',
        'as'   => 'auth.login',
        'middleware' => ['guest']
    ]);

    Route::post('/login', [
        'uses' => 'Auth\AuthController@postLogin',
        'middleware' => ['guest']
    ]);

    // Password Reset Routes...
    Route::get('password/reset/{token?}', 'Auth\PasswordController@showResetForm');
    Route::post('password/email', 'Auth\PasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\PasswordController@reset');

    // Social Authentication
    Route::get('/auth/{provider}', 'OauthController@authenticate');

    Route::get('/account', [
        'uses' => 'AccountController@getAccountPage',
        'as'   => 'account.dashboard',
        'middleware' => ['auth']
    ]);

    Route::post('/account/profile', [
        'uses' => 'AccountController@updateProfile',
        'as'   => 'account.profile',
        'middleware' => ['auth']
    ]);

    Route::post('/account/photo', [
        'uses' => 'AccountController@updateAvatar',
        'as'   => 'account.avatar',
        'middleware' => ['auth']
    ]);

    Route::post('/account/password', [
        'uses' => 'AccountController@changePassword',
        'as'   => 'account.password',
        'middleware' => ['auth']
    ]);

    Route::post('/account/delete/now', [
        'uses' => 'AccountController@deleteAccount',
        'as'   => 'account.delete.now',
        'middleware' => ['auth']
    ]);


    Route::get('/account/confirm/delete', [
        'uses' => 'AccountController@redirectToConfirmDeletePage',
        'as'   => 'account.confirm.delete',
        'middleware' => ['auth']
    ]);

    Route::get('/account/delete/later', [
        'uses' => 'AccountController@dontDeleteAccount',
        'as'   => 'account.dont.delete',
        'middleware' => ['auth']
    ]);

    Route::get('/signup', [
        'uses' => 'Auth\AuthController@getRegister',
        'as'   => 'auth.register',
        'middleware' => ['guest']
    ]);

    Route::get('logout', [
        'uses' => 'Auth\AuthController@logout',
        'as' => 'logout',
    ]);

    Route::post('/signup', [
        'uses' => 'Auth\AuthController@postRegister',
        'middleware' => ['guest']
    ]);

    Route::get('/contact', function () {
        return view('contact');
    });

    Route::post('/contact', [
        'uses' => 'ContactController@sendMessage',
        'as'   => 'contact'
    ]);
    
    //  =============================================================
    //  Proposals
    //  =============================================================
    //  List of all Proposals
    Route::get('/proposals', [
        'uses' => 'ProposalController@getAllProposalView',
        'as'   => 'proposal.viewAll',
        'middleware' => ['auth']
    ]);
    
    Route::group(['prefix' => '/proposal'], function() {
        
        //  Proposal Preview
        Route::get('preview/{uid}', [
            'uses' => 'ProposalController@getPreviewProposalView',
            'as'   => 'proposal.preview',
        ]);
        //  Proposal Download
        Route::post('download/{uid}', [
            'uses' => 'ProposalController@getProposalPDF',
            'as'   => 'proposal.download',
        ]);
        // Edits a proposal
        Route::get('edit/{uid}', [
            'uses' => 'ProposalController@getEditProposalView',
            'as'   => 'proposal.edit',
            'middleware' => ['auth']
        ]);
        Route::get('edit', [
            'uses' => 'ProposalController@redirectToNewProposalPage',
            'middleware' => ['auth']
        ]);
        Route::post('edit/{uid}', [
            'uses' => 'ProposalController@updateProposal',
            'as'   => 'proposal.update',
            'middleware' => ['auth']
        ]);
        
        
        // Create a new proposal
        Route::get('new', [
            'uses' => 'ProposalController@getNewProposalView',
            'as'   => 'proposal.new',
            'middleware' => ['auth']
        ]);
        Route::post('new', [
            'as'   => 'proposal.insert',
            'uses' => 'ProposalController@insertNewProposal',
            'middleware' => ['auth']
        ]);
        
        // Deletes a proposal
        Route::post('delete/{uid}', [
            'uses' => 'ProposalController@deleteProposal',
            'as'   => 'proposal.delete',
            'middleware' => ['auth']
        ]);
        
    });
    
    //  =============================================================
    //  Clients
    //  =============================================================
    //  List of all Clients
    Route::get('/api/clients', [
        'uses' => 'ClientsController@getClientsList',
        'as'   => 'Clients.getClientsList',
        'middleware' => ['auth']
    ]);
    
    //  =============================================================
    //  Invoices
    //  =============================================================
    //  List of all Invoices
    Route::get('/invoices', [
        'uses' => 'InvoicesController@getAllInvoicesView',
        'as'   => 'invoices.viewAll',
        'middleware' => ['auth']
    ]);
    Route::post('/invoices', [
        'uses' => 'InvoicesController@getAllInvoices',
        'middleware' => ['auth']
    ]);
    Route::group(['prefix' => '/invoices'], function() {
        
        Route::post('unpaid', [
            'uses' => 'InvoicesController@getUnpaidInvoices',
            'middleware' => ['auth']
        ]);
        
    });
    //  =============================================================
    //  Time Tracking
    //  =============================================================
    //  List of all Time Tracks
    Route::get('/time-tracking', [
        'uses' => 'TimeTrackingController@getAllTimeTrackingView',
        'as'   => 'TimeTracking.viewAll',
        'middleware' => ['auth']
    ]);
    Route::group(['prefix' => '/time-tracking'], function() {
        
        Route::get('report', [
            'uses' => 'TimeTrackingController@getTimeTrackingReport',
            'as'   => 'TimeTracking.getReport',
            'middleware' => ['auth']
        ]);
        Route::get('report/pdf', [
            'uses' => 'TimeTrackingController@getTimeTrackingReportPDF',
            'as'   => 'TimeTracking.getReportPDF',
            'middleware' => ['auth']
        ]);
        Route::post('invoice', [
            'uses' => 'TimeTrackingController@createTimeTrackingInvoice',
            'as'   => 'TimeTracking.createInvoice',
            'middleware' => ['auth']
        ]);
        Route::post('invoice/send', [
            'uses' => 'TimeTrackingController@sendTimeTrackingInvoice',
            'as'   => 'TimeTracking.sendInvoice',
            'middleware' => ['auth']
        ]);
        
    });
});
