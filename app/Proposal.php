<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Proposal extends Model
{
    
    use SoftDeletes;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'uid',
        'project-details-title',
        'project-details-client-company-name',
        'project-details-client-company-website',
        'project-details-client-company-address',
        'project-details-client-contact-name',
        'project-details-client-contact-email',
    ];
    
    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    
    /**
    * The table associated with the model.
    *
    * @var string
    */
   protected $table = 'proposals';
}
