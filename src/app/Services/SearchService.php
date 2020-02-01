<?php

namespace App\Services;

use App\Models\Equipments;

class SearchService extends AppService
{

    /**
     * @param array $filters
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function getSearchData(array $filters)
    {
        $query = Equipments::query();

        if (!empty($filters['q'])) {
            $query->where(function ($q) use ($filters) {
                $q->where('custodian_name', 'ILIKE', '%' . strtolower($filters['q']) . '%');
                $q->orWhere('diagnostic_type', 'ILIKE', '%' . strtolower($filters['q']) . '%');
            });
        }
        if (!empty($filters['work_schedule'])) {
            $query->where(['work_shedule' => $filters['work_schedule']]);
        }
        if (!empty($filters['diagnostic_type'])) {
            $query->where(['diagnostic_type' => $filters['diagnostic_type']]);
        }
        if (!empty($filters['diagnostic_subgroup'])) {
            $query->where(['diagnostic_subgroup' => $filters['diagnostic_subgroup']]);
        }
        if (!empty($filters['address_locality'])) {
            $query->where(['address_locality' => $filters['address_locality']]);
        }
        if (!empty($filters['id_u'])) {
            $query->where(['id_u' => $filters['id_u']]);
        }

        $page = !empty($filters['page']) ? (int) $filters['page'] : 1;
        $perPage = !empty($filters['per_page']) ? (int) $filters['per_page'] : 20;

        return $query->paginate($perPage, ['*'], 'page', $page);
    }
}
