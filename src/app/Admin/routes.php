<?php


use Illuminate\Routing\Router;

Admin::routes();

Route::group([
    'prefix'        => config('admin.route.prefix'),
    'namespace'     => config('admin.route.namespace'),
    'middleware'    => config('admin.route.middleware'),
], function (Router $router) {

    $router->get('/', 'HomeController@index')->name('admin.home');
    $router->resource('data', ImportController::class);
    $router->resource('upload', UploadController::class);
    $router->post('import', 'ImportXslxController@index')->name('importxslx.import');

});
