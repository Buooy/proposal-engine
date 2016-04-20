var TimeTrackingEntry = Backbone.Model.extend({
    
});
var TimeTrackingEntries = Backbone.Collection.extend({
    model : TimeTrackingEntry,
    initialize: function() {
        
        // Create current date
        var curr_date = moment().date(20).format('YYYY-MM-DD');
        var prev_date = moment().date(21).subtract(1,'months').format('YYYY-MM-DD');
        
        // Basic GET from server
        this.fetchReport({
            'since' : prev_date,
            'until' : curr_date
        });
        
    },
    
    fetchReport:function( parameters ){
        this.fetchFromSrc( '/time-tracking/report?',{
            'since' : parameters.since,
            'until' : parameters.until
        });
    },
    
    fetchFromSrc: function( url, parameters ){
        
        var _this = this;
        
        if( !_.isEmpty(parameters) ){
            _.each(parameters, function( parameter, key ){
                url += key+'='+parameter+'&';
            });
        }
        //console.log(url);
        jQuery.get(url, function(response){
            
            var report_items = jQuery.parseJSON(response.report); 
            
            // Reset the list
            _this.reset(null);
            
            // Adds to the list
            _.each(report_items.data, function(item){
                item.formatted_time = _this.formatTime( item.time );
                item.since = parameters.since;
                item.until = parameters.until;
                _this.add(item);
            });
            
            _this.trigger('ready');
    
        }).always(function(response){
            $(document).trigger('stop_loading');
        });
        
    },
    
    // Misc Functions
    formatTime :function(ms) {
        var d, h, m, s;
        s = Math.floor(ms / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        //d = Math.floor(h / 24);
        //h = h % 24;
        
        // Leading Zeros
        if( s < 10 ){ s = '0'+s; }
        if( m < 10 ){ m = '0'+m; }
        if( h < 10 ){ h = '0'+h; }
        //if( d < 10 ){ d = '0'+d; }
        
        return h+":"+m+":"+s;
        //return { d: d, h: h, m: m, s: s };
    }
});
var timeTrackingEntries = new TimeTrackingEntries;