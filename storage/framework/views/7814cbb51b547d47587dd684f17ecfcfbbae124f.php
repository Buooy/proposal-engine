<table id="proposals-list" class="table table-striped">
    <thead>
        <tr>
            <th>Project Title</th>
            <th>Type</th>
            <th>Client Company</th>
            <th>Contact Name</th>
            <th>Contact Email</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
    <?php foreach($proposals as $proposal): ?>
        <tr id="<?php echo e($proposal->uid); ?>">
            <td><?php echo e($proposal->{'project-details-title'}); ?></td>
            <td>
                <span class="label label-<?php echo e($type_meta[ $proposal->{'project-details-type'} ]['class']); ?>">
                    <?php echo e($type_meta[ $proposal->{'project-details-type'} ]['name']); ?>

                </span>
            </td>
            <td><?php echo e($proposal->{'project-details-client-company-name'}); ?></td>
            <td><?php echo e($proposal->{'project-details-client-contact-name'}); ?></td>
            <td>
                <a href="mailto:<?php echo e($proposal->{'project-details-client-contact-email'}); ?>" target="_blank">
                    <?php echo e($proposal->{'project-details-client-contact-email'}); ?>

                </a>
            </td>
            <td>
                <a href="/proposal/preview/<?php echo e($proposal->uid); ?>" class="actions" target="_blank"
                    data-toggle="tooltip" data-placement="top" title="Preview Proposal">
                    <i class="fa fa-eye"></i>
                </a>
                <a href="#" class="actions" data-action="download-proposal" data-csrf="<?php echo e(csrf_token()); ?>"
                    data-toggle="tooltip" data-placement="top" title="Download PDF">
                    <i class="fa fa-file-pdf-o"></i>
                </a>
                <a href="/proposal/edit/<?php echo e($proposal->uid); ?>" class="actions"
                    data-toggle="tooltip" data-placement="top" title="Edit Proposal">
                    <i class="fa fa-pencil"></i>
                </a>
                <a href="#" class="actions" data-action="delete-proposal" data-csrf="<?php echo e(csrf_token()); ?>"
                    data-toggle="tooltip" data-placement="top" title="Delete Proposal">
                    <i class="fa fa-remove"></i>
                </a>
            </td>
        </tr>
    <?php endforeach; ?>    
    </tbody>
</table>