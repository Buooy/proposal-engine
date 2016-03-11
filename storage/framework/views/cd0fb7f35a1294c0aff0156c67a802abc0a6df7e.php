<div class="step-pane" data-step="4">
	
	<div class="row">	
		<div class="col-sm-4"><h4>Scope of Work</h4></div>
		<div class="col-sm-8 text-right">
			<button class="btn btn-success" data-action="add-scope-of-work-section">Add Section</button>
		</div>
	</div>
	
	<div class="row">
		<div class="col-xs-12" id="scope-of-work"></div>
		
		<div class="col-xs-12 hidden" id="scope-of-work-template">
			<section class="scope-of-work-section">
				<table class="table table-striped">
					<thead>
						<tr>
							<th class="scope-of-work-section-title" contenteditable="true">Edit This Section Title</th>
							<th class="text-right">
								<button class="btn btn-xs btn-primary" data-action="add-scope-of-work-row">
									<i class="fa fa-plus"></i>&nbsp;&nbsp;Add Row
								</button>
								<button class="btn btn-xs btn-danger" data-action="delete-scope-of-work-section">
									<i class="fa fa-remove"></i>&nbsp;&nbsp;Delete Section
								</button>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<i class='fa fa-ellipsis-v sort-handler'></i>
								<span class="scope-of-work-item" contenteditable='true'>Edit This Scope of Work</span>
							</td>
							<td class="text-right"><i class="fa fa-remove" data-action="delete-scope-of-work-row"></i></td>
						</tr>
					</tbody>
				</table>
			</section>
		</div>
		
	</div>
	
</div>