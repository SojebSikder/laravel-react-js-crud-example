<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/category', [App\Http\Controllers\Api\CategoryController::class, 'index']);
Route::post('/category/store', [App\Http\Controllers\Api\CategoryController::class, 'store']);
Route::delete('/category/delete/{id}', [App\Http\Controllers\Api\CategoryController::class, 'destroy']);
Route::get('/category/edit/{id}', [App\Http\Controllers\Api\CategoryController::class, 'edit']);
