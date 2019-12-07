<?php

namespace App\Services;

use App\Exceptions\Api\NotFound;
use App\Models\Equipments;

class EquipmentService extends AppService
{
    /**
     * Returns package history by tracking number
     *
     * @return array
     * @throws NotFound
     */
    public function getAllEquipment()
    {
        $equipment = Equipments::query()
            ->get();

        if (!count($equipment)) {
            throw new NotFound('Equipment not found');
        }

        return $equipment;
    }
}
