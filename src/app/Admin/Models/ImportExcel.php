<?php

namespace App\Admin\Models;

use Illuminate\Database\Eloquent\Model;
use Maatwebsite\Excel\Concerns\ToModel;

class ImportExcel implements ToModel
{
    /**
     * @inheritDoc
     */
    public function model(array $row)
    {
        return new FileTable([
            'custodian_name' => $row[0],
            'custodian_identifier' => $row[1],
            'address_country_name' => $row[2],
            'address_region' => $row[3],
            'address_locality' => $row[4],
            'address_street_address' => $row[5],
            'latitude' => $row[6],
            'longitude' => $row[7],
            'equipment_title' => $row[8],
            'equipment_model' => $row[9],
            'sn_equipment' => $row[10],
            'equipment_identifier' => $row[11],
            'producer_country' => $row[12],
            'producer_name' => $row[13],
            'producer_identifier' => $row[14],
            'equipment_year' => $row[15],
            'equipment_life' => $row[16],
            'registration_date' => $row[17],
            'equip_condition' => $row[18],
            'repair_date' => $row[19],
            'repair_type' => $row[20],
            'structure_name' => $row[21],
            'floor_number' => $row[22],
            'room_number' => $row[23],
            'inspection_type' => $row[24],
            'diagnostic_subgroup' => $row[25],
            'diagnostic_type' => $row[26],
            'diagnostic_quantity' => $row[27],
            'work_shedule' => $row[28],
            'availability_restriction' => $row[29],
        ]);
    }
}
