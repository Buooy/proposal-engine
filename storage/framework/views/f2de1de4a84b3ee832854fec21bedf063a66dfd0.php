<?php $__env->startSection('content'); ?>
<main class="main-container">
    
    <section class="row">
        <header>
            <h3 class="col-xs-7">Time Reports</h3>
            <h3 class="col-xs-5 text-right" id="time-tracking-dates" data-toggle="modal" data-target="#time-tracking-datepicker">
                <b><span id="time-tracking-dates-start"></span> - <span id="time-tracking-dates-end"></span></b>
            </h3>
        </header>
    </section>
    
    <section class="row">
        <article id="time-tracking" class="col-xs-12">
            <?php echo $__env->make( 'time-tracking.list.list' , array_except(get_defined_vars(), array('__data', '__path')))->render(); ?> 
            <?php echo $__env->make( 'time-tracking.list.empty' , array_except(get_defined_vars(), array('__data', '__path')))->render(); ?> 
            <?php echo e(csrf_field()); ?>

        </article>
    </section>

    <?php echo $__env->make( 'time-tracking.list.datepicker' , array_except(get_defined_vars(), array('__data', '__path')))->render(); ?> 
    <?php echo $__env->make( 'time-tracking.list.create-invoice-modal' , array_except(get_defined_vars(), array('__data', '__path')))->render(); ?> 
    
</main>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.master', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>