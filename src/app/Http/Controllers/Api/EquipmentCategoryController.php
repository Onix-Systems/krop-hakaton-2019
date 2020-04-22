<?php


namespace App\Http\Controllers\Api;


use App\Enums\ApiCode;
use App\Exceptions\Api\NotFound;
use App\Http\Controllers\Controller;
use App\Services\EquipmentCategoryService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class EquipmentCategoryController extends Controller
{

    /**
     * @OA\Get(
     *     path="/get-equipment/category",
     *     summary="Return list of all gategoties",
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
     *                      @OA\Property(property="qty", type="integer"),
     *                      @OA\Property(
     *                          property="categories",
     *                          type="array",
     *                          @OA\Items(
     *                              @OA\Property(property="name", type="string"),
     *                              @OA\Property(
     *                                  property="list",
     *                                  type="array",
     *                                  @OA\Items(
     *                                      @OA\Property(property="0", type="string"),
     *                                  ),
     *                               ),
     *                             ),
     *                          ),
     *                      ),
     *                  ),
     *              ),
     *          ),
     *     ),
     * )
     *
     * @param Request $request
     * @param string $id
     * @param EquipmentCategoryService $service
     * @return \Illuminate\Http\JsonResponse
     * @throws NotFound
     */
    public function __invoke(Request $request, EquipmentCategoryService $service)
    {
        $categories = $service->getCategory();
        return response()->json([
            'status' => Response::HTTP_OK,
            'code' => ApiCode::OK,
            'message' => 'Categories fetched successfully',
            'data' => [
                'qty' => count($categories),
                'categories' => $categories
            ]
        ]);
    }
}
