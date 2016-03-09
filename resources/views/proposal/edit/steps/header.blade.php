<?php
$steps = [
    [
        'key'   =>  'project-details',
        'title' =>  'Details'
    ],[
        'key'   =>  'project-overview',
        'title' =>  'Overview'
    ],[
        'key'   =>  'project-timeline',
        'title' =>  'Timeline'
    ],[
        'key'   =>  'project-scope-of-work',
        'title' =>  'Scope of Work'
    ],[
        'key'   =>  'project-investment',
        'title' =>  'Investment'
    ],[
        'key'   =>  'generate-proposal',
        'title' =>  'Generate Proposal'
    ],
];
?>

<div class="steps-container">
	<ul class="steps">
        <?php foreach( $steps as $index => $step ): ?>
		<li data-step="<?php echo $index+1; ?>" data-name="<?php echo $step['key'] ?>" class="<?php echo ( $index == 0 ) ? 'active' : ''; ?>">
			<span class="badge"><?php echo $index+1; ?></span><?php echo $step['title'] ?>
			<span class="chevron"></span>
		</li>
        <?php endforeach; ?>
	</ul>
</div>
<div class="actions">
	<button type="button" class="btn btn-default btn-prev">
		<span class="glyphicon glyphicon-arrow-left"></span>Prev</button>
	<button type="button" class="btn btn-primary btn-next" data-last="Complete">Next
		<span class="glyphicon glyphicon-arrow-right"></span>
	</button>
</div>