<section id="scope-of-work">
	
	<article class="container-fluid">
		
		<header class="row">
			<div class="col-md-12">
				<h1>Scope of Work</h1>
			</div>
		</header>
		
		<div class="row article-body">
			
			<div class="col-xs-12">
				{!! $proposal->{'project-scope-of-work-introduction'} !!}
				<p>The CTO will work with {{ $proposal->{'project-details-client-company-name'} }} to augment the organisation's strength in the following areas:</p>
			</div>
			
			<div id="scope-of-work-items" class="col-xs-12">
			@foreach( json_decode( $proposal->{'project-scope-of-work'} ) as $section )
				<h4>{!! $section->{'section-title'} !!}</h4>
				<ul>
					@foreach( $section->{'section-items'} as $item )
					<li>{!! $item !!}</li>
					@endforeach
				</ul>
			@endforeach
			</div>
			
			<div class="col-xs-12">{!! $proposal->{'project-scope-of-work-end'} !!}</div>
			
		</div>
	
	</article>
	
</section>	