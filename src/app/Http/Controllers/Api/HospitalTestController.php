<?php


namespace App\Http\Controllers\Api;


use App\Enums\ApiCode;
use App\Exceptions\Api\NotFound;
use App\Http\Controllers\Controller;
use App\Models\FileTable;
use App\Services\HospitalService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

class HospitalTestController extends Controller
{
    /**
     *
     * @param Request $request
     * @param string $id
     * @param HospitalService $service
     * @return \Illuminate\Http\JsonResponse
     * @throws NotFound
     */
    public function __invoke(Request $request, string $id = '2', HospitalService $service)
    {
        $data = FileTable::query()
            ->select([
                'custodian_name',
                'diagnostic_type',
                'structure_name',
            ])
            ->get()
            ->toArray();

        $hash = [];
        $count = count($data);
        foreach ($data as $key => $value) {
            $_hash = Hash::make($value['custodian_name'] . $value['diagnostic_type'] . $value['structure_name']);
            $hash[base64_encode($_hash)] = base64_encode($_hash);
//            var_dump($value->custodian_name);
//            var_dump($value->diagnostic_type);
//            var_dump($value->structure_name);
        }

        return response()->json([
            'status' => Response::HTTP_OK,
            'code' => ApiCode::OK,
            'message' => 'Hospital fetched successfully',
            'data' => $hash,
            'count_before' => $count,
            'count_after' => count($hash),
        ]);
    }
}
