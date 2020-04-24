<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;


/**
 * @OA\Info(
 *     title="KropDiagnost API",
 *     version="1.0.0"
 * ),
 *
 * @OA\Server(
 *     url=L5_SWAGGER_CONST_HOST,
 *     description="KropDiagnost API server"
 * ),
 *
 * @OA\Response(
 *     response="OK",
 *     description="OK",
 *     @OA\JsonContent(
 *          @OA\Property(property="status", type="integer", example=200),
 *          @OA\Property(property="code", type="string", example="OK"),
 *          @OA\Property(property="message", type="string"),
 *     ),
 * ),
 *
 * Class Controller
 * @package App\Http\Controllers
 */
class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
