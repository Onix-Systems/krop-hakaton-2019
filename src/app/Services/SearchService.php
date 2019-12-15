<?php

namespace App\Services;

use App\Models\Equipments;

class SearchService extends AppService
{

    /**
     * @param array $filters
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getSearchData(array $filters)
    {
        $query = Equipments::query();

        if (isset($filters['q'])) {
            $query->where(function ($q) use ($filters) {
                $q->where('custodian_name', 'ILIKE', '%' . strtolower($filters['q']) . '%');
                $q->orWhere('diagnostic_type', 'ILIKE', '%' . strtolower($filters['q']) . '%');
            });
        }
        if (isset($filters['work_shedule'])) {
            $query->where(['work_shedule' => $filters['work_shedule']]);
        }
        if (isset($filters['diagnostic_type'])) {
            $query->where(['diagnostic_type' => $filters['diagnostic_type']]);
        }
        if (isset($filters['diagnostic_subgroup'])) {
            $query->where(['diagnostic_subgroup' => $filters['diagnostic_subgroup']]);
        }
        if (isset($filters['address_locality'])) {
            $query->where(['address-locality' => $filters['address_locality']]);
        }

        return $query->get();
    }
}
