import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { NumericFormat } from "react-number-format";
import { Input } from "@material-tailwind/react";

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
        post("/bukus");
    }

    function getFile(event) {
        setFile(URL.createObjectURL(event));
    }

    return (
        <>
            <div className="container mx-auto rounded-md bg-transparent px-8 py-2">
                <form onSubmit={submit}>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 py-2">
                            <h2 className="text-xl font-semibold leading-10 text-gray-900">
                                Tambah Buku
                            </h2>
                            <p className="text-md mt-1 leading-6 text-gray-600">
                                Silahkan lengkapi rincian dan deskripsi buku.
                            </p>
                            <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                                <div className="col-span-2">
                                    <label
                                        htmlFor="sampul"
                                        className="text-md block font-medium leading-6 text-gray-900"
                                    >
                                        Sampul Buku
                                    </label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-6">
                                        <div className="text-center">
                                            <div className="h-60">
                                                <img
                                                    className="max-h-full"
                                                    src={file}
                                                />
                                            </div>
                                            {data.sampul.name}
                                            <div className="my-4 block text-sm text-gray-600">
                                                <label
                                                    htmlFor="sampul"
                                                    className="relative cursor-pointer rounded-md bg-white p-2 font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                >
                                                    <span>Upload gambar</span>
                                                    <input
                                                        id="sampul"
                                                        name="sampul"
                                                        type="file"
                                                        onChange={(e) => {
                                                            setData(
                                                                "sampul",
                                                                e.target
                                                                    .files[0],
                                                            );
                                                            getFile(
                                                                e.target
                                                                    .files[0],
                                                            );
                                                        }}
                                                        className="sr-only"
                                                    />
                                                    {progress && (
                                                        <progress
                                                            value={
                                                                progress.percentage
                                                            }
                                                            max="100"
                                                        >
                                                            {
                                                                progress.percentage
                                                            }
                                                            %
                                                        </progress>
                                                    )}
                                                </label>
                                            </div>
                                            <p className="text-xs leading-5 text-gray-600">
                                                PNG, JPG sampai 10MB
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-4 grid grid-cols-3 gap-x-4 gap-y-2">
                                    <div>
                                        <Input
                                            color="brown"
                                            label="Judul Buku"
                                            autoComplete="judul"
                                            value={data.judul}
                                            onChange={(e) =>
                                                setData("judul", e.target.value)
                                            }
                                        />
                                        {errors.judul && (
                                            <p className="text-xs text-red-700">
                                                {errors.judul}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <Input
                                            color="brown"
                                            label="Penulis"
                                            autoComplete="penulis"
                                            value={data.penulis}
                                            onChange={(e) =>
                                                setData(
                                                    "penulis",
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.penulis && (
                                            <p className="text-xs text-red-700">
                                                {errors.penulis}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <Input
                                            color="brown"
                                            label="Harga Buku"
                                            autoComplete="harga"
                                            value={data.harga}
                                            onChange={(e) =>
                                                setData("harga", e.target.value)
                                            }
                                        />
                                        {errors.harga && (
                                            <p className="text-xs text-red-700">
                                                {errors.harga}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <Input
                                            color="brown"
                                            label="Nomor ISBN"
                                            autoComplete="isbn"
                                            value={data.isbn}
                                            onChange={(e) =>
                                                setData("isbn", e.target.value)
                                            }
                                        />
                                        {errors.isbn && (
                                            <p className="text-xs text-red-700">
                                                {errors.isbn}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <Input
                                            color="brown"
                                            label="Nama Penerbit"
                                            autoComplete="penerbit"
                                            value={data.penerbit}
                                            onChange={(e) =>
                                                setData(
                                                    "penerbit",
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.isbn && (
                                            <p className="text-xs text-red-700">
                                                {errors.isbn}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <Input
                                            color="brown"
                                            label="Jumlah Halaman"
                                            autoComplete="jumlah_halaman"
                                            value={data.jumlah_halaman}
                                            onChange={(e) =>
                                                setData(
                                                    "jumlah_halaman",
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="genre"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Genre Utama : {data.genre}
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="genre"
                                                name="genre"
                                                autoComplete="genre"
                                                value={data.genre}
                                                onChange={(e) =>
                                                    setData(
                                                        "genre",
                                                        e.target.value,
                                                    )
                                                }
                                                className="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            >
                                                <option value="Horror">
                                                    Horror
                                                </option>
                                                <option value="Fiksi Ilmiah">
                                                    Fiksi Ilmiah
                                                </option>
                                                <option value="Asmara">
                                                    Asmara
                                                </option>
                                            </select>
                                            {errors.genre && (
                                                <p className="text-xs text-red-700">
                                                    {errors.genre}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="bahasa"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Bahasa : {data.bahasa}
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="bahasa"
                                                name="bahasa"
                                                autoComplete="bahasa"
                                                value={data.bahasa}
                                                onChange={(e) =>
                                                    setData(
                                                        "bahasa",
                                                        e.target.value,
                                                    )
                                                }
                                                className="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            >
                                                <option value="Bahasa Indonesia">
                                                    Bahasa Indonesia
                                                </option>
                                                <option value="English">
                                                    English
                                                </option>
                                                <option value="Espanol">
                                                    Espanol
                                                </option>
                                                <option value="Nihonggo">
                                                    Nihonggo
                                                </option>
                                            </select>
                                            {errors.genre && (
                                                <p className="text-xs text-red-700">
                                                    {errors.genre}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="tanggal_terbit"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Tanggal Terbit :{" "}
                                            {new Date(
                                                data.tanggal_terbit,
                                            ).toLocaleDateString()}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="tanggal_terbit"
                                                name="tanggal_terbit"
                                                type="date"
                                                autoComplete="tanggal_terbit"
                                                value={data.tanggal_terbit}
                                                onChange={(e) =>
                                                    setData(
                                                        "tanggal_terbit",
                                                        e.target.value,
                                                    )
                                                }
                                                className="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            {errors.tanggal_terbit && (
                                                <p className="text-xs text-red-700">
                                                    {errors.tanggal_terbit}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <Input
                                            color="brown"
                                            label="Panjang Buku"
                                            autoComplete="panjang"
                                            value={data.panjang}
                                            onChange={(e) =>
                                                setData(
                                                    "panjang",
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            color="brown"
                                            label="Lebar Buku"
                                            autoComplete="lebar"
                                            value={data.lebar}
                                            onChange={(e) =>
                                                setData("lebar", e.target.value)
                                            }
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            color="brown"
                                            label="Berat Buku"
                                            autoComplete="berat"
                                            value={data.berat}
                                            onChange={(e) =>
                                                setData("berat", e.target.value)
                                            }
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            color="brown"
                                            label="Jumlah Stok"
                                            autoComplete="stock"
                                            placeholder="10"
                                            value={data.stock}
                                            onChange={(e) =>
                                                setData("stock", e.target.value)
                                            }
                                        />
                                        {errors.stock && (
                                            <p className="text-xs text-red-700">
                                                {errors.stock}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label
                                    htmlFor="deskripsi"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Sinopsis / Deskripsi
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="deskripsi"
                                        name="deskripsi"
                                        rows={5}
                                        value={data.deskripsi}
                                        onChange={(e) =>
                                            setData("deskripsi", e.target.value)
                                        }
                                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-600">
                                    Tuliskan beberapa kalimat sinopsis.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8 mt-6 flex items-center justify-end gap-x-6">
                        <button
                            href="/bukus"
                            type="button"
                            className="text-md font-semibold leading-6 text-gray-900"
                            disabled={processing}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="text-md rounded-md bg-indigo-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            disabled={processing}
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
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
        </>
    );
}
