<section id="investments">
	
	<article class="container-fluid">
		
		<header class="row">
			<div class="col-md-12">
				<h1>Investments</h1>
			</div>
		</header>
		
		<div class="row article-body">
			
			<div class="col-xs-12">
				
				<?php foreach( $proposal->{'project-investment-sections'} as $section ): ?>
				<table class="table table-bordered project-investment-section">
					<thead>
						<th colspan="2"><?php echo $section->{'section-title'}; ?></th>
					</thead>
					<tbody>
						<?php foreach( $section->{'section-items'} as $item ): ?>
						<tr>
							<td><?php echo $item->{'name'}; ?></td>
							<td class="text-center"><?php echo $item->{'cost'}; ?></yd>
						</tr>
						<?php endforeach; ?>
					</tbody>
					<tfoot>
						<tr>
							<td class="text-right">Subtotal :</td>
							<td class="text-center"><?php echo $section->{'section-subtotal'}; ?></td>
						</tr>
					</tfoot>
				</table>
				<?php endforeach; ?>

				<table id="project-investment-total" class="table table-bordered">
					<thead>
						<tr>
							<th><?php echo $proposal->{'project-investment'}->{'investment-total-name'}; ?></th>
							<th class="text-right"><?php echo $proposal->{'project-investment'}->{'investment-total-cost'}; ?></th>
						</tr>
					</thead>
					<tfoot>
						<tr>
							<td colspan="2">
								<h5>Notes:</h5>
								<?php echo $proposal->{'project-investment'}->{'investment-additional-notes'}; ?>

							</td>
						</tr>
					</tfoot>
				</table>
				
				<hr>
			</div>
			
			<div class="col-xs-12">
				<h4>Additional Investments/Cost</h4>
			</div>
			
			<div class="col-xs-12">
				<p>The CTO will not be hired as an existing employee or part time staff of the company, but as an independent contractor of the company. Additional cost incurred outside of the service will be borne by the hiring company.</p>
				<p>These cost include, but are not limited to:
					<ul>
						<li>Transportation fees incurred as part of <?php echo e($proposal->{'project-details-client-company-name'}); ?>’s business agenda</li>
						<li>Additional development/design/prototyping</li>
						<li>Rental, Facility, hardware or software</li>
						<li>Legal fees incurred by <?php echo e($proposal->{'project-details-client-company-name'}); ?></li>
						<li>Salary payments, deductions and variable wages</li>
						<li>Purchase of Software, Prototypes and/or Licenses pertaining to <?php echo e($proposal->{'project-details-client-company-name'}); ?></li>
					</ul>
				</p>
			</div>
			
		</div>
	
	</article>
	
</section>	