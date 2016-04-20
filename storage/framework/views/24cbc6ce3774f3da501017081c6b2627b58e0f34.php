<?php $__env->startSection('content'); ?>
    
    <?php echo $__env->make('proposal.preview.custom-project.pages.landing', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    <?php echo $__env->make('proposal.preview.custom-project.pages.pitch', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    <?php echo $__env->make('proposal.preview.custom-project.pages.testimony', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    <?php echo $__env->make('proposal.preview.custom-project.pages.introduction', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.proposal', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>