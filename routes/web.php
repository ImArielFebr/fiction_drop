<?php

use App\Http\Controllers\BukuController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/admin', function () {
    return Inertia::render('Admin/AdminIndex');
});

Route::resource('bukus', BukuController::class);

Route::post('/bukus/images/{buku}', [BukuController::class, 'upload']);
