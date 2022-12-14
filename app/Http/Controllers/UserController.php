<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    function store(RegisterRequest $request)
    {
        $data = $request->validated();
        $data['password'] = Hash::make($data['password']);
        $user = User::create($data);
        if ($user) {
            session()->put('uid', $user['id']);
            session()->put('username', $user['username']);
            return redirect(route('listings.index'));
        } else {
            return back()->with('fail', 'Something went wrong. Please try again.');
        }
    }

    public function authLogin(LoginRequest $request)
    {
        $user = User::where('username', '=', $request->username)->first();
        if ($user) {
            if (Hash::check($request->password, $user['password'])) {
                session()->put('uid', $user['id']);
                session()->put('username', $user['username']);
                return redirect(route('listings.index'));
            } else {
                return back()->with('fail', 'Password is incorrect.');
            }
        } else {
            return back()->with('fail', 'Username not found.');
        }
    }

    public function authLogout()
    {
        if (session()->has('uid')) {
            session()->pull('uid');
            session()->pull('username');
            return redirect(route('index'));
        }
    }
}
