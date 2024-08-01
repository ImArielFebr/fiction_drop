import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { Button, Card } from "@material-tailwind/react";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";
import AdminLayout from "../../Layout/AdminLayout";
import { ArrowLeftCircleIcon, TrashIcon } from "@heroicons/react/16/solid";

function BukuDetail({ buku }) {
    const [file, setFile] = useState();
    const {
        data,
        setData,
        put,
        post,
        delete: destroy,
        errors,
        processing,
        progress,
    } = useForm({
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
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    function unggah(e) {
        e.preventDefault();
        post(`/bukus/images/${buku.id}`, {
            data: {
                id: buku.id,
                sampul: data.sampul,
            },
        });
    }

    function hapus(e) {
        e.preventDefault();
        destroy(`/bukus/${buku.id}`);
    }
    function submit(e) {
        e.preventDefault();
        put(`/bukus/${buku.id}`);
    }

    function getFile(event) {
        setFile(URL.createObjectURL(event));
    }

    return (
        <>
            <div className="bg-transparent">
                <div className="col-span-full grid grid-cols-2">
                    <div className="h-10 justify-start">
                        <Link href="/bukus">
                            <ArrowLeftCircleIcon className="max-h-full opacity-80 hover:opacity-40" />
                        </Link>
                    </div>
                    <div className="flex h-12 justify-end">
                        <form onSubmit={hapus}>
                            <button
                                type="submit"
                                className="h-12 justify-end rounded-lg p-2 text-red-700 hover:opacity-40"
                            >
                                <TrashIcon title="hapus" className="h-9" />
                            </button>
                        </form>
                    </div>
                </div>
                <form onSubmit={submit}>
                    <div>
                        <input
                            type="text"
                            className="mb-4 block w-full rounded-md border-0 bg-transparent text-center text-6xl font-bold text-gray-800"
                            value={data.judul}
                            onChange={(e) => setData("judul", e.target.value)}
                        />
                    </div>
                    <Card
                        className="h-72 w-60 cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
                        onClick={handleOpen}
                    >
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
                    </Card>
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
                                    <input
                                        value={data.harga}
                                        onChange={(e) =>
                                            setData("harga", e.target.value)
                                        }
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
                        <Button
                            type="submit"
                            className="rounded-lg bg-brown-500 px-4 py-2 text-white shadow-md"
                        >
                            Simpan
                        </Button>
                    </div>
                </form>
            </div>

            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <form onSubmit={unggah}>
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="justify-center sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <DialogTitle
                                                as="h3"
                                                className="text-base font-semibold leading-6 text-gray-900"
                                            >
                                                {data.judul}
                                            </DialogTitle>
                                            <div className="mt-2 justify-center">
                                                <img
                                                    alt="sampul"
                                                    className="h-full w-72 rounded-lg object-center"
                                                    src={
                                                        file
                                                            ? file
                                                            : window.location
                                                                  .origin +
                                                              `/upload/${data.sampul}`
                                                    }
                                                />
                                                <div className="col-span-3 my-4 grid justify-center sm:px-0">
                                                    <label className="rounded-md border-2 border-black bg-white p-2 hover:cursor-pointer hover:opacity-80">
                                                        Upload
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <Button
                                        type="submit"
                                        onClick={() => setOpen(false)}
                                        className="inline-flex w-full justify-center rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                    >
                                        Simpan
                                    </Button>
                                    <Button
                                        data-autofocus
                                        onClick={() => setOpen(false)}
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </form>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
            {/* <Dialog className="relative z-10" open={open} handler={handleOpen}>
                <DialogHeader className="justify-center">

                </DialogHeader>
                <DialogBody className="justify-center">

                </DialogBody>
                <DialogFooter className="justify-center">
                    <Button
                        size="sm"
                        variant="outlined"
                        color="blue-gray"
                        className="mr-5 flex items-center"
                    >
                        Share
                    </Button>
                </DialogFooter>
            </Dialog> */}
        </>
    );
}

BukuDetail.layout = (page) => <AdminLayout children={page} />;

export default BukuDetail;
