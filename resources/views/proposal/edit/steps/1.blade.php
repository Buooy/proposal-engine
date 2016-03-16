<div class="step-pane alert active" data-step="1">
	
    <h4>Project Details</h4>
    
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="project-details-title">Project Title</label>
                <input type="text" class="form-control" id="project-details-title" 
					value="{{ $proposal->{'project-details-title'} }}" placeholder="">
            </div>
        </div>
		
        <div class="col-md-6">
            <div class="form-group">
                <label for="project-details-type">Project Type</label>
				<br>
				<div class="btn-group selectlist" data-initialize="selectlist" style="width:100%;"> 
					<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button" style="width:100%;">
						<span class="selected-label">&nbsp;</span>
						<span class="caret"></span>
						<span class="sr-only">Toggle Dropdown</span>
					</button>
					<ul class="dropdown-menu" role="menu" style="width:100%;">
						<li data-value="cto" 
							@if ($proposal->{'project-details-type'} === 'cto') data-selected="true" @endif
							>
							<a href="#">CTO as a Service</a>
						</li>
						<li data-value="custom-project" 
							@if ($proposal->{'project-details-type'} === 'custom-project') data-selected="true" @endif
							>
							<a href="#">Custom Project</a>
						</li>
					</ul>
					<input class="hidden hidden-field" id="project-details-type" name="project-details-type" 
						readonly="readonly" aria-hidden="true" type="text" value="{{ $proposal->{'project-details-type'} }}"/>
				</div>
            </div>
        </div>
    </div>
    
    <div class="row">
        <div class="col-md-6">
            
            <div class="form-group">
                <label for="project-details-client-company-name">Company Name</label>
                <input type="text" class="form-control" id="project-details-client-company-name" 
					value="{{ $proposal->{'project-details-client-company-name'} }}" placeholder="">
            </div>
            <div class="form-group">
                <label for="project-details-client-company-website">Company Website</label>
                <input type="text" class="form-control" id="project-details-client-company-website" 
					value="{{ $proposal->{'project-details-client-company-website'} }}" placeholder="">
            </div>
            <div class="form-group">
                <label for="project-details-client-company-address">Company Address</label>
                <textarea class="form-control" rows="6" id="project-details-client-company-address" placeholder="">{{ $proposal->{'project-details-client-company-address'} }}</textarea>
            </div>
            
        </div>
        <div class="col-md-6">
            
            <div class="form-group">
                <label for="project-details-client-contact-name">Client Name</label>
                <input type="text" class="form-control" id="project-details-client-contact-name" 
					value="{{ $proposal->{'project-details-client-contact-name'} }}" placeholder="">
            </div>
            <div class="form-group">
                <label for="project-details-client-contact-email">Client Email</label>
                <input type="email" class="form-control" id="project-details-client-contact-email" 
					value="{{ $proposal->{'project-details-client-contact-email'} }}" placeholder="">
            </div>
            
        </div>
    </div>
    
</div>