<?php

namespace App\Http\Controllers\Api;


use App\Enums\ApiCode;
use App\Exceptions\Api\NotFound;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\SearchRequest;
use App\Services\SearchService;
use Illuminate\Http\Response;

class SearchController extends Controller
{
    /**
     *
     * @param SearchRequest $request
     * @param SearchService $service
     * @return \Illuminate\Http\JsonResponse
     * @throws NotFound
     */
    public function __invoke(SearchRequest $request, SearchService $service)
    {
        $data = $service->getSearchData($request->all());

        return response()->json([
            'status' => Response::HTTP_OK,
            'code' => ApiCode::OK,
            'message' => 'Hospital fetched successfully',
            'data' => [
                'qty' => count($data),
                'search_result' => $data
            ]
        ]);
    }
}
