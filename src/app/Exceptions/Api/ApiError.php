<?php

namespace App\Exceptions\Api;

use App\Contracts\Exceptions\ApiError as ApiErrorContract;
use App\Enums\ApiCode;
use Exception;
use Illuminate\Http\Request;

class ApiError extends Exception implements ApiErrorContract
{
    /**
     * @var int HTTP status
     */
    protected $status;

    /**
     * @var ApiCode app-specific code
     */
    protected $apiCode;


    public function report(): void
    {
        //
    }

    public function render(Request $request)
    {
        return response()->json([
            'status' => $this->status,
            'code' => $this->apiCode,
            'message' => $this->message,
        ], $this->status);
    }
}
