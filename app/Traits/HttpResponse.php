<?php

namespace App\Traits;

trait HttpResponse
{
    protected function success($data, $message = null, $code = 200)
    {
        return response()->json([
            'status' => 'Request was successful',
            'message' => $message,
            'data' => $data
        ], $code);
    }

    protected function error($data, $message = null, $code = 404)
    {
        return response()->json([
            'status' => 'Request was unsuccessful',
            'message' => $message,
            'data' => $data
        ], $code);
    }
}