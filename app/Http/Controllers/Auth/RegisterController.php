<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Model\User;

class RegisterController extends Controller
{
    public function index()
    {
        return inertia('Admin/Register');
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name'      => 'required',
            'email'     => 'required|unique:users',
            'password'  => 'required|confirmed'
        ]);

        User::create([
            'name'      => $request->name,
            'email'     => $request->email,
            'password'  => bcrypt($request->password)
        ]);

        return redirect('/login')->with('status', 'Register Berhasil!');
    }
}
