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
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
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
