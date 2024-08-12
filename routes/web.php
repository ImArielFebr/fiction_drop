<?php

use App\Http\Controllers\BukuController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\LoginAdminController;
use App\Http\Controllers\Auth\RegisterAdminController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/registeradmin', [RegisterAdminController::class, 'index']);
Route::post('/registeradmin', [RegisterAdminController::class, 'store']);
Route::get('/loginadmin', [LoginAdminController::class, 'index']);
Route::post('/loginadmin', [LoginAdminController::class, 'store']);
Route::post('/loginadmin', [LoginAdminController::class, 'destroy'])->middleware('auth');
Route::resource('admin', AdminController::class);
Route::resource('bukus', BukuController::class);

Route::post('/bukus/images/{buku}', [BukuController::class, 'upload']);


require __DIR__.'/auth.php';
