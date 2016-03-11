<div class="step-pane alert" data-step="5">
	
	<div class="row">	
		<div class="col-sm-4"><h4>Investment</h4></div>
		<div class="col-sm-8 text-right">
			<button class="btn btn-success" data-action="add-investment-section">Add Section</button>
		</div>
	</div>
	
	<div class="row">
		<div class="col-xs-12" id="investment"></div>
		<div class="col-xs-12" id="investment-total">
			<section class="investment-section">
				<table class="table">
					<thead>
						<tr>
							<th id="investment-total-name" colspan="2" contenteditable='true'>Investment Total Cost Name</th>
							<th id="investment-total-cost" class="text-right" contenteditable='true'>Investment Total Cost e.g. $5,000</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td id="investment-additional-notes" colspan="3" contenteditable='true'>Add Your Additional Notes Here. E.g. Payment Terms</td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</section>
		</div>
		
		<div class="col-xs-12 hidden" id="investment-template">
			<section class="investment-section">
				<table class="table table-striped">
					<thead>
						<tr>
							<th class="investment-section-title" colspan="2" contenteditable="true">Edit This Section Title</th>
							<th colspan="2" class="text-right">
								<button class="btn btn-xs btn-primary" data-action="add-investment-row">
									<i class="fa fa-plus"></i>&nbsp;&nbsp;Add Row
								</button>
								<button class="btn btn-xs btn-danger" data-action="delete-investment-section">
									<i class="fa fa-remove"></i>&nbsp;&nbsp;Delete Section
								</button>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr class="investment-item">
							<td class="investment-sort-handler"><i class='fa fa-ellipsis-v sort-handler'></i></td>
							<td class="investment-name" contenteditable='true'>Investment Item Name</td>
							<td class="investment-cost text-right" contenteditable='true'>Investment Cost e.g. $5,000</td>
							<td class="text-right"><i class="fa fa-remove" data-action="delete-investment-row"></i></td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td></td>
							<td class="text-right"><b>Subtotal : </b></td>
							<td class="investment-section-subtotal text-right" contenteditable='true'>Investment Subtotal e.g. $5,000</td>
							<td></td>
						</tr>
					</tfoot>
				</table>
			</section>
		</div>
		
	</div>
	
</div>