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
        if (isset($filters['work_schedule'])) {
            $query->where(['work_shedule' => $filters['work_schedule']]);
        }
        if (isset($filters['diagnostic_type'])) {
            $query->where(['diagnostic_type' => $filters['diagnostic_type']]);
        }
        if (isset($filters['diagnostic_subgroup'])) {
            $query->where(['diagnostic_subgroup' => $filters['diagnostic_subgroup']]);
        }
        if (isset($filters['address_locality'])) {
            $query->where(['address_locality' => $filters['address_locality']]);
        }
        if (isset($filters['id_u'])) {
            $query->where(['id_u' => $filters['id_u']]);
        }

        return $query->get();
    }
}
