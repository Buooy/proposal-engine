<div class="step-pane alert" data-step="6">
	<div class="row">	
		<div class="col-sm-4"><h4>Generate Proposal</h4></div>
		<div class="col-sm-8 text-right">
		<?php if($action == 'new'): ?>
			<button class="btn btn-success" data-action="generate-proposal">Generate Proposal</button>
		<?php elseif($action == 'edit'): ?>
			<button class="btn btn-success" data-action="update-proposal">Update Proposal</button>	
		<?php endif; ?>
		</div>
	</div>
	<div class="row">
		
		<?php echo csrf_field(); ?>

		<div class="col-sm-12" id="messages">
			
		</div>
	</div>
</div>