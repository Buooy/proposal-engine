var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
elixir(function(mix) {
    
    mix.sass('app.scss')
        .babel([
            'plugins/sortable.min.js',
            'plugins/sortable.jquery.js',
            'plugins/tablesort.min.js',
            'plugins/tablesort.number.js',
            
            'global/global.js',
            
            'proposals/all.js',
            'proposals/engine.js',
            
            'time-tracking/stores.js',
            'time-tracking/all.js',
            
            'invoices/all.js',
            
            'plugins/mindmup-editabletable.js',
            'app.js'
        ]);
        
    mix.sass('proposal.scss')
    
});
