<?php $__env->startSection('content'); ?>
<main class="main-container">
    
    <section class="row">
        <div class="col-xs-12"><h3>Invoices</h3></div>
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