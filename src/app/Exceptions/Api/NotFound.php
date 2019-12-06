<?php

namespace App\Exceptions\Api;

use App\Enums\ApiCode;
use Illuminate\Http\Response;

/**
 *
 * Class NotFound
 *
 * @package App\Exceptions\Api
 */
class NotFound extends ApiError
{
    protected $status = Response::HTTP_NOT_FOUND;
    protected $apiCode = ApiCode::NotFound;
    protected $message = 'Not found';
}
