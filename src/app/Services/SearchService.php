<?php

namespace App\Services;

use App\Exceptions\Api\NotFound;
use App\Models\Equipments;

class SearchService extends AppService
{

    /**
     * @param string $keyword
     * @return \Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     * @throws NotFound
     */
    public function getSearchData(array $keyword)
    {
        $data = Equipments::query();

        if (isset($keyword['q'])) {
            $data->where(function ($q) use ($keyword) {
                $q->where('custodian_name', 'ILIKE', '%' . strtolower($keyword['q']) . '%');
                $q->orWhere('diagnostic_type', 'ILIKE', '%' . strtolower($keyword['q']) . '%');
            });
        }
        if (isset($keyword['work-shedule'])) {
            $data->where(['work_shedule' => $keyword['work-shedule']]);
        }
        if (isset($keyword['diagnostic-type'])) {
            $data->where(['diagnostic_type' => $keyword['diagnostic-type']]);
        }
        if (isset($keyword['diagnostic-subgroup'])) {
            $data->where(['diagnostic_subgroup' => $keyword['diagnostic-subgroup']]);
        }

        $data = $data->get();

        if (!count($data)) {
            throw new NotFound('Not found!');
        }

        return $data;
    }
}
