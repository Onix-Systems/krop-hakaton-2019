<?php


use Illuminate\Routing\Router;

Admin::routes();

Route::group([
    'prefix'        => config('admin.route.prefix'),
    'namespace'     => config('admin.route.namespace'),
    'middleware'    => config('admin.route.middleware'),
], function (Router $router) {

    $router->resource('/', ImportController::class);
    $router->resource('data', ImportController::class);// Todo use after view statistic in home page
    $router->resource('upload', UploadController::class);
    $router->post('import', 'ImportXslxController@index')->name('importxslx.import');

});
