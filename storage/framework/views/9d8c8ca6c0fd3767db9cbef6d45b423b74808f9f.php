<?php $__env->startSection('content'); ?>
    <?php echo $__env->make('proposal.preview.cto.pages.landing', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    <?php echo $__env->make('proposal.preview.cto.pages.models', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    <?php echo $__env->make('proposal.preview.cto.pages.introduction', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    <?php echo $__env->make('proposal.preview.cto.pages.scope-of-work', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    <?php echo $__env->make('proposal.preview.cto.pages.timeline', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    <?php echo $__env->make('proposal.preview.cto.pages.investments', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.proposal', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>