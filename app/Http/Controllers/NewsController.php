<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class NewsController extends Controller
{
    public function index()
    {
        $apiKey = config('app.news_api_key');
        $response = Http::get('https://newsapi.org/v2/top-headlines', [
            'apiKey' => $apiKey,
            'category' => 'technology',
            'country' => 'us'
        ]);

        return response()->json($response->json()['articles']);
    }
}
