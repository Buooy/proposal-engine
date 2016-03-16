class InvoicesAll{
    
    constructor(){
        if( $('#invoices').length == 0 ) return;
        
        this.bindEvents();
        this.getUnpaidInvoices();
        this.startLoading();
    }
    
    bindEvents(){
        
        var _this = this;
        
        $('[data-action="get-all-invoices"]').click(function(){ 
            _this.startLoading();
            _this.getAllInvoices(); 
        });
        $('[data-action="get-unpaid-invoices"]').click(function(){ 
            _this.startLoading();
            _this.getUnpaidInvoices(); 
        });
        
    }
    
    startLoading(){
        
        if( $('#invoices-list').length > 0 ){ 
            $('#invoices-list').addClass('hidden');
        }
        $('#invoices-list-loading').removeClass('hidden');
        
    }
    
    showError(){
        $('#invoices-list-loading').addClass('hidden');
        $('#invoices-list-error').removeClass('hidden');
    }
    
    cloneEmptyList(){
        if( $('#invoices-list').length > 0 ){
            $('#invoices-list').remove();
        }
        $('#invoices').prepend( $('#invoices-list-template').clone().attr('id','invoices-list') );
    }
    
    getAllInvoices(){
        
        var _this = this;
        
        $.post('/invoices', { '_token' : $('#invoices [name=_token]').val() })
            .done(function( response ){
                
                if( response.invoices.length == 0 ){
                    _this.showError();
                }else{
                    _this.cloneEmptyList();
                    _this.populateList( response );
                }
                
            });
        
    }
    
    getUnpaidInvoices(){
        
        var _this = this;
        
        $.post('/invoices/unpaid', { '_token' : $('#invoices [name=_token]').val() })
            .done(function( response ){
                
                if( response.invoices.length == 0 ){
                    _this.showError();
                }else{
                    _this.cloneEmptyList();
                    _this.populateList( response );
                }
                
            });
        
    }
    
    populateList( response ){
        
        var invoices = response.invoices;
        var invoice_list_body = $('#invoices-list tbody');
        
        $.each(invoices, function(index, invoice){
            
            var invoice_line = invoice_list_body.find('tr.template').clone();
            
            // Populate the data
            invoice_line.find('.invoice-number').html( invoice.number );
            invoice_line.find('.invoice-status .label-status').html( invoice.status ).addClass( response.status_classes[ invoice.status ] );
            invoice_line.find('.invoice-organization').html( invoice.organization );
            invoice_line.find('.invoice-client-name').html( invoice.first_name + ' ' + invoice.last_name );
            invoice_line.find('.invoice-amount-outstanding').html( invoice.currency_code+' '+invoice.amount_outstanding )
                .attr('data-sort',invoice.amount_outstanding*100);
            invoice_line.find('.invoice-paid').html( invoice.currency_code+' '+invoice.paid )
                .attr('data-sort',invoice.paid*100);
            invoice_line.find('.invoice-amount').html( invoice.currency_code+' '+invoice.amount )
                .attr('data-sort',invoice.amount*100);
            invoice_line.find('.view-invoice').attr( 'href', invoice.links.view );
            invoice_line.find('.edit-invoice').attr( 'href', invoice.links.edit );
            
            // Show the lines
            invoice_line.removeClass('template').removeClass('hidden');
            
            // Adds to the body
            invoice_list_body.append(invoice_line);
            
        });
        
        
        $('#invoices-list-loading').addClass('hidden');
        $('#invoices-list').removeClass('hidden');
        $('#invoices-list tr.template').remove();
        
        // Sort table
        new Tablesort(document.getElementById('invoices-list'));
        
    }
    
}