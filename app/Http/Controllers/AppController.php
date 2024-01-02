<?php

namespace App\Http\Controllers;

use App\Models\About;
use App\Models\Setting;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AppController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'phpVersion' => PHP_VERSION,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function dashboard()
    {
        return Inertia::render('Dashboard');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function about()
    {
        $data = [
            'about' => About::find(1),
        ];
        return Inertia::render('About', $data);
    }

    /**
     * Display the specified resource.
     */
    public function news()
    {
        $data = [
            'posts' => DB::table('posts')->select('posts.*', 'categories.name as category', 'users.name as author')
                ->join('users', 'users.id', '=', 'posts.users_id')->join('categories', 'categories.id', '=', 'posts.categories_id')->get(),
            'categories' => DB::table('categories')->select('categories.*', 'categories.name as category', 'users.name as author')->join('users', 'users.id', '=', 'categories.users_id')->get()
        ];
        return Inertia::render('News/News', $data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function settings()
    {
        $data = [
            'about' => About::find(1),
            'setting' => Setting::find(1),
        ];
        return Inertia::render('Settings/Settings', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
