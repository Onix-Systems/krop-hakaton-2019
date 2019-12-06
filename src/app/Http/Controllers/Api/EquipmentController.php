<?php

namespace App\Http\Controllers\Api;

use App\Enums\ApiCode;
use App\Exceptions\Api\NotFound;
use App\Http\Requests\Api\EquipmentRequest;
use App\Services\EquipmentService;
use Illuminate\Http\Response;

class EquipmentController
{

    /**
     *
     * @param EquipmentRequest $request
     * @param EquipmentService $service
     * @return \Illuminate\Http\JsonResponse
     * @throws NotFound
     */
    public function __invoke(EquipmentRequest $request, EquipmentService $service)
    {
        $equipment = $service->getAllEquipment();
        return response()->json([
            'status' => Response::HTTP_OK,
            'code' => ApiCode::OK,
            'message' => 'Equipment fetched successfully',
            'data' => $equipment
        ]);
    }

}
