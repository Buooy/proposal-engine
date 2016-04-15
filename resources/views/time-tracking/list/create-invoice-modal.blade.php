<div id="time-tracking-create-invoice-modal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body carousel slide">
                <section class="carousel-inner" role="listbox">
                    
                    <!-- CREATES THE INVOICE -->
                    <article id="time-tracking-create-invoice-screen" class="item active">
                        <div class="row">    
                            <div class="col-xs-6 form-group">
                                <h4>Client</h4>
                                    <p id="time-tracking-create-invoice-client-loading">
                                        <i class="fa fa-spinner fa-spin"></i>&nbsp;Loading Clients
                                    </p>
                                    <div class="btn-group selectlist hidden" id="time-tracking-create-invoice-client" style="width:100%">
                                        <select class="form-control"></select>
                                    </div>
                            </div>
                            <div class="col-xs-6 form-group">
                                <h4>Discount (%)</h4>
                                <input id="time-tracking-create-invoice-discount" class="form-control" type="number" value="0">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <h4>Description</h4>
                                <input id="time-tracking-create-invoice-description" class="form-control" type="text">
                            </div>
                        </div>
                    </article>
                    
                    <!-- SUCCESS MESSAGE -->
                    <article id="time-tracking-create-invoice-success" class="item">
                        <div class="row">
                            <div class="col-xs-12 text-center">
                                <figure>
                                    <img src="{{ load_asset('img/icons/animated/browser.gif') }}" class="img-responsive">
                                </figure>
                                <h1>Invoice Created</h1>
                            </div>
                        </div>
                    </article>
                    
                    
                </section>
            </div>
            <div class="modal-footer">
                <button id="time-tracking-create-invoice-button" class="btn btn-success" disabled>
                    Create Invoice&nbsp;<i class="fa fa-spinner fa-spin hidden"></i>
                </button>
                <a id="time-tracking-view-invoice-button" class="btn btn-primary hidden" href="#" target="_blank">
                    View Invoice
                </a>
                <button id="time-tracking-send-invoice-button" class="btn btn-warning hidden" data-invoice-id="">
                    Send Invoice&nbsp;<i class="fa fa-spinner fa-spin hidden">
                </button>
            </div>
        </div>
    </div>
</div>