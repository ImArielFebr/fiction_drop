import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useForm } from '@inertiajs/react'
import { useState } from 'react';
import { NumericFormat } from 'react-number-format';

export default function BukuTambah() {
    const [file, setFile] = useState();
    const { data, setData, post, errors, processing, progress } = useForm({
        judul: "",
        penulis: "",
        harga: "",
        isbn: "",
        genre: "",
        tanggal_terbit: new Date(),
        jumlah_halaman: "",
        penerbit: "",
        bahasa: "",
        sampul: "",
        panjang: "",
        lebar: "",
        berat: "",
        deskripsi: "",
        stock: "",
        thumbnail: "no thumbnail",
    });
    console.log(useForm());
    function submit(e) {
        e.preventDefault();
        post('/bukus');
    }

    function getFile(event) {
        setFile(URL.createObjectURL(event))
    }

    return (
        <>
            <div className='rounded-md  px-8 py-8 bg-gray-200'>
                <form onSubmit={submit}>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-10 text-gray-900">Tambah Buku</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                Silahkan lengkapi rincian dan deskripsi buku.
                            </p>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                {/* <div className="sm:col-span-4">
                                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                        Username
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
                                            <input
                                                id="username"
                                                name="username"
                                                type="text"
                                                placeholder="janesmith"
                                                autoComplete="username"
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                        About
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows={3}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                                        Photo
                                    </label>
                                    <div className="mt-2 flex items-center gap-x-3">
                                        <UserCircleIcon aria-hidden="true" className="h-12 w-12 text-gray-300" />
                                        <button
                                            type="button"
                                            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        >
                                            Change
                                        </button>
                                    </div>
                                </div> */}

                                <div className="col-span-2">
                                    <label htmlFor="sampul" className="block text-sm font-medium leading-6 text-gray-900">
                                        Sampul Buku
                                    </label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <div className="text-center">
                                            <PhotoIcon aria-hidden="true" className=" text-gray-300" />
                                            {data.sampul.name}
                                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                <label
                                                    htmlFor="sampul"
                                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                >
                                                    <span>Upload gambar</span>
                                                    <input
                                                        id="sampul"
                                                        name="sampul"
                                                        type="file"
                                                        onChange={(e) => { setData('sampul', e.target.files[0]); getFile(e.target.files[0]) }}
                                                        className="sr-only" />
                                                    {progress && (
                                                        <progress value={progress.percentage} max="100">
                                                            {progress.percentage}%
                                                        </progress>
                                                    )}
                                                </label>
                                                <p className="pl-1">atau seret ke sini</p>
                                            </div>
                                            <p className="text-xs leading-5 text-gray-600">PNG, JPG sampai 10MB</p>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="sampul" className="block text-sm font-medium leading-6 text-gray-900">
                                        Pratinjau
                                    </label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <img className='mx-auto h-auto w-auto' src={file} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-12">
                            {/* <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p> */}

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="judul" className="block text-sm font-medium leading-6 text-gray-900">
                                        Judul Buku : {data.judul}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="judul"
                                            name="judul"
                                            type="text"
                                            autoComplete="judul"
                                            value={data.judul}
                                            onChange={(e) => setData('judul', e.target.value)}
                                            className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {errors.judul && <p className='text-xs text-red-700'>{errors.judul}</p>}
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="penulis" className="block text-sm font-medium leading-6 text-gray-900">
                                        Penulis : {data.penulis}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="penulis"
                                            name="penulis"
                                            type="text"
                                            autoComplete="penulis"
                                            value={data.penulis}
                                            onChange={(e) => setData('penulis', e.target.value)}
                                            className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {errors.penulis && <p className='text-xs text-red-700'>{errors.penulis}</p>}
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="harga" className="block text-sm font-medium leading-6 text-gray-900">
                                        Harga Buku : <NumericFormat value={data.harga} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="harga"
                                            name="harga"
                                            type="text"
                                            autoComplete="harga"
                                            value={data.harga}
                                            onChange={(e) => setData('harga', e.target.value)}
                                            className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {errors.harga && <p className='text-xs text-red-700'>{errors.harga}</p>}
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="isbn" className="block text-sm font-medium leading-6 text-gray-900">
                                        Nomor ISBN : {data.isbn}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="isbn"
                                            name="isbn"
                                            type="text"
                                            autoComplete="isbn"
                                            value={data.isbn}
                                            onChange={(e) => setData('isbn', e.target.value)}
                                            className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {errors.isbn && <p className='text-xs text-red-700'>{errors.isbn}</p>}
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="penerbit" className="block text-sm font-medium leading-6 text-gray-900">
                                        Penerbit : {data.penerbit}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="penerbit"
                                            name="penerbit"
                                            type="text"
                                            autoComplete="penerbit"
                                            value={data.penerbit}
                                            onChange={(e) => setData('penerbit', e.target.value)}
                                            className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {errors.isbn && <p className='text-xs text-red-700'>{errors.isbn}</p>}
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="jumlah_halaman" className="block text-sm font-medium leading-6 text-gray-900">
                                        Jumlah Halaman : {data.jumlah_halaman} Halaman
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="jumlah_halaman"
                                            name="jumlah_halaman"
                                            type="text"
                                            autoComplete="jumlah_halaman"
                                            value={data.jumlah_halaman}
                                            onChange={(e) => setData('jumlah_halaman', e.target.value)}
                                            className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="genre" className="block text-sm font-medium leading-6 text-gray-900">
                                        Genre Utama : {data.genre}
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="genre"
                                            name="genre"
                                            autoComplete="genre"
                                            value={data.genre}
                                            onChange={(e) => setData('genre', e.target.value)}
                                            className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            <option value="Horror">Horror</option>
                                            <option value="Fiksi Ilmiah">Fiksi Ilmiah</option>
                                            <option value="Asmara">Asmara</option>
                                        </select>
                                        {errors.genre && <p className='text-xs text-red-700'>{errors.genre}</p>}
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="bahasa" className="block text-sm font-medium leading-6 text-gray-900">
                                        Bahasa : {data.bahasa}
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="bahasa"
                                            name="bahasa"
                                            autoComplete="bahasa"
                                            value={data.bahasa}
                                            onChange={(e) => setData('bahasa', e.target.value)}
                                            className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                                            <option value="English">English</option>
                                            <option value="Espanol">Espanol</option>
                                            <option value="Nihonggo">Nihonggo</option>
                                        </select>
                                        {errors.genre && <p className='text-xs text-red-700'>{errors.genre}</p>}
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="tanggal_terbit" className="block text-sm font-medium leading-6 text-gray-900">
                                        Tanggal Terbit : {new Date(data.tanggal_terbit).toLocaleDateString()}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="tanggal_terbit"
                                            name="tanggal_terbit"
                                            type="date"
                                            autoComplete="tanggal_terbit"
                                            value={data.tanggal_terbit}
                                            onChange={(e) => setData('tanggal_terbit', e.target.value)}
                                            className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {errors.tanggal_terbit && <p className='text-xs text-red-700'>{errors.tanggal_terbit}</p>}
                                    </div>
                                </div>

                                <div className="sm:col-auto sm:col-start-1">
                                    <label htmlFor="panjang" className="block text-sm font-medium leading-6 text-gray-900">
                                        Panjang Buku : {data.panjang} cm
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="panjang"
                                            name="panjang"
                                            type="text"
                                            autoComplete="panjang"
                                            value={data.panjang}
                                            onChange={(e) => setData('panjang', e.target.value)}
                                            className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-auto">
                                    <label htmlFor="lebar" className="block text-sm font-medium leading-6 text-gray-900">
                                        Lebar Buku : {data.lebar} cm
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="lebar"
                                            name="lebar"
                                            type="text"
                                            autoComplete="lebar"
                                            value={data.lebar}
                                            onChange={(e) => setData('lebar', e.target.value)}
                                            className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-auto">
                                    <label htmlFor="berat" className="block text-sm font-medium leading-6 text-gray-900">
                                        Berat Buku : {data.berat} gram
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="berat"
                                            name="berat"
                                            type="text"
                                            autoComplete="berat"
                                            value={data.berat}
                                            onChange={(e) => setData('berat', e.target.value)}
                                            className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-auto">
                                    <label htmlFor="stock" className="block text-sm font-medium leading-6 text-gray-900">
                                        Stok : {data.stock} eksemplar
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="stock"
                                            name="stock"
                                            type="text"
                                            autoComplete="stock"
                                            placeholder='10'
                                            value={data.stock}
                                            onChange={(e) => setData('stock', e.target.value)}
                                            className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {errors.stock && <p className='text-xs text-red-700'>{errors.stock}</p>}
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="deskripsi" className="block text-sm font-medium leading-6 text-gray-900">
                                        Sinopsis / Deskripsi
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="deskripsi"
                                            name="deskripsi"
                                            rows={5}
                                            value={data.deskripsi}
                                            onChange={(e) => setData('deskripsi', e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">Tuliskan beberapa kalimat sinopsis.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                            type="button"
                            className="text-sm font-semibold leading-6 text-gray-900"
                            disabled={processing}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            disabled={processing}
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
