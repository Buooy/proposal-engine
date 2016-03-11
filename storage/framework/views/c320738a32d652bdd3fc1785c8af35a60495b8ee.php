<?php $__env->startSection('data'); ?>
<script>
<?php if( $action == 'edit' ): ?>
    var proposal_data = {
        
        scope_of_work : <?php echo $proposal->{'project-scope-of-work'}; ?>,
        investment : <?php echo $proposal->{'project-investment'}; ?>

        
    }
<?php endif; ?>
</script>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<main class="main-container">
    
    <section class="row">
        <div class="col-xs-12">
            <h3><?php echo e($action=='new' ? 'New' : 'Edit'); ?> Proposal</h3>
        </div>
    </section>
    
    <section class="row fuelux">
        <article class="col-xs-12">
            <div class="wizard" data-initialize="wizard" id="quotation-engine-wizard">
                <?php echo $__env->make('proposal.edit.steps.header', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                <?php echo $__env->make('proposal.edit.steps.steps', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
            </div>
        </article>
    </section>
    
</main>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.master', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>