class TimeTrackingAll{
    
    constructor(){
        if( $('#time-tracking').length == 0 ) return;
        
        this.init();
        this.bindEvents();
        this.startLoading();
    }
    
    init(){
        
        this.time_tracking_carousel = $('#time-tracking-create-invoice-modal .carousel');
        
        var start_date_picker = document.getElementById('time-tracking-datepicker-startdate');
        var end_date_picker = document.getElementById('time-tracking-datepicker-enddate');
        start_date_picker.value = moment().date(21).subtract(1,'month').format('YYYY-MM-DD')
        end_date_picker.value = moment().date(20).format('YYYY-MM-DD')
        
        new Pikaday({ 
            field: start_date_picker,
            maxDate: new Date()
        });
        new Pikaday({ 
            field: document.getElementById('time-tracking-datepicker-enddate'),
            maxDate: new Date()
        });
        
        // Updates the Text
        this.updateDateText();
        
        // Initialises the carousel
        this.time_tracking_carousel.carousel({
            interval: false
        });
        
    }
    
    bindEvents(){
        
        var _this = this;
        
        timeTrackingEntries.on('ready', this.createView, this);
        
        $('#time-tracking-datepicker-apply').click(function(){
            
            // Updates the text
            _this.updateDateText();
            // Fetches the data
            _this.fetchData();
            
        });
        
        $(document).on('click', '#time-tracking-pdf', function(){
            
            _this.getPDF( {
                project_ids : $(this).data('project-ids')
            } );
            
        });
        
        // On Modal Open - Only triggers once
        $('#time-tracking-create-invoice-modal').one('show.bs.modal',function(){
            _this.onCreateInvoiceModalOpen();
        });
        $('#time-tracking-create-invoice-modal').on('show.bs.modal',function(){
            _this.resetCreateInvoiceModal();
        });
        
        // On Clicking the invoice button
        $('#time-tracking-create-invoice-button').click(function(){
            _this.createInvoice();
        });
        
        // On clicking the send invoice button
        $('#time-tracking-send-invoice-button').click(function(){
            _this.sendInvoice();
        });
    }
    
    startLoading(){
        
        $(document).trigger('start_loading');
        
    }
    
    showError(){
        $('#time-tracking-list-loading').addClass('hidden');
        $('#time-tracking-list-error').removeClass('hidden');
    }
    
    //  ==========================================================
    //  Fetches the Data
    //  ==========================================================
    updateDateText(){
        
        // Updates the text
        $('#time-tracking-dates-start').html( moment( document.getElementById('time-tracking-datepicker-startdate').value, 'YYYY-MM-DD' ).format('Do MMM') );
        $('#time-tracking-dates-end').html( moment( document.getElementById('time-tracking-datepicker-enddate').value, 'YYYY-MM-DD' ).format('Do MMM') );
        
    }
    //  ==========================================================
    //  Fetches the Data
    //  ==========================================================
    fetchData(){
        
        $(document).trigger('start_loading');
        
        timeTrackingEntries.fetchReport({
            'since' : document.getElementById('time-tracking-datepicker-startdate').value,
            'until' : document.getElementById('time-tracking-datepicker-enddate').value
        });
        
    }
    //  ==========================================================
    //  Creates the View
    //  ==========================================================
    createView(){
        var template = _.template(
            $( "script.time-tracking-list-template" ).html()
        );
        $( "#time-tracking-list" ).html(
            template( { items : timeTrackingEntries.toJSON() } )
        );
        
        $('#time-tracking-list .menu .item').tab();
        
        var width = 0;
        $('.nav.nav-tabs li').each(function( index, el ){
            width += $(el).width();
        });
        $('.nav.nav-tabs').width( width );
    }
    
    //  ==========================================================
    //  Get PDF
    //  ==========================================================
    getPDF( parameters ){
        
        $(document).trigger('start_loading');
        
        var parameters = {
            'until' : document.getElementById('time-tracking-datepicker-enddate').value,
            'since' : document.getElementById('time-tracking-datepicker-startdate').value,
            'project_ids' : parameters.project_ids
        }
        var url = '/time-tracking/report/pdf?';
        
        if( !_.isEmpty(parameters) ){
            _.each(parameters, function( parameter, key ){
                url += key+'='+parameter+'&';
            });
        }
        jQuery.get(url)
            .done(function(response){
                window.open(response.url, '_blank');
            })
            .always(function(response){
                $(document).trigger('stop_loading');
            });
    }
    
    //  ==========================================================
    //  Creates Invoice Modal
    //  ==========================================================
    onCreateInvoiceModalOpen(){
        
        // Triggers a loading icon
        $.get('/api/clients', function(response){
            
            // Adds to the list
            _.each( response.client, function(client){
                $('#time-tracking-create-invoice-client select').append(
                    '<option value="'+client.client_id+'">'+client.first_name+' '+client.last_name+' - '+client.organization+'</option>'
                );
            } );
            
            // Initialises the list
            $('#time-tracking-create-invoice-client').removeClass('hidden');
            // Enable the button
            $('#time-tracking-create-invoice-button').removeAttr('disabled');
            
        })
        .always(function(response){
            $('#time-tracking-create-invoice-client-loading').addClass('hidden');
        });
        
    }
    resetCreateInvoiceModal(){
        
        //var $ = jQuery.noConflict();
        
        this.time_tracking_carousel.carousel(0);
        jQuery('#time-tracking-create-invoice-button').removeClass('hidden');
        jQuery('#time-tracking-view-invoice-button').addClass('hidden');
        jQuery('#time-tracking-send-invoice-button').data('invoice-id','').addClass('hidden');
        
    }
    createInvoice(){
        var $ = jQuery.noConflict();
        var _this = this;
        //var time = timeTrackingEntries.get( $('#time-tracking-list .tab-pane.active').data('project-ids') ).get('time')/1000/60/60;        
        var data = {
            '_token' : $('[name=_token]').val(),
            'client_id' : $('#time-tracking-create-invoice-client select').val(),
            'discount' : $('#time-tracking-create-invoice-discount').val(),
            'description' : $('#time-tracking-create-invoice-description').val(),
            'quantity'  :  timeTrackingEntries.get( $('#time-tracking-list .tab-pane.active').data('project-ids') ).get('time')/1000/60/60,
        }
        
        $('#time-tracking-create-invoice-button').attr('disabled','disabled');
        $('#time-tracking-create-invoice-button .fa-spinner').removeClass('hidden');
        
        //  Post to the server
        $.post('/time-tracking/invoice', data)
            .done(function(response){
                
                if( response['@attributes']['status'] == 'ok' ){
                    
                    // Sets the report url
                    $('#time-tracking-create-invoice-button').addClass('hidden');
                    $('#time-tracking-view-invoice-button').attr('href',response.invoice_url).removeClass('hidden');
                    $('#time-tracking-send-invoice-button').attr('data-invoice-id',response.invoice_id).removeClass('hidden');
                    
                    // Transit to next page
                    _this.time_tracking_carousel.carousel('next');
                    
                }
                
            })
            .always(function(response){
                $('#time-tracking-create-invoice-button').removeAttr('disabled');
                $('#time-tracking-create-invoice-button .fa-spinner').addClass('hidden');
            });
        
    }
    sendInvoice(){
        
        var $ = jQuery.noConflict();
        var time_tracking_send_invoice_button = $('#time-tracking-send-invoice-button');
        var data = {
            '_token' : $('[name=_token]').val(),
            'invoice_id' : time_tracking_send_invoice_button.attr('data-invoice-id')
        }
        
        // Disables the button
        time_tracking_send_invoice_button.attr('disabled','disabled');
        time_tracking_send_invoice_button.find('.fa-spinner').removeClass('hidden');
        
        // Sends the invoice
        $.post('/time-tracking/invoice/send', data)
            .done(function(response){
                if( response['@attributes']['status'] == 'ok' ){
                    alert('Invoice Sent!');
                }
            })
            .always(function(response){
                
                time_tracking_send_invoice_button.find('.fa-spinner').addClass('hidden');
                
            });
        
    }
    
}