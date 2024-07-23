<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Buku extends Model
{
    use HasFactory;
    protected $fillable = [
        'judul',
        'harga',
        'isbn',
        'genre',
        'penulis',
        'tanggal_terbit',
        'jumlah_halaman',
        'penerbit',
        'bahasa',
        'thumbnail',
        'panjang',
        'lebar',
        'berat',
        'sampul',
        'deskripsi',
        'stock',
    ];
}
