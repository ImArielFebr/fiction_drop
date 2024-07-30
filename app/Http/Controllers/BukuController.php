<?php

namespace App\Http\Controllers;

use App\Models\Buku;
use Illuminate\Http\Request;

class BukuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bukus = Buku::latest()->paginate(3);
        return inertia('Buku/BukuIndex', ['bukus' => $bukus]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Buku/BukuTambah');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        dd($request);
        $request->validate([
            'judul' => ['required'],
            'penulis'=> ['required'],
            'harga'=> ['required'],
            'isbn'=> ['required'],
            'genre'=> ['required'],
            'tanggal_terbit'=> ['required'],
            'penerbit'=> ['required'],
            'stock'=> ['required'],
        ], [
            'judul' => ['Kotak judul wajib diisi'],
            'penulis' => ['Kotak penulis wajib diisi'],
            'harga' => ['Kotak harga wajib diisi'],
            'isbn' => ['Kotak isbn wajib diisi'],
            'genre' => ['Genre wajib dipilih'],
            'tanggal_terbit' => ['Kotak tanggal terbit wajib diisi'],
            'penerbit' => ['Kotak penerbit wajib diisi'],
            'stock' => ['Jumlah stock wajib diisi'],
        ]);

        $image_name = 'sampul' . time() . '.' . $request->sampul->extension();
        $request->file('sampul')->move(public_path('upload'), $image_name);

        $newDate = date("Y-m-d", strtotime($request->tanggal_terbit));

        Buku::create([
            'judul' => $request->judul,
            'harga'=> intval($request->harga),
            'isbn'=> intval($request->isbn),
            'genre'=> $request->genre,
            'penulis'=> $request->penulis,
            'tanggal_terbit'=> $request->tanggal_terbit,
            'jumlah_halaman' => intval($request->jumlah_halaman),
            'penerbit'=> $request->penerbit,
            'bahasa' => $request->bahasa,
            'thumbnail' => $request->thumbnail,
            'panjang' => intval($request->panjang),
            'lebar' => intval($request->lebar),
            'berat' => intval($request->berat),
            'sampul'=> $image_name,
            'deskripsi' => $request->deskripsi,
            'stock'=> intval($request->stock),
        ]);

        return redirect('/bukus');
    }

    /**
     * Display the specified resource.
     */
    public function show(Buku $buku)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Buku $buku)
    {
        return inertia('Buku/BukuDetail', ['buku' => $buku]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Buku $buku)
    {
        // dd($request);

        $buku->update([
            'judul' => $request->judul,
            'harga'=> intval($request->harga),
            'isbn'=> intval($request->isbn),
            'genre'=> $request->genre,
            'penulis'=> $request->penulis,
            'tanggal_terbit'=> $request->tanggal_terbit,
            'jumlah_halaman' => intval($request->jumlah_halaman),
            'penerbit'=> $request->penerbit,
            'bahasa' => $request->bahasa,
            'thumbnail' => $request->thumbnail,
            'panjang' => intval($request->panjang),
            'lebar' => intval($request->lebar),
            'berat' => intval($request->berat),
            'sampul'=> $request->sampul,
            'deskripsi' => $request->deskripsi,
            'stock'=> intval($request->stock),
        ]);

        return redirect('/bukus');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Buku $buku)
    {
        $buku->delete();

        return redirect('/bukus');
    }

    public function upload(Request $request, Buku $buku)
    {
        // dd($request);
        $image_name = 'sampul' . time() . '.' . $request->sampul->extension();
        $request->file('sampul')->move(public_path('upload'), $image_name);

        $buku->update(['sampul'=> $image_name]);
    }
}
