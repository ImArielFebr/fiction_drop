<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class PenulisSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Penulis/Login');
    }

    /**
     * Handle an incoming authentication request.
     */

    public function store(Request $request): RedirectResponse
    {
        // dd($request);
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::guard('penulis')->attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended('penulis');
        }

        return redirect('penulis.login');
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('penulis')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/penulis/login');
    }
}
