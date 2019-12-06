<?php

namespace App\Services;

use App\Exceptions\Api\NotFound;
use App\Models\FileTable;

class HospitalService extends AppService
{
    /**
     * Returns package history by tracking number
     *
     * @param int $id
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Model|object
     * @throws NotFound
     */
    public function getHospital(int $id)
    {
        $hospital = FileTable::query()
            ->select([
                'id',
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
            ])
            ->where('id', $id)
            ->get();

        return $hospital;
    }
}
