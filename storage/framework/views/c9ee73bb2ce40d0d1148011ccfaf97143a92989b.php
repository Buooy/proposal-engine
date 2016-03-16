<?php $__env->startSection('content'); ?>
<main class="main-container">
    
    <section class="row">
        <header class="col-xs-12">
            <h3 class="pull-left">Invoices</h3>
            <div class="btn-group pull-right" role="group">
                <button type="button" class="btn btn-primary" data-action="get-all-invoices">All</button>
                <button type="button" class="btn btn-success" data-action="get-unpaid-invoices">Unpaid</button>
            </div>
        </header>
    </section>
    
    <section class="row">
        <article id="invoices" class="col-xs-12">
            <?php echo $__env->make( 'invoices.list.list' , array_except(get_defined_vars(), array('__data', '__path')))->render(); ?> 
            <?php echo $__env->make( 'invoices.list.empty' , array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
            <?php echo e(csrf_field()); ?>

        </article>
    </section>
    
</main>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.master', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>