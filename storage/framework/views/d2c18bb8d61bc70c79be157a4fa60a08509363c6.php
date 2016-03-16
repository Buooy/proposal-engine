<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width">
    <title>Quotation Engine</title>
    <meta name="description" content="Buooy Dock - Where We Do Our THANG">
    <link rel="stylesheet" href="https://bootswatch.com/yeti/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/4.12.0/bootstrap-social.min.css">
    <link rel="stylesheet" href="//www.fuelcdn.com/fuelux/3.13.0/css/fuelux.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/fonts/fontawesome-webfont.ttf">
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.1/summernote.css">
    <link rel="stylesheet" href="<?php echo e(load_asset('css/app.css')); ?>">
    
    <?php echo $__env->yieldContent('data'); ?>
</head>
<body>
    <?php echo $__env->make('layouts.partials.navbar', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    <main class="container">
        <?php echo $__env->yieldContent('content'); ?>
    </main>
    <footer class="footer">
        <div class="container text-center">
        <p class="pull-left">&copy; <?php echo date('Y'); ?> Buooy. All Rights Reserved</p>
        <ul class="pull-right list-inline">
            <li>
                <a href="https://buooy.com">Support</a>
            </li>
        </ul>
        </div>
    </footer>
    
    <div id="loading-overlay" class="hidden text-center">
        
        <div style="display:table; width: 100%">
            <div style="display:table-cell;vertical-align:middle;">
                <div style="margin-left:auto;margin-right:auto;">
                    <svg width="210" height="96" viewBox="0 0 140 64" xmlns="http://www.w3.org/2000/svg" fill="#333">
                	    <path d="M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z" fill-opacity=".5">
                	        <animate attributeName="fill-opacity"
                	             begin="0s" dur="1.4s"
                	             values="0.5;1;0.5"
                	             calcMode="linear"
                	             repeatCount="indefinite" />
                	    </path>
                	    <path d="M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z" fill-opacity=".5">
                	        <animate attributeName="fill-opacity"
                	             begin="0.7s" dur="1.4s"
                	             values="0.5;1;0.5"
                	             calcMode="linear"
                	             repeatCount="indefinite" />
                	    </path>
                	    <path d="M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z" />
                	</svg>
                </div>
            </div>
        </div>
            
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="https://www.fuelcdn.com/fuelux/3.13.0/js/fuelux.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.1/summernote.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/list.js/1.2.0/list.min.js"></script>
    <script src="<?php echo e(load_asset('js/all.js')); ?>"></script>
</body>
</html>
