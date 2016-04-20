<section id="scope-of-work">
	
	<article class="container-fluid">
		
		<header class="row">
			<div class="col-md-12">
				<h1>Scope of Work</h1>
			</div>
		</header>
		
		<div class="row article-body">
			
			<div class="col-xs-12">
				<?php echo $proposal->{'project-scope-of-work-introduction'}; ?>

				<p>The CTO will work with <?php echo e($proposal->{'project-details-client-company-name'}); ?> to augment the organisation's strength in the following areas:</p>
			</div>
			
			<div id="scope-of-work-items" class="col-xs-12">
			<?php foreach( json_decode( $proposal->{'project-scope-of-work'} ) as $section ): ?>
				<h4><?php echo $section->{'section-title'}; ?></h4>
				<ul>
					<?php foreach( $section->{'section-items'} as $item ): ?>
					<li><?php echo $item; ?></li>
					<?php endforeach; ?>
				</ul>
			<?php endforeach; ?>
			</div>
			
			<div class="col-xs-12"><?php echo $proposal->{'project-scope-of-work-end'}; ?></div>
			
		</div>
	
	</article>
	
</section>	