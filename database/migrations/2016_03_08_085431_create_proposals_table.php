<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProposalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proposals', function (Blueprint $table) {
            $table->increments('id');
            $table->string('project-details-title')->nullable();
            $table->string('project-details-client-company-name')->nullable();
            $table->text('project-details-client-company-website')->nullable();
            $table->text('project-details-client-company-address')->nullable();
            $table->string('project-details-client-contact-name')->nullable();
            $table->string('project-details-client-contact-email')->nullable();
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
        Schema::drop('proposals');
    }
}
