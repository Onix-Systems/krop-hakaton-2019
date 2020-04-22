<?php

namespace App\Http\Controllers\Api;

use App\Enums\ApiCode;
use App\Http\Controllers\Controller;
use App\Services\FiltersService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class FiltersController extends Controller
{
    /**
     *
     * @OA\Get(
     *     path="/filters",
     *     summary="Return list of filters",
     *     tags={"Equipment"},
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
     *                          property="address_locality",
     *                          type="array",
     *                          @OA\Items(
     *                              @OA\Property(property="0", type="string"),
     *                          ),
     *                      ),
     *                      @OA\Property(
     *                          property="q",
     *                          type="array",
     *                          @OA\Items(
     *                              @OA\Property(property="0", type="string"),
     *                          ),
     *                      ),
     *                      @OA\Property(
     *                          property="diagnostic_subgroup",
     *                          type="array",
     *                          @OA\Items(
     *                              @OA\Property(property="0", type="string"),
     *                          ),
     *                      ),
     *                      @OA\Property(
     *                          property="diagnostic_type",
     *                          type="array",
     *                          @OA\Items(
     *                              @OA\Property(property="0", type="string"),
     *                          ),
     *                      ),
     *                      @OA\Property(
     *                          property="work_schedule",
     *                          type="array",
     *                          @OA\Items(
     *                              @OA\Property(property="0", type="string"),
     *                          ),
     *                      ),
     *                  ),
     *              ),
     *          ),
     *     ),
     * )
     *
     * @param \Illuminate\Http\Request $request
     * @param FiltersService $service
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke(Request $request, FiltersService $service)
    {
        $availableFilters = $service->getAvailableFilters();

        return response()->json([
            'status' => Response::HTTP_OK,
            'code' => ApiCode::OK,
            'message' => 'Filters fetched successfully',
            'data' => $availableFilters,
        ]);
    }
}
