import { PaperClipIcon } from "@heroicons/react/20/solid";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { router } from "@inertiajs/react";
import { NumericFormat } from "react-number-format";

export default function BukuDetail({ buku }) {
    const [file, setFile] = useState();
    const { data, setData, post, errors, processing, progress } = useForm({
        judul: buku.judul,
        penulis: buku.penulis,
        harga: buku.harga,
        isbn: buku.isbn,
        genre: buku.genre,
        tanggal_terbit: buku.tanggal_terbit,
        jumlah_halaman: buku.jumlah_halaman,
        penerbit: buku.penerbit,
        bahasa: buku.bahasa,
        sampul: buku.sampul,
        panjang: buku.panjang,
        lebar: buku.lebar,
        berat: buku.berat,
        deskripsi: buku.deskripsi,
        stock: buku.stock,
        thumbnail: buku.thumbnail,
    });
    console.log(useForm());

    function submit(e) {
        e.preventDefault();
        router.post(`/bukus/${buku.id}`, {
            _method: "put",
            avatar: form.avatar,
        });
    }

    function getFile(event) {
        setFile(URL.createObjectURL(event));
    }

    return (
        <div className="bg-transparent">
            <form onSubmit={submit}>
                <div>
                    <input
                        type="text"
                        className="mb-4 block w-full rounded-md border-0 bg-transparent text-center text-6xl font-bold text-gray-800"
                        value={data.judul}
                        onChange={(e) => setData("judul", e.target.value)}
                    />
                </div>
                <div className="col-span-2 w-full items-center object-center px-4 sm:px-0">
                    <div className="h-72">
                        <img
                            className="max-h-full"
                            src={
                                file
                                    ? file
                                    : window.location.origin +
                                      `/upload/${data.sampul}`
                            }
                            alt="Sampul Buku"
                        />
                    </div>
                </div>

                <div className="col-span-2 mx-16 my-4 w-full justify-center sm:px-0">
                    <label className="rounded-md border-2 border-black bg-white p-2">
                        <span>Upload</span>
                        <input
                            id="sampul"
                            name="sampul"
                            type="file"
                            onChange={(e) => {
                                setData("sampul", e.target.files[0]);
                                getFile(e.target.files[0]);
                            }}
                            className="sr-only"
                        />
                        {progress && (
                            <progress value={progress.percentage} max="100">
                                {progress.percentage}%
                            </progress>
                        )}
                    </label>
                </div>
                <div className="my-6 border-y border-gray-800">
                    <dl className="divide-y divide-gray-700">
                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                                Nomor ISBN
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <input
                                    type="text"
                                    className="bg-transparent"
                                    value={data.isbn}
                                    onChange={(e) =>
                                        setData("isbn", e.target.value)
                                    }
                                />
                            </dd>
                        </div>
                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                                Harga Buku
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <NumericFormat
                                    value={data.harga}
                                    onChange={(e) =>
                                        setData("harga", e.target.value)
                                    }
                                    displayType={"input"}
                                    thousandSeparator={true}
                                    prefix={"Rp. "}
                                    suffix={" ,-"}
                                    className="bg-transparent"
                                />
                            </dd>
                        </div>
                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                                Nama Penulis
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <input
                                    className="bg-transparent"
                                    value={data.penulis}
                                    onChange={(e) =>
                                        setData("penulis", e.target.value)
                                    }
                                />
                            </dd>
                        </div>
                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                                Nama Penerbit
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <input
                                    className="bg-transparent"
                                    value={data.penerbit}
                                    onChange={(e) =>
                                        setData("penerbit", e.target.value)
                                    }
                                />
                            </dd>
                        </div>
                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                                Genre Buku
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <input
                                    className="bg-transparent"
                                    value={data.genre}
                                    onChange={(e) =>
                                        setData("genre", e.target.value)
                                    }
                                />
                            </dd>
                        </div>
                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                                Tanggal Terbit
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <input
                                    type="date"
                                    className="bg-transparent"
                                    value={data.tanggal_terbit}
                                    onChange={(e) =>
                                        setData(
                                            "tanggal_terbit",
                                            e.target.value,
                                        )
                                    }
                                />
                            </dd>
                        </div>
                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                                Jumlah Halaman
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <input
                                    className="bg-transparent"
                                    value={data.jumlah_halaman}
                                    onChange={(e) =>
                                        setData(
                                            "jumlah_halaman",
                                            e.target.value,
                                        )
                                    }
                                />
                            </dd>
                        </div>

                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                                Bahasa
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <input
                                    className="bg-transparent"
                                    value={data.bahasa}
                                    onChange={(e) =>
                                        setData("bahasa", e.target.value)
                                    }
                                />
                            </dd>
                        </div>
                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                                Panjang Buku
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <input
                                    className="bg-transparent"
                                    value={data.panjang}
                                    onChange={(e) =>
                                        setData("panjang", e.target.value)
                                    }
                                />
                            </dd>
                        </div>
                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                                Lebar Buku
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <input
                                    className="bg-transparent"
                                    value={data.lebar}
                                    onChange={(e) =>
                                        setData("lebar", e.target.value)
                                    }
                                />
                            </dd>
                        </div>
                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                                Berat Buku
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <input
                                    className="bg-transparent"
                                    value={data.berat}
                                    onChange={(e) =>
                                        setData("berat", e.target.value)
                                    }
                                />
                            </dd>
                        </div>
                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                                Stock
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <input
                                    className="bg-transparent"
                                    value={data.stock}
                                    onChange={(e) =>
                                        setData("stock", e.target.value)
                                    }
                                />
                            </dd>
                        </div>
                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                                Sinopsis
                            </dt>
                            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                                <textarea
                                    rows="6"
                                    className="w-full bg-transparent"
                                    value={data.deskripsi}
                                    onChange={(e) =>
                                        setData("deskripsi", e.target.value)
                                    }
                                />
                            </dd>
                        </div>
                    </dl>
                </div>
                <div className="col-span-2 mb-10 flex items-center justify-end">
                    <button
                        type="submit"
                        className="rounded-lg bg-yellow-700 p-2 text-white shadow-md"
                    >
                        Simpan
                    </button>
                </div>
            </form>
        </div>
    );
}
