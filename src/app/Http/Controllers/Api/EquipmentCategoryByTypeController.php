<?php


namespace App\Http\Controllers\Api;


use App\Enums\ApiCode;
use App\Http\Controllers\Controller;
use App\Services\EquipmentCategoryService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class EquipmentCategoryByTypeController extends Controller
{
    /**
     *
     * @param Request $request
     * @param EquipmentCategoryService $service
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke(Request $request, EquipmentCategoryService $service)
    {
        $categories = $service->getCategoryByType($request->type);
        return response()->json([
            'status' => Response::HTTP_OK,
            'code' => ApiCode::OK,
            'message' => 'Hospital by category fetched successfully',
            'data' => [
                'qty' => count($categories),
                'hospitals' => $categories,
            ]
        ]);
    }

}
