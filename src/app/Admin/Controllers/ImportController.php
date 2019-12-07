<?php

namespace App\Admin\Controllers;

use App\Models\Equipments;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Facades\Admin;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;

class ImportController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'List data';

    public function index(Content $content)
    {
        return Admin::content(function ($content) {

            $content->header($this->title);

            $content->description($this->title);

            $content->breadcrumb(
                ['text' => $this->title]
            );

            // Add another contents into body
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
        $grid = new Grid(new Equipments());
        $grid->tools(function ($tools) {
            $tools->append('
            <div class="btn-group pull-right grid-create-btn" style="margin-right: 10px">
                <a href="/admin/upload" class="btn btn-sm btn-success" title="Upload">
                    <i class="fa fa-upload"></i><span class="hidden-xs">&nbsp;&nbsp;Upload</span>
                </a>
            </div>
            ');
        });

        $grid->column('id', __('Id'));
        $grid->column('custodian_name', __('Custodian name'));
        $grid->column('custodian_identifier', __('Custodian identifier'));
        $grid->column('address_country_name', __('Address country name'));
        $grid->column('address_region', __('Address region'));
        $grid->column('address_locality', __('Address locality'));
        $grid->column('address_street_address', __('Address street address'));
        $grid->column('latitude', __('Latitude'));
        $grid->column('longitude', __('Longitude'));
        $grid->column('equipment_title', __('Equipment title'));
        $grid->column('equipment_model', __('Equipment model'));
        $grid->column('sn_equipment', __('Sn equipment'));
        $grid->column('equipment_identifier', __('Equipment identifier'));
        $grid->column('producer_country', __('Producer country'));
        $grid->column('producer_name', __('Producer name'));
        $grid->column('producer_identifier', __('Producer identifier'));
        $grid->column('equipment_year', __('Equipment year'));
        $grid->column('equipment_life', __('Equipment life'));
        $grid->column('registration_date', __('Registration date'));
        $grid->column('equip_condition', __('Equip condition'));
        $grid->column('repair_date', __('Repair date'));
        $grid->column('repair_type', __('Repair type'));
        $grid->column('structure_name', __('Structure name'));
        $grid->column('floor_number', __('Floor number'));
        $grid->column('room_number', __('Room number'));
        $grid->column('inspection_type', __('Inspection type'));
        $grid->column('diagnostic_subgroup', __('Diagnostic subgroup'));
        $grid->column('diagnostic_type', __('Diagnostic type'));
        $grid->column('diagnostic_quantity', __('Diagnostic quantity'));
        $grid->column('work_shedule', __('Work shedule'));
        $grid->column('availability_restriction', __('Availability restriction'));
        $grid->column('created_at', __('Created at'));
        $grid->column('updated_at', __('Updated at'));

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Equipments::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('custodian_name', __('Custodian name'));
        $show->field('custodian_identifier', __('Custodian identifier'));
        $show->field('address_country_name', __('Address country name'));
        $show->field('address_region', __('Address region'));
        $show->field('address_locality', __('Address locality'));
        $show->field('address_street_address', __('Address street address'));
        $show->field('latitude', __('Latitude'));
        $show->field('longitude', __('Longitude'));
        $show->field('equipment_title', __('Equipment title'));
        $show->field('equipment_model', __('Equipment model'));
        $show->field('sn_equipment', __('Sn equipment'));
        $show->field('equipment_identifier', __('Equipment identifier'));
        $show->field('producer_country', __('Producer country'));
        $show->field('producer_name', __('Producer name'));
        $show->field('producer_identifier', __('Producer identifier'));
        $show->field('equipment_year', __('Equipment year'));
        $show->field('equipment_life', __('Equipment life'));
        $show->field('registration_date', __('Registration date'));
        $show->field('equip_condition', __('Equip condition'));
        $show->field('repair_date', __('Repair date'));
        $show->field('repair_type', __('Repair type'));
        $show->field('structure_name', __('Structure name'));
        $show->field('floor_number', __('Floor number'));
        $show->field('room_number', __('Room number'));
        $show->field('inspection_type', __('Inspection type'));
        $show->field('diagnostic_subgroup', __('Diagnostic subgroup'));
        $show->field('diagnostic_type', __('Diagnostic type'));
        $show->field('diagnostic_quantity', __('Diagnostic quantity'));
        $show->field('work_shedule', __('Work shedule'));
        $show->field('availability_restriction', __('Availability restriction'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Equipments());

        $form->text('custodian_name', __('Custodian name'));
        $form->text('custodian_identifier', __('Custodian identifier'));
        $form->text('address_country_name', __('Address country name'));
        $form->text('address_region', __('Address region'));
        $form->text('address_locality', __('Address locality'));
        $form->text('address_street_address', __('Address street address'));
        $form->text('latitude', __('Latitude'));
        $form->text('longitude', __('Longitude'));
        $form->text('equipment_title', __('Equipment title'));
        $form->text('equipment_model', __('Equipment model'));
        $form->text('sn_equipment', __('Sn equipment'));
        $form->text('equipment_identifier', __('Equipment identifier'));
        $form->text('producer_country', __('Producer country'));
        $form->text('producer_name', __('Producer name'));
        $form->text('producer_identifier', __('Producer identifier'));
        $form->text('equipment_year', __('Equipment year'));
        $form->number('equipment_life', __('Equipment life'));
        $form->text('registration_date', __('Registration date'));
        $form->text('equip_condition', __('Equip condition'));
        $form->text('repair_date', __('Repair date'));
        $form->text('repair_type', __('Repair type'));
        $form->text('structure_name', __('Structure name'));
        $form->number('floor_number', __('Floor number'));
        $form->number('room_number', __('Room number'));
        $form->text('inspection_type', __('Inspection type'));
        $form->text('diagnostic_subgroup', __('Diagnostic subgroup'));
        $form->text('diagnostic_type', __('Diagnostic type'));
        $form->number('diagnostic_quantity', __('Diagnostic quantity'));
        $form->text('work_shedule', __('Work shedule'));
        $form->text('availability_restriction', __('Availability restriction'));

        return $form;
    }
}
