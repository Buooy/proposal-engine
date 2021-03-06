class ProposalAll{
    
    constructor(){
        if( $('#proposals-list').length < 0 ) return;
        
        this.bindEvents();
    }
    
    bindEvents(){
        
        var _this = this;
        $('[data-toggle="tooltip"]').tooltip();
        
        $('[data-action="download-proposal"]').click( function(e){ 
            e.preventDefault();
            _this.downloadProposal( this ); 
        });
        $('[data-action="delete-proposal"]').click( function(e){ 
            e.preventDefault();
            _this.deleteProposal( this ); 
        });
        
    }
    
    downloadProposal( _this ){
        
        var proposal_id = $(_this).parents('tr').attr('id');
        var data = {
            "_token" : $(_this).data('csrf')
        }
        
        // Starts the loading screen
        $(document).trigger('start_loading');
        
        $.post( '/proposal/download/'+proposal_id, data )
            .done(function(response){
                
                window.open(response.url);
                
            })
            .fail(function(response){
                console.log(response);
            })
            .always(function(response){
                
                $(document).trigger('stop_loading');
                
            });
        
    }
    
    deleteProposal( _this ){
        
        var result = confirm('Are you sure you want to delete this proposal? You cannot recover this.');
        if( !result ){ return; }
        
        var proposal_id = $(_this).parents('tr').attr('id');
        var data = {
            "_token" : $(_this).data('csrf')
        }
        
        $.post( '/proposal/delete/'+proposal_id, data )
            .done(function(response){
                $('#'+response.uid).remove();
                if( $('#proposals-list tbody tr').length <= 0 ){ window.location=window.location.href; }
            })
            .fail(function(response){
                console.log(response);
            });
        
    }
    
}