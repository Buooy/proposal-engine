<section id="landing">
	
	<figure id="cover-photo">
		<img src="<?php echo e(load_asset('img/cover-photo.jpg')); ?>">
	</figure>
	<article id="landing-details" class="container-fluid">
		
		<div class="col-xs-8">
			<h1 class="project-title"><?php echo e($proposal->{'project-details-title'}); ?></h1>
			<div class="company">
				<h3>CTO as a Service</h3>
			</div>
		</div>
		<div id="client" class="col-xs-4">
			<h4>Prepared for</h4>
			
			<h3 class="company-name"><?php echo e($proposal->{'project-details-client-company-name'}); ?></h3>
			<div class="company-address">
				<p><?php echo e($proposal->{'project-details-client-company-address'}); ?></p>
			</div>
			<div class="company-website">
				<a href="<?php echo e($proposal->{'project-details-client-company-website'}); ?>"><?php echo e($proposal->{'project-details-client-company-website'}); ?></a>
			</div>
			<div class="contact-name">
				<?php echo e($proposal->{'project-details-client-contact-name'}); ?>

			</div>
			<div class="contact-email">
				<a href="mailto:<?php echo e($proposal->{'project-details-client-contact-email'}); ?>"><?php echo e($proposal->{'project-details-client-contact-email'}); ?></a>
			</div>
		</div>
		
	</article>
	<footer class="container-fluid">
		<div class="col-xs-4 border-right">
			<h1>BUOOY</h1>
			<p>Make the web work harder for you</p>
		</div>
		<div class="col-xs-4 text-center border-right">
			<p><img class="icon img-responsive" src="<?php echo e(load_asset('img/icons/font-awesome/white/svg/map-marker.svg')); ?>"></p>
			<small>71 Ayer Rajah Cresent, #03-06</small><br>
			<small>Singapore 139951</small>
		</div>
		<div class="col-xs-2 text-center border-right">
			<p><img class="icon img-responsive" src="<?php echo e(load_asset('img/icons/font-awesome/white/svg/envelope.svg')); ?>"></p>
			<small><a href="mailto:aaron.lee@buooy.com">ahoy@buooy.com</a></small>
			<br><br>
		</div>
		<div class="col-xs-2 text-center">
			<p><img class="icon img-responsive" src="<?php echo e(load_asset('img/icons/font-awesome/white/svg/globe.svg')); ?>"></p>
			<small><a href="http://www.buooy.com">www.buooy.com</a></small>
			<br><br>
		</div>
	</footer>
	
</section>