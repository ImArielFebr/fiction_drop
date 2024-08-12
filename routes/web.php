<?php

use App\Http\Controllers\BukuController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\LoginAdminController;
use App\Http\Controllers\Auth\RegisterAdminController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/registeradmin', [RegisterAdminController::class, 'index']);
Route::post('/registeradmin', [RegisterAdminController::class, 'store']);
Route::get('/loginadmin', [LoginAdminController::class, 'index']);
Route::post('/loginadmin', [LoginAdminController::class, 'store']);
Route::post('/loginadmin', [LoginAdminController::class, 'destroy'])->middleware('auth');
Route::resource('admin', AdminController::class);
Route::resource('bukus', BukuController::class);

Route::post('/bukus/images/{buku}', [BukuController::class, 'upload']);
