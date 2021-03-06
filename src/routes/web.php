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

Route::get('/', 'ReactAppController@index');
Route::get('/search', 'ReactAppController@index');
Route::get('/about-us', AboutController::class);
Route::get('/terms-of-use-and-privacy-policy', PrivacyPolicyController::class);
