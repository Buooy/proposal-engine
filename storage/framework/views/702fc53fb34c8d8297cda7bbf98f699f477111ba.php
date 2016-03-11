<?php $__env->startSection('content'); ?>
    <div class="main-container">
        <?php echo $__env->make('layouts.partials.alerts', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

        <div class="page-header">
            <h3><i class="fa fa-github"></i> Github API</h3>
        </div>

        <div class="btn-group btn-group-justified">
            <a href="http://developer.github.com/guides/getting-started/" target="_blank" class="btn btn-primary">
            <i class="fa fa-check-square-o"></i> Getting Started</a>
            <a href="https://apigee.com/console/github" target="_blank" class="btn btn-primary">
            <i class="fa fa-laptop"></i> API Console</a>
            <a href="http://developer.github.com/v3/" target="_blank" class="btn btn-primary">
            <i class="fa fa-file-text-o"></i> Documentation</a>
        </div>

        <br>

        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">Repository Information</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-xs-4">
                        <img src="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png" class="img-rounded img-responsive">
                    </div>
                    <div class="col-xs-8">
                        <h4>
                            <a href="<?php echo e($details['html_url']); ?>" target="_blank"><?php echo e($details['name']); ?></a>
                        </h4>

                        <ul class="list-inline">
                            <li><i class="fa fa-eye-slash"></i>Subscribers: <?php echo e($details['subscribers_count']); ?></li>
                            <li><i class="fa fa-star"></i>Starred: <?php echo e($details['stargazers_count']); ?></li>
                            <li><i class="fa fa-code-fork"></i>Forks: <?php echo e($details['forks_count']); ?></li>
                            <li><i class="fa fa-code"></i><?php echo e($details['language']); ?></li>
                        </ul>
                        <strong>DESCRIPTION</strong>
                        <p><?php echo e($details['description']); ?></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.master', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>