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
    public function getSearchData(string $keyword)
    {
        $data = Equipments::query()
            ->where('custodian_name', 'ILIKE', '%' . strtolower($keyword) . '%')
            ->orWhere('diagnostic_type', 'ILIKE', '%' . strtolower($keyword) . '%')
            ->get();

        if (!count($data)) {
            throw new NotFound('Not found!');
        }

        return $data;
    }
}
