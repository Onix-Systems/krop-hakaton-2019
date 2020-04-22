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
     * @OA\Get(
     *     path="/hospital/{id_u}",
     *     summary="Return hospital data by id_u",
     *     tags={"Equipment"},
     *     @OA\RequestBody(
     *          @OA\JsonContent(
     *              required={
     *                  "id_u"
     *              },
     *              @OA\Property(
     *                  property="type",
     *                  type="string",
     *                  uniqueItems=true,
     *                  example="fb78ab4f49574da62907afa386a404d4"
     *              ),
     *          ),
     *     ),
     *     @OA\Response(
     *          response="200",
     *          description="OK",
     *          @OA\JsonContent(
     *              @OA\Property(property="status", type="integer", example=200),
     *              @OA\Property(property="code", type="string", example="OK"),
     *              @OA\Property(property="message", type="string"),
     *              @OA\Property(
     *                  property="data",
     *                  type="array",
     *                  @OA\Items(
     *                      @OA\Property(
     *                          property="hospitals",
     *                          type="array",
     *                          @OA\Items(
     *                              @OA\Property(property="id", type="integer"),
     *                              @OA\Property(property="custodian_name", type="string"),
     *                              @OA\Property(property="custodian_identifier", type="string"),
     *                              @OA\Property(property="address_country_name", type="string"),
     *                              @OA\Property(property="address_region", type="string"),
     *                              @OA\Property(property="address_locality", type="string"),
     *                              @OA\Property(property="address_street_address", type="string"),
     *                              @OA\Property(property="latitude", type="string"),
     *                              @OA\Property(property="longitude", type="string"),
     *                              @OA\Property(property="equipment_title", type="string"),
     *                              @OA\Property(property="equipment_model", type="string"),
     *                              @OA\Property(property="sn_equipment", type="string"),
     *                              @OA\Property(property="equipment_identifier", type="string"),
     *                              @OA\Property(property="producer_country", type="string"),
     *                              @OA\Property(property="producer_name", type="string"),
     *                              @OA\Property(property="producer_identifier", type="string"),
     *                              @OA\Property(property="equipment_year", type="string"),
     *                              @OA\Property(property="equipment_life", type="integer"),
     *                              @OA\Property(property="registration_date", type="string"),
     *                              @OA\Property(property="equip_condition", type="string"),
     *                              @OA\Property(property="repair_date", type="string"),
     *                              @OA\Property(property="repair_type", type="string"),
     *                              @OA\Property(property="structure_name", type="string"),
     *                              @OA\Property(property="floor_number", type="integer"),
     *                              @OA\Property(property="room_number", type="integer"),
     *                              @OA\Property(property="inspection_type", type="string"),
     *                              @OA\Property(property="diagnostic_subgroup", type="string"),
     *                              @OA\Property(property="diagnostic_type", type="string"),
     *                              @OA\Property(property="diagnostic_quantity", type="integer"),
     *                              @OA\Property(property="work_shedule", type="string"),
     *                              @OA\Property(property="availability_restriction", type="string"),
     *                              @OA\Property(property="created_at", type="string"),
     *                              @OA\Property(property="updated_at", type="string"),
     *                              @OA\Property(property="id_u", type="string"),
     *                          ),
     *                      ),
     *                  ),
     *              ),
     *          ),
     *     ),
     * )
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
