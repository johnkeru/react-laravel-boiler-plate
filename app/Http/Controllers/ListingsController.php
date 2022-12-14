<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class ListingsController extends Controller
{
    function index()
    {
        $url = 'https://sandbox.repliers.io/listings?listings=true&operator=AND&sortBy=updatedOnDesc&status=A';
        $params = Request()->all();
        if (count($params) != 0) {
            $query = http_build_query($params);
            $url .= '&' . $query;
        }


        $client = new Client();
        $response = $client->request(
            'GET',
            $url,
            [
                'headers' => [
                    'REPLIERS-API-KEY' => 'wQSz62vd4MJHgIagUzVolH0TACmmaG',
                    'content-type' => 'application/json',
                ],
            ]
        );

        $data = json_decode($response->getBody());
        $listings = $data->listings;
        return Response()->json(['listings' => $listings, 'data' => $data, 'url' => $url]);
    }
}
