<?php


namespace App\Http\Controllers\Api;

use App\Enums\ApiCode;
use App\Exceptions\Api\NotFound;
use App\Http\Controllers\Controller;
use App\Services\HospitalService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class HospitalController extends Controller
{

    /**
     *
     * @param Request $request
     * @param string $id_u
     * @param HospitalService $service
     * @return \Illuminate\Http\JsonResponse
     * @throws NotFound
     */
    public function __invoke(Request $request, string $id_u, HospitalService $service)
    {
        $hospital = $service->getHospital($id_u);

        return response()->json([
            'status' => Response::HTTP_OK,
            'code' => ApiCode::OK,
            'message' => 'Hospital fetched successfully',
            'data' => [
                'hospitals' => $hospital
            ]
        ]);
    }
}
