<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PenulisController extends Controller
{
    public function index()
    {
        return inertia('Penulis/PenulisIndex');
    }
}
