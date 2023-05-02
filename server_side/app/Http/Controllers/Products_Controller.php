<?php

namespace App\Http\Controllers;

use App\Models\product;
use Illuminate\Http\Request;

class Products_Controller extends Controller
{


    public function index()
    {

        $products = product::all();


        return response()->jsont([
            'products' => $products
        ]);
    }
}
