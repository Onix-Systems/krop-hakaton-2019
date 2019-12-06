<?php
namespace App\Contracts\Exceptions;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

interface ApiError
{
    /**
     * Report the exception.
     *
     * @return void
     */
    public function report() : void;

    /**
     * Render the exception into an HTTP response.
     *
     * @param Request $request
     * @return Response $response
     */
    public function render(Request $request);

}
