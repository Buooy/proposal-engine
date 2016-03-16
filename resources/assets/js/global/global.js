class Global{
    
    constructor(){
        
        this.bindEvents();
        
    }
    
    bindEvents(){
        
        this.initLoading();
        
    }
    
    //  The Loading Screen will listen to a global event on the document
    initLoading(){
        
        if( $('#loading-overlay').length <= 0 ){ return; }
        
        $(document).on('start_loading', function(){ $('#loading-overlay').removeClass('hidden'); });
        $(document).on('stop_loading', function(){ $('#loading-overlay').addClass('hidden'); });
        
    }
    
}