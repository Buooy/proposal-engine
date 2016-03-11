class InvoicesAll{
    
    constructor(){
        if( $('#invoices').length < 0 ) return;
        
        this.bindEvents();
        this.initLoading();
    }
    
    bindEvents(){
        
        var _this = this;
        
    }
    
    initLoading(){
        
        var _this = this;
        $.post('/invoices', { '_token' : $('#invoices [name=_token]').val() })
            .done(function( response ){
                
                if( response.invoices.length == 0 ){
                    _this.showError();
                }else{
                    _this.populateList( response );
                }
                
            });
        
    }
    
    showError(){
        $('#invoices-list-loading').addClass('hidden');
        $('#invoices-list-error').removeClass('hidden');
    }
    
    populateList( response ){
        var invoices = response.invoices;
        console.log(invoices);
        var invoice_list_body = $('#invoices-list tbody');
        
        $.each(invoices, function(index, invoice){
            
            var invoice_line = invoice_list_body.find('tr.template').clone();
            
            // Populate the data
            invoice_line.find('.invoice-number').html( invoice.number );
            invoice_line.find('.invoice-status .label-status').html( invoice.status ).addClass( response.status_classes[ invoice.status ] );
            invoice_line.find('.invoice-organization').html( invoice.organization );
            invoice_line.find('.invoice-client-name').html( invoice.first_name + ' ' + invoice.last_name );
            invoice_line.find('.invoice-amount-outstanding').html( invoice.currency_code+invoice.amount_outstanding );
            invoice_line.find('.invoice-paid').html( invoice.currency_code+invoice.paid );
            invoice_line.find('.invoice-amount').html( invoice.currency_code+invoice.amount );
            invoice_line.find('.view-invoice').attr( 'href', invoice.links.view );
            invoice_line.find('.edit-invoice').attr( 'href', invoice.links.edit );
            
            // Show the lines
            invoice_line.removeClass('template').removeClass('hidden');
            
            // Adds to the body
            invoice_list_body.append(invoice_line);
            
        });
        
        
        $('#invoices-list-loading').addClass('hidden');
        $('#invoices-list').removeClass('hidden');
        
    }
    
}