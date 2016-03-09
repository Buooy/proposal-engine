<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width">
    <title>Quotation Engine</title>
    <meta name="description" content="This is a boilerplate for building Hackathon apps">
    <link rel="stylesheet" href="https://bootswatch.com/cosmo/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/4.12.0/bootstrap-social.min.css">
    <link rel="stylesheet" href="//www.fuelcdn.com/fuelux/3.13.0/css/fuelux.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/fonts/fontawesome-webfont.ttf">
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.1/summernote.css">
    <link rel="stylesheet" href="<?php echo e(load_asset('css/app.css')); ?>">
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

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="//www.fuelcdn.com/fuelux/3.13.0/js/fuelux.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.1/summernote.js"></script>
    <script src="<?php echo e(load_asset('js/all.js')); ?>"></script>
</body>
</html>
