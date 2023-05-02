<?php

use App\Http\Controllers\Products_Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/products' ,[ Products_Controller::class , 'index'])->name('products');