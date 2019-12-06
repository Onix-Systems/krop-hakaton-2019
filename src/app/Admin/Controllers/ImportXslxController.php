<?php

namespace App\Admin\Controllers;

use App\Admin\Imports\FileTableImport;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;


class ImportXslxController extends Controller
{
    public function index(Request $request)
    {
        Excel::import(new FileTableImport(), request()->file('file'));

        admin_toastr('update success');
        return redirect('admin/data');
    }
}
