<?php $__env->startSection('content'); ?>
<main class="main-container">
    
    <section class="row">
        <div class="col-xs-6"><h3>All Proposals</h3></div>
        <div class="col-xs-6 text-right">
            <h3><a class="btn btn-success" href="/proposal/new"><i class="fa fa-plus"></i> Add New</a></h3>
        </div>
    </section>
    
    <section class="row">
        <article class="col-xs-12">
            <?php if(count($proposals) == 0): ?>
                <?php echo $__env->make( 'proposal.list.empty' , array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
            <?php else: ?>
                <?php echo $__env->make( 'proposal.list.list' , array_except(get_defined_vars(), array('__data', '__path')))->render(); ?> 
            <?php endif; ?>
        </article>
    </section>
    
</main>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.master', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>