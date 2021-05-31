<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrganizationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organizations', function (Blueprint $table) {
            $table->id();
            $table->string('type', 50);
            $table->string('name', 100);
            $table->text('mission');
            $table->text('description');
            $table->string('yearFouned', 4);
            $table->string('yearsFundraising', 3);
            $table->string('projectsFunded');
            $table->string('facebookPage');
            $table->string('website');
            $table->string('phone', 50);
            $table->string('image');
            $table->string('governorate');
            $table->string('street');
            $table->string('country');
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
        Schema::dropIfExists('organizations');
    }
}
