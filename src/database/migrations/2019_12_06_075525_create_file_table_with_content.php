<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFileTableWithContent extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('file_table_with_content', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('custodian_name', 255)->nullable(false);
            $table->string('custodian_identifier', 50)->nullable(false);
            $table->string('address_country_name', 50)->nullable(false);
            $table->string('address_region', 255)->nullable(false);
            $table->string('address_locality', 150)->nullable(false);
            $table->string('address_street_address', 150)->nullable(false);
            $table->string('latitude', 50)->nullable(false);
            $table->string('longitude', 50)->nullable(false);
            $table->string('equipment_title', 255)->nullable(false);
            $table->string('equipment_model', 50)->nullable();
            $table->string('sn_equipment', 50)->nullable();
            $table->string('equipment_identifier', 50)->nullable(false);
            $table->string('producer_country', 100)->nullable();
            $table->string('producer_name', 255)->nullable();
            $table->string('producer_identifier', 100)->nullable();
            $table->string('equipment_year', 4)->nullable();
            $table->integer('equipment_life')->nullable();
            $table->string('registration_date', 4)->nullable();
            $table->string('equip_condition', 100)->nullable(false);
            $table->string('repair_date', 100)->nullable();
            $table->string('repair_type', 100)->nullable();
            $table->string('structure_name', 255)->nullable(false);
            $table->integer('floor_number')->nullable(false);
            $table->integer('room_number')->nullable();
            $table->string('inspection_type', 255)->nullable(false);
            $table->string('diagnostic_subgroup', 255)->nullable(false);
            $table->string('diagnostic_type', 255)->nullable(false);
            $table->integer('diagnostic_quantity')->nullable();
            $table->string('work_shedule', 255)->nullable();
            $table->string('availability_restriction', 255)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('file_table_with_content');
    }
}
