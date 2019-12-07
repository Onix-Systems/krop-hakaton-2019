<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnForUniqueHash extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('file_table_with_content', function (Blueprint $table) {
            $table->string('id_u')->nullable(false)->unique();
        });

        Schema::rename('file_table_with_content', 'equipments');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::rename('equipments', 'file_table_with_content');
        Schema::table('file_table_with_content', function (Blueprint $table) {
            $table->dropColumn('id_u');
        });
    }
}
