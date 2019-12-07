<?php

namespace App\Admin\Models\Imports;

use App\Models\Equipments;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Concerns\ToModel;

class ImportExcel implements ToModel
{
    /**
     * @param array $row
     * @return Equipments|\Illuminate\Database\Eloquent\Model|\Illuminate\Database\Eloquent\Model[]|void|null
     */
    public function model(array $row)
    {
//        Equipments::query()->delete();
        if ($row[2] == 'Україна') {
            return new Equipments([
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
                'sn_equipment' => $row[10] != 'null' ? $row[10] : '',
                'equipment_identifier' => $row[11],
                'producer_country' => $row[12],
                'producer_name' => $row[13],
                'producer_identifier' => $row[14] != 'null' ? $row[14] : '',
                'equipment_year' => $row[15],
                'equipment_life' => $row[16] != 'null' ? intval($row[16]) : 0,
                'registration_date' => $row[17],
                'equip_condition' => $row[18],
                'repair_date' => $row[19] != 'null' ? $row[19] : '',
                'repair_type' => $row[20] != 'null' ? $row[20] : '',
                'structure_name' => $row[21],
                'floor_number' => intval($row[22]),
                'room_number' => intval($row[23]),
                'inspection_type' => $row[24],
                'diagnostic_subgroup' => $row[25],
                'diagnostic_type' => $row[26],
                'diagnostic_quantity' => intval($row[27]),
                'work_shedule' => $row[28],
                'availability_restriction' => $row[29],
                'id_u' => md5(implode(',', $row))
            ]);
        }
        return;
    }
}
