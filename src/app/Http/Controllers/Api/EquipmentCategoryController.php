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
