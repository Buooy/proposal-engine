<table id="proposals-list" class="table table-striped">
    <thead>
        <tr>
            <th>Project Title</th>
            <th>Client Company</th>
            <th>Contact Name</th>
            <th>Contact Email</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
    @foreach ($proposals as $proposal)
        <tr id="{{ $proposal->uid }}">
            <td>{{ $proposal->{'project-details-title'} }}</td>
            <td>{{ $proposal->{'project-details-client-company-name'} }}</td>
            <td>{{ $proposal->{'project-details-client-contact-name'} }}</td>
            <td>
                <a href="mailto:{{ $proposal->{'project-details-client-contact-email'} }}" target="_blank">
                    {{ $proposal->{'project-details-client-contact-email'} }}
                </a>
            </td>
            <td>
                <a href="/proposal/preview/{{ $proposal->uid }}" class="actions" target="_blank"
                    data-toggle="tooltip" data-placement="top" title="Preview Proposal">
                    <i class="fa fa-eye"></i>
                </a>
                <a href="/proposal/edit/{{ $proposal->uid }}" class="actions"
                    data-toggle="tooltip" data-placement="top" title="Edit Proposal">
                    <i class="fa fa-pencil"></i>
                </a>
                <a href="#" class="actions" data-action="delete-proposal" data-csrf="{{ csrf_token() }}"
                    data-toggle="tooltip" data-placement="top" title="Delete Proposal">
                    <i class="fa fa-remove"></i>
                </a>
            </td>
        </tr>
    @endforeach    
    </tbody>
</table>