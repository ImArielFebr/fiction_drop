<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bukus', function (Blueprint $table) {
            $table->id();
            $table->string('judul');
            $table->integer('harga');
            $table->integer('isbn')->unique();
            $table->string('genre');
            $table->string('penulis');
            $table->date('tanggal_terbit');
            $table->integer('jumlah_halaman');
            $table->string('penerbit');
            $table->string('bahasa');
            $table->string('thumbnail');
            $table->integer('panjang');
            $table->integer('lebar');
            $table->integer('berat');
            $table->string('sampul');
            $table->text('deskripsi');
            $table->integer('stock');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bukus');
    }
};
