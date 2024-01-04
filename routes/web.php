<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AppController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SettingController;
use App\Models\Setting;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('guest')->group(
    function () {
        Route::get('/', [AppController::class, 'index'])->name('home');
        Route::get('/about', [AppController::class, 'about'])->name('about');
        Route::get('blog/{id}', [AppController::class, 'detail'])->name('blog.detail');
        Route::get('blogs', [AppController::class, 'blogs'])->name('blog');
        Route::post('contact', [AppController::class, 'contact'])->name('contact');
    }
);


Route::get('/dashboard', [AppController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/news', [AppController::class, 'news'])->middleware(['auth', 'verified'])->name('news');

Route::middleware('auth')->group(function () {
    Route::post('post', [PostController::class, 'store'])->name('post.add');
    Route::patch('post/{id}', [PostController::class, 'update'])->name('post.update');
    Route::delete('post/{id}', [PostController::class, 'destroy'])->name('post.delete');
    Route::delete('category/{id}', [CategoryController::class, 'destroy'])->name('category.delete');
    Route::post('category', [CategoryController::class, 'store'])->name('category.add');
    Route::patch('about', [AboutController::class, 'update'])->name('about.update');
    Route::post('setting', [SettingController::class, 'update'])->name('setting.update');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::get('/settings', [AppController::class, 'settings'])->name('profile.settings');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
