<section id="time-tracking-list"></section>

<script type="text/template" class="time-tracking-list-template">
    
    <div class="nav-tabs-container">
        <ul class="nav nav-tabs" role="tablist">
        <% _.each( items, function( item, index ){ %>
            <li role="presentation" class="<% if(index == 0){ %> active<% } %>">
                <a href="#<%- item.id %>" aria-controls="<%- item.id %>" role="tab" data-toggle="tab">
                    <%- item.title.project %>
                </a>
            </li>
        <% }) %>
        </ul>
    </div>
     <div class="tab-content">
    <% _.each( items, function( item, index ){ %>
        <div role="tabpanel" class="tab-pane <% if(index == 0){ %> active<% } %>" id="<%- item.id %>">
            <h3 class="pull-left"><span class="label" style="background-color:<%- item.title.hex_color %>"><%- item.title.client %></span></h3>
            <h3 class="pull-right"><span class="label label-warning"><%- item.formatted_time %></span></h3>
            <a href="#" id="time-tracking-pdf" 
                data-project-ids="<%- item.id %>"
                class="btn btn-danger pull-right"><i class="fa fa-file-pdf-o"></i></a>
            
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th class="title">Title</th>
                        <th class="time">Time</th>
                    </tr>
                </thead> 
                <tbody>   
                <% _.each( item.items, function( entry, index ){ %>
                    <tr>
                        <td class="title"><%- entry.title.time_entry %></td>
                        <td class="time"><%- moment.utc(entry.time).format("HH:mm:ss") %></td>
                    </tr>
                <% }); %>
                </tbody>
                <tfoot>
                    <tr>
                        <td class="text-right"><b>Total</b></td>
                        <td class="time"><b><%- item.formatted_time %></b></td>
                    </tr>
                </tfoot>
            </table>
            
        </div>
    <% }) %>
    </div>

</script>