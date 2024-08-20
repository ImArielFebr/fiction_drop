import AdminLayout from "../../Layouts/AdminLayout";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    CardFooter,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";
import { NumericFormat } from "react-number-format";
import { Link, useForm } from "@inertiajs/react";

const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Monitored",
        value: "monitored",
    },
    {
        label: "Unmonitored",
        value: "unmonitored",
    },
];

const TABLE_HEAD = [
    "Judul",
    "Harga",
    "ISBN",
    "Tanggal Terbit",
    "Genre",
    "Bahasa",
    "Action",
];

function BukuIndex({ bukus }) {
    const { delete: destroy } = useForm();

    function hapus(e, buku) {
        e.preventDefault();
        destroy(`/bukus/${buku}`);
    }

    return (
        <Card className="w-full bg-transparent" shadow={false}>
            <CardHeader
                floated={false}
                shadow={false}
                className="mx-5 rounded-none bg-transparent"
            >
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="black">
                            Daftar Buku
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            Lihat informasi tentang koleksi buku
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button
                            variant="outlined"
                            size="sm"
                            className="border-gray-800 font-sans"
                        >
                            View All
                        </Button>
                        <Link href="/bukus/create">
                            <Button
                                className="flex h-10 w-auto items-center gap-2"
                                size="sm"
                            >
                                <UserPlusIcon
                                    strokeWidth={2}
                                    className="h-4 w-4"
                                />
                                Tambah Buku
                            </Button>
                        </Link>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="-scroll px-0">
                <table className="mt-4 h-full w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-y border-gray-800 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="black"
                                        className="font-normal leading-none"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {bukus.data.map((buku) => (
                            <tr key={buku.id}>
                                <td className="border-b border-gray-800 p-4">
                                    <div className="flex items-center gap-3">
                                        <Avatar
                                            src={
                                                window.location.origin +
                                                `/upload/${buku.sampul}`
                                            }
                                            alt={buku.judul}
                                            className="size-10"
                                        />
                                        <div className="flex flex-col">
                                            <Typography
                                                variant="small"
                                                color="black"
                                                className="font-bold"
                                            >
                                                {buku.judul}
                                            </Typography>
                                            <Typography
                                                variant="small"
                                                color="black"
                                                className="font-normal opacity-70"
                                            >
                                                {buku.penulis}
                                            </Typography>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-b border-gray-800 p-4">
                                    <Typography
                                        variant="small"
                                        color="black"
                                        className="font-bold opacity-75"
                                    >
                                        <NumericFormat
                                            value={buku.harga.toFixed(2)}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"Rp."}
                                        />
                                    </Typography>
                                </td>
                                <td className="border-b border-gray-800 p-4">
                                    <div className="flex flex-col">
                                        <Typography
                                            variant="small"
                                            color="black"
                                            className="font-bold"
                                        >
                                            {buku.isbn}
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            color="black"
                                            className="font-normal opacity-70"
                                        >
                                            {buku.penerbit}
                                        </Typography>
                                    </div>
                                </td>
                                <td className="border-b border-gray-800 p-4">
                                    <Typography
                                        variant="small"
                                        color="black"
                                        className="font-bold opacity-75"
                                    >
                                        {new Date(
                                            buku.tanggal_terbit,
                                        ).toLocaleDateString()}
                                    </Typography>
                                </td>
                                <td className="border-b border-gray-800 p-4">
                                    <Typography
                                        variant="small"
                                        color="black"
                                        className="font-bold"
                                    >
                                        {buku.genre}
                                    </Typography>
                                </td>
                                <td className="border-b border-gray-800 p-4">
                                    <Typography
                                        variant="small"
                                        color="black"
                                        className="font-bold"
                                    >
                                        {buku.bahasa}
                                    </Typography>
                                </td>
                                <td className="grid grid-rows-2 gap-y-2 border-b border-gray-800 p-4">
                                    <Tooltip
                                        className="bg-blue-gray-600 text-white"
                                        content="Edit Detail Buku"
                                    >
                                        <Link
                                            href={`/bukus/${buku.id}/edit`}
                                            type="button"
                                            className="link"
                                        >
                                            <Button
                                                type="button"
                                                className="rounded-md bg-brown-400 px-4 py-2 text-sm text-white"
                                            >
                                                Lihat Detail
                                            </Button>
                                        </Link>
                                    </Tooltip>
                                    <Tooltip
                                        className="bg-gray-600 text-white"
                                        content="Hapus Buku"
                                    >
                                        <form
                                            onSubmit={(e) => {
                                                hapus(e, buku.id);
                                            }}
                                        >
                                            <Button
                                                type="submit"
                                                className="rounded-md bg-red-600 px-4 py-2 text-sm text-white"
                                            >
                                                Hapus
                                            </Button>
                                        </form>
                                    </Tooltip>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="col-span-full justify-between border-t border-blue-gray-50 p-4 text-center">
                <div className="flex gap-2">
                    {bukus.links.map((link) =>
                        link.url ? (
                            <Link
                                key={link.label}
                                href={link.url}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className={
                                    link.active
                                        ? "mx-1 p-1 font-bold text-black"
                                        : "mx-1 p-1"
                                }
                            />
                        ) : (
                            <span
                                key={link.label}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className="mx-1 p-1 text-gray-400"
                            ></span>
                        ),
                    )}
                </div>
            </CardFooter>
        </Card>
    );
}

BukuIndex.layout = (page) => <AdminLayout children={page} />;

export default BukuIndex;
