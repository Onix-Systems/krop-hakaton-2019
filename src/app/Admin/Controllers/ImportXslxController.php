<?php

namespace App\Admin\Controllers;

use App\Admin\Models\Imports\ImportExcel;
use App\Http\Controllers\Controller;
use App\Models\Equipments;
use http\Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;


class ImportXslxController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     * @throws Exception
     */
    public function index(Request $request)
    {
        try {
            DB::beginTransaction();

            Equipments::query()
                ->where('id', '>=', 0)
                ->delete();
            Excel::import(new ImportExcel(), request()->file('file'));

            DB::commit();

            admin_toastr('update success');
            return redirect('admin/data');
        } catch (Exception $exception) {
            DB::rollBack();
            throw $exception;
        }
    }
}
