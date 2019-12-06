<?php

namespace App\Admin\Models;

use Illuminate\Database\Eloquent\Model;

class FileTable extends Model
{

    protected $table = 'file_table_with_content';

    protected $fillable = [
        'custodian_name',
        'custodian_identifier',
        'address_country_name',
        'address_region',
        'address_locality',
        'address_street_address',
        'latitude',
        'longitude',
        'equipment_title',
        'equipment_model',
        'sn_equipment',
        'equipment_identifier',
        'producer_country',
        'producer_name',
        'producer_identifier',
        'equipment_year',
        'equipment_life',
        'registration_date',
        'equip_condition',
        'repair_date',
        'repair_type',
        'structure_name',
        'floor_number',
        'room_number',
        'inspection_type',
        'diagnostic_subgroup',
        'diagnostic_type',
        'diagnostic_quantity',
        'work_shedule',
        'availability_restriction'
    ];


}
