<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Model\Admin;

class LoginAdminController extends Controller
{
    public function index()
    {
        return inertia('Admin/Login');
    }

    /**
     * store
     *
     * @param  mixed $request
     * @return void
     */
    public function store(Request $request)
    {
        /**
         * validate request
         */
        $this->validate($request, [
            'email'     => 'required|email',
            'password'  => 'required'
        ]);

        //get email and password from request
        $credentials = $request->only('email', 'password');

        //attempt to login
        if (Auth::attempt($credentials)) {

            //regenerate session
            $request->session()->regenerate();

            //redirect route dashboard
            return redirect('Admin/AdminIndex');
        }

        //if login fails
        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function destroy()
    {
        auth()->logout();

        return redirect('Admin/Login');
    }

}
