<?php

use App\Http\Controllers\BukuController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\PenulisController;
use App\Http\Controllers\Auth\AdminSessionController;
use App\Http\Controllers\Auth\RegisteredAdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\Admin;
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

Route::prefix('admin')->group(function () {
    Route::get('/', [AdminController::class, 'index'])->middleware(Admin::class)->name('admin');

    Route::get('/register', [RegisteredAdminController::class, 'create'])->name('admin.register');

    Route::post('/register', [RegisteredAdminController::class, 'store']);

    Route::get('/login', [AdminSessionController::class, 'create'])->name('admin.login');

    Route::post('/login', [AdminSessionController::class, 'store']);

    Route::post('/logout', [AdminSessionController::class, 'destroy'])
                ->name('admin.logout');
});

Route::prefix('penulis')->group(function () {
    Route::get('/', [PenulisController::class, 'index'])->middleware(Pengguna::class)->name('penulis');

    Route::get('/register', [RegisteredAdminController::class, 'create'])->name('admin.register');

    Route::post('/register', [RegisteredAdminController::class, 'store']);

    Route::get('/login', [AdminSessionController::class, 'create'])->name('admin.login');

    Route::post('/login', [AdminSessionController::class, 'store']);

    Route::post('/logout', [AdminSessionController::class, 'destroy'])
                ->name('admin.logout');
});

Route::resource('bukus', BukuController::class)->middleware(Admin::class);

Route::post('/bukus/images/{buku}', [BukuController::class, 'upload'])->middleware(Admin::class);


require __DIR__.'/auth.php';
