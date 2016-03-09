<div class="step-pane alert" data-step="5">
	
	<div class="row">	
		<div class="col-sm-4"><h4>Investment</h4></div>
		<div class="col-sm-8 text-right">
			<button class="btn btn-success" data-action="add-investment-section">Add Section</button>
		</div>
	</div>
	
	<div class="row">
		<div class="col-xs-12" id="investment"></div>
		
		<div class="col-xs-12 hidden" id="investment-template">
			<section class="investment-section">
				<table class="table table-striped">
					<thead>
						<tr>
							<th colspan="2" contenteditable="true">Edit This Section Title</th>
							<th class="text-right">
								<button class="btn btn-xs btn-primary" data-action="add-investment-row">
									<i class="fa fa-plus"></i>&nbsp;&nbsp;Add Row
								</button>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="investment-sort-handler"><i class='fa fa-ellipsis-v sort-handler'></i></td>
							<td class="investment-name"><span contenteditable='true'>Investment Item Name</span></td>
							<td class="investment-cost text-right"><span contenteditable='true'>Investment Cost e.g. $5,000</span></td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td></td>
							<td class="text-right"><b>Subtotal : </b></td>
							<td class="investment-subtotal text-right"><span contenteditable='true'>Investment Subtotal e.g. $5,000</span></td>
						</tr>
					</tfoot>
				</table>
			</section>
		</div>
		
	</div>
	
</div>