class TimeTrackingAll{
    
    constructor(){
        if( $('#time-tracking').length == 0 ) return;
        
        this.init();
        this.bindEvents();
        this.startLoading();
    }
    
    init(){
        
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
    }
    
    
}