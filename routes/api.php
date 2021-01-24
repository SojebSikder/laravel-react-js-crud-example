<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/category', [App\Http\Controllers\Api\CategoryController::class, 'index']);
Route::post('/category/store', [App\Http\Controllers\Api\CategoryController::class, 'store']);
Route::delete('/category/delete/{id}', [App\Http\Controllers\Api\CategoryController::class, 'destroy']);
Route::get('/category/edit/{id}', [App\Http\Controllers\Api\CategoryController::class, 'edit']);
Route::put('/category/update/{id}', [App\Http\Controllers\Api\CategoryController::class, 'update']);
