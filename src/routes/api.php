<?php

use Illuminate\Http\Request;

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

Route::get('/get-equipment', 'Api\EquipmentController');
Route::get('/hospital/{id_u}', 'Api\HospitalController');
Route::get('/get-equipment/category', 'Api\EquipmentCategoryController');// response to list key
Route::get('/get-equipment/category-by-type', 'Api\EquipmentCategoryByTypeController');
Route::get('/search', 'Api\SearchController');
Route::get('/filters', 'Api\FiltersController');// response to list key
