class Engine{
    
    constructor(){
        
        if( typeof jQuery == 'undefined' ){ return; }
        this.init();
        
    }
    
    init(){
        
        this.initSummernote();
        this.initGenerateProposal();
        this.initScopeOfWork();
        this.initInvestment();
    }
    
    initSummernote(){
        
        if( $('.summernote').length > 0 ){
            $('.summernote').summernote({
                height: 300
            });
        }
        
    }
    
    //  =========================================================
    //  Scope of Work
    //  =========================================================
    initScopeOfWork(){
        // Initializes the scope of work
        if( $('#scope-of-work').length > 0 ){
            this.scopeOfWorkBindEvents();
            // Copies the scope of work template table
            this.scopeOfWorkAddTable();
        }
    }
    scopeOfWorkBindEvents(){
        
        if( $('[data-action=add-scope-of-work-section]').length > 0 ){
            var _this = this;
            this.scopeOfWorkSortTables();
            $('[data-action=add-scope-of-work-section]').click(function(){
                _this.scopeOfWorkAddTable();
            });
            $('#scope-of-work').on('click','[data-action=add-scope-of-work-row]',function(){
                _this.scopeOfWorkAddRow( $(this).parents('table') );
            });
        }
    }
    scopeOfWorkAddRow( table ){
        table.find('tbody').append( $('#scope-of-work-template tbody tr').clone() );
    }
    scopeOfWorkAddTable(){
        $('#scope-of-work').append( this.scopeOfWorkCloneTable() );
    }
    scopeOfWorkCloneTable(){
        var table = $('#scope-of-work-template .scope-of-work-section').clone();
        this.scopeOfWorkSortRows( table );
        return table;
    }
    scopeOfWorkSortRows( table ){
        table.find('tbody').sortable({
            animation   :   100,
            handle      :   '.sort-handler'
        });
    }
    scopeOfWorkSortTables(){
        $('#scope-of-work').sortable({
            animation   :   100
        });
    }
    
    //  =========================================================
    //  Investment
    //  =========================================================
    initInvestment(){
        // Initializes the investment
        if( $('#investment').length > 0 ){
            this.investmentBindEvents();
            // Copies the investment template table
            this.investmentAddTable();
        }
    }
    investmentBindEvents(){
        
        if( $('[data-action=add-investment-section]').length > 0 ){
            var _this = this;
            this.investmentSortTables();
            $('[data-action=add-investment-section]').click(function(){
                _this.investmentAddTable();
            });
            $('#investment').on('click','[data-action=add-investment-row]',function(){
                _this.investmentAddRow( $(this).parents('table') );
            });
        }
    }
    investmentAddRow( table ){
        table.find('tbody').append( $('#investment-template tbody tr').clone() );
    }
    investmentAddTable(){
        $('#investment').append( this.investmentCloneTable() );
    }
    investmentCloneTable(){
        var table = $('#investment-template .investment-section').clone();
        this.investmentSortRows( table );
        return table;
    }
    investmentSortRows( table ){
        table.find('tbody').sortable({
            animation   :   100,
            handle      :   '.sort-handler'
        });
    }
    investmentSortTables(){
        $('#investment').sortable({
            animation   :   100
        });
    }
    
    
    //  =========================================================
    //  Generate the proposal
    //  =========================================================
    initGenerateProposal(){
        var _this = this;
        $('[data-action="generate-proposal"]').click(function(){
            _this.generateProposal();
        });
    }
    generateProposal(){
        
        // Form input fields
        var input_fields = new Array(
            'project-details-title',
            'project-details-client-company-name',
            'project-details-client-company-website',
            'project-details-client-company-address',
            'project-details-client-contact-name',
            'project-details-client-contact-email'
        );
        var data = {
            
            '_token'    :   $('[name=_token]').val()
            
        };
        // Get all the form data
        $.each(input_fields, function(index, field_name){
            data[field_name] = $('#'+field_name).val();
        });
        
        
        $.post('/proposal/new', data)
            .always(function(response){
                
                console.log(response);
                
            });
    }
    
}