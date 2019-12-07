<?php

namespace App\Admin\Controllers;

use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Facades\Admin;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;

class UploadController extends AdminController
{
    /**
     * @return Content
     */
    public function index(Content $content)
    {
        return Admin::content(function ($content) {

            $content->header($this->title);

            $content->description($this->title);

            $content->breadcrumb(
                ['text' => $this->title]
            );
            $content->body($this->grid());
        });
    }

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $form = new Form(new FileImport());

        $form->setAction('import');

        $form->file('file');

        return $form;
    }
}
