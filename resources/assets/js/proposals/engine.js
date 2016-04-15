class ProposalEngine{
    
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
            
            // Populates the scope of work table
            if( typeof proposal_data == 'undefined' || proposal_data.scope_of_work == {} ){
                // Creates a new blank scope of work
                this.scopeOfWorkAddTable();
            }else{
                // Populates the scope of work table with the necessary sections and items
                this.scopeOfWorkPopulate();
            }
        }
    }
    scopeOfWorkBindEvents(){
        
        if( $('[data-action=add-scope-of-work-section]').length > 0 ){
            var _this = this;
            this.scopeOfWorkSortTables();
            $('[data-action=add-scope-of-work-section]').click(function(){
                _this.scopeOfWorkAddTable();
            });
            $('#scope-of-work').on('click', '[data-action=delete-scope-of-work-section]',function(){
                _this.scopeOfWorkDeleteTable($(this).parents('.scope-of-work-section'));
            });
            $('#scope-of-work').on('click','[data-action=add-scope-of-work-row]',function(){
                _this.scopeOfWorkAddRow( $(this).parents('table') );
            });
            $('#scope-of-work').on('click', '[data-action="delete-scope-of-work-row"]', function(){
                _this.scopeOfWorkDeleteRow($(this).parents('tr'));
            });
        }
    }
    scopeOfWorkAddRow( table ){
        table.find('tbody').append( $('#scope-of-work-template tbody tr').clone() );
    }
    scopeOfWorkDeleteRow( row ){
        row.remove();
    }
    scopeOfWorkAddTable(){
        $('#scope-of-work').append( this.scopeOfWorkCloneTable() );
    }
    scopeOfWorkDeleteTable( section ){
        var confirmation = confirm("Are you sure you want to delete this section permanently?");
        if(confirmation){
            section.remove();
        }
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
    
    // Populates the scope of work tables with the necessary sections and items
    scopeOfWorkPopulate(){
        
        $.each(proposal_data.scope_of_work, function(section_index, section){
            
            // Create the section from the template
            var new_section = $('#scope-of-work-template .scope-of-work-section').clone();
            var new_section_tbody = new_section.find('tbody');
            var new_section_tr_template = new_section_tbody.find('tr');
            
            // Sets the section title
            new_section.find('.scope-of-work-section-title').html(section['section-title']);
            
            $.each( section['section-items'], function( index, item ){
                var new_section_tr = new_section_tr_template.clone();
                var _item = $('<div>'+item+'</div>');
                _item.find('[style]').removeAttr('style');
                // Sets the section items
                new_section_tr.find('.scope-of-work-item').html( _item.html() );
                // Adds to the tbody
                new_section_tbody.append(new_section_tr);
            } );
            // Prepends the scope of work to the table
            $('#scope-of-work').append(new_section);
            
            // Remove the template
            new_section_tr_template.remove();
            
        });
        
    }
    
    //  =========================================================
    //  Investment
    //  =========================================================
    initInvestment(){
        // Initializes the investment
        if( $('#investment').length > 0 ){
            this.investmentBindEvents();
            // Populates the investment table
            if( typeof proposal_data == 'undefined' || 
                proposal_data.investment == {} ){
                // Creates a new blank investment
                this.investmentAddTable();
            }else{
                // Populates the investment table with the necessary sections and items
                this.investmentPopulate();
            }
        }
    }
    investmentBindEvents(){
        
        if( $('[data-action=add-investment-section]').length > 0 ){
            var _this = this;
            this.investmentSortTables();
            $('[data-action=add-investment-section]').click(function(){
                _this.investmentAddTable();
            });
            $('#investment').on('click', '[data-action=delete-investment-section]',function(){
                _this.investmentDeleteTable($(this).parents('.investment-section'));
            });
            $('#investment').on('click','[data-action=add-investment-row]',function(){
                _this.investmentAddRow( $(this).parents('table') );
            });
            $('#investment').on('click', '[data-action="delete-investment-row"]', function(){
                _this.investmentDeleteRow($(this).parents('tr'));
            });
        }
    }
    investmentAddRow( table ){
        table.find('tbody').append( $('#investment-template tbody tr').clone() );
    }
    investmentDeleteRow( row ){
        row.remove();
    }
    investmentAddTable(){
        $('#investment').append( this.investmentCloneTable() );
    }
    investmentDeleteTable( section ){
        var confirmation = confirm("Are you sure you want to delete this section permanently?");
        if(confirmation){
            section.remove();
        }
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
    // Populates the scope of work tables with the necessary sections and items
    investmentPopulate(){
    
        // Populates each section of the investment
        $.each(proposal_data.investment['investment-sections'], function(section_index, section){
            // Create the section from the template
            var new_section = $('#investment-template .investment-section').clone();
            var new_section_tbody = new_section.find('tbody');
            var new_section_tr_template = new_section_tbody.find('tr');
            
            // Sets the section title
            new_section.find('.investment-section-title').html( section['section-title'] );
            new_section.find('.investment-section-subtotal').html( section['section-subtotal'] );
            $.each( section['section-items'], function( index, item ){
                var new_section_tr = new_section_tr_template.clone();
                // Sets the section items
                new_section_tr.find('.investment-name').html( item['name'] );
                new_section_tr.find('.investment-cost').html( item['cost'] );
                // Adds to the tbody
                new_section_tbody.append(new_section_tr);
            } );
            // Prepends the scope of work to the table
            $('#investment').append(new_section);
            
            // Remove the template
            new_section_tr_template.remove();
            
        });
        
        // Populates the investment total and notes
        $('#investment-total-name').html( proposal_data.investment['investment-total-name'] );
        $('#investment-total-cost').html( proposal_data.investment['investment-total-cost'] );
        $('#investment-additional-notes').html( proposal_data.investment['investment-additional-notes'] );
        
    }
    
    
    //  =========================================================
    //  Generate the proposal
    //  =========================================================
    initGenerateProposal(){
        var _this = this;
        $('[data-action="generate-proposal"]').click(function(){
            _this.generateProposal();
        });
        $('[data-action="update-proposal"]').click(function(){
            _this.updateProposal();
        });
    }
    generateProposal(){
        
        var data = this.getData();
        
        $.post('/proposal/new', data)
            .done(function(response){
                
                if(response.success){ 
                    window.location = '/proposals';
                }
                
            })
            .fail(function(response){
                
                // Unprocessable Entity - Validation failed
                if( response.status == 422 ){
                    
                    //var response_text = $.parseJSON(response.responseJSON);
                    var error_msg = $('<div class="alert alert-warning text-center" role="alert"></div>');
                    error_msg.append('<h3>Your Proposal Was Not Saved.</h3>');
                    
                    _.each(response.responseJSON,function( msgs, key ){
                        error_msg.append('<p><strong>'+key+'</strong></p>');
                        $(msgs).each(function(index, msg){
                            error_msg.append('<p>'+msg+'</p>');
                        });
                        error_msg.append('<hr>');
                    });
                    
                    $('#messages').html(error_msg);
                    
                }
                
            })
            .always(function(response){
                console.log(response);
                if( response.success ){
                    //window.location = '/proposals';
                }
                
            });
    }
    updateProposal(){
        
        var data = this.getData();
        
        $.post(window.location, data)
            .done(function(response){
                if( response.success ){
                    window.location = '/proposals';
                }
            })
            .fail(function(response){
                
                // Unprocessable Entity - Validation failed
                if( response.status == 422 ){
                    
                    //var response_text = $.parseJSON(response.responseJSON);
                    var error_msg = $('<div class="alert alert-warning text-center" role="alert"></div>');
                    error_msg.append('<h3>Your Proposal Was Not Saved.</h3>');
                    
                    _.each(response.responseJSON,function( msgs, key ){
                        error_msg.append('<p><strong>'+key+'</strong></p>');
                        $(msgs).each(function(index, msg){
                            error_msg.append('<p>'+msg+'</p>');
                        });
                        error_msg.append('<hr>');
                    });
                    
                    $('#messages').html(error_msg);
                    
                }
                
            })
            .always(function(response){
                
                console.log(response);
                
            });
        
    }
    getData(){
        
        // Form input fields
        var input_fields = new Array(
            'project-details-title',
            'project-details-type',
            'project-details-client-company-name',
            'project-details-client-company-website',
            'project-details-client-company-address',
            'project-details-client-contact-name',
            'project-details-client-contact-email',
            'project-overview',
            'project-timeline-main',
            'project-scope-of-work-introduction',
            'project-scope-of-work-end'
        );
        
        var data = {
            
            '_token'    :   $('[name=_token]').val()
            
        };
        
        // Get the form data that are in input/textarea
        $.each(input_fields, function(index, field_name){
            data[field_name] = $('#'+field_name).val();
        });
        
        // Get the form data for scope_of_work
        var scope_of_work = {};
        $('#scope-of-work .scope-of-work-section').each(function( section_index, section ){
            var scope_of_work_items = {};
            $(section).find('.scope-of-work-item').each(function( item_index, item ){
                scope_of_work_items[item_index] = $(item).html();
            });
            scope_of_work[ section_index ] = {
                'section-title' : $(section).find('.scope-of-work-section-title').html(),
                'section-items' : scope_of_work_items
            };
        });
        data['project-scope-of-work'] = JSON.stringify( scope_of_work );
        
        // Get the form data for investment
        var investment_sections = {};
        $('#investment .investment-section').each(function( section_index, section ){
            var investment_items = {};
            $(section).find('.investment-item').each(function( item_index, item ){
                investment_items[item_index] = {
                    'name'  :   $(item).find('.investment-name').html(),
                    'cost'  :   $(item).find('.investment-cost').html()
                }
            });
            investment_sections[ section_index ] = {
                'section-title' : $(section).find('.investment-section-title').html(),
                'section-items' : investment_items,
                'section-subtotal' : $(section).find('.investment-section-subtotal').html(),
            };
        });
        
        
        // Package the data
        var investment = {
            'investment-total-name' :   $('#investment-total #investment-total-name').removeAttr('style').html(),
            'investment-total-cost' :   $('#investment-total #investment-total-cost').removeAttr('style').html(),
            'investment-additional-notes'   :   $('#investment-total #investment-additional-notes').removeAttr('style').html(),
            'investment-sections'   :   investment_sections
        }
        data['project-investment'] = JSON.stringify( investment );
        
        return data;
        
    }
    
}