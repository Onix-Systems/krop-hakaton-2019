<?php

namespace App\Services;

use App\Exceptions\Api\NotFound;
use App\Models\Equipments;
use Illuminate\Database\Eloquent\Builder;

class HospitalService extends AppService
{
    /**
     * Returns package history by tracking number
     *
     * @param string $id_u
     * @return Builder|\Illuminate\Database\Eloquent\Model|object
     * @throws NotFound
     */
    public function getHospital(string $id_u)
    {
        $hospital = Equipments::query()
            ->where('id_u', $id_u)
            ->get();

        if (!count($hospital)) {
            throw new NotFound('Not found category!');
        }

        return $hospital;
    }
}
