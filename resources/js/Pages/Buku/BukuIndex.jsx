import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import { NumericFormat } from "react-number-format";
import { Link } from "@inertiajs/react";

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

const TABLE_HEAD = ["Judul", "Harga", "ISBN", "Tanggal Terbit", "Genre", "Bahasa", "Action"];


export default function BukuIndex({ bukus }) {
    console.log(bukus);
    return (
        <Card floated={true} shadow={true} className="self-center py-10 px-2 rounded-md bg-purple-200">
            <CardHeader floated={false} shadow={false} className="bg-transparent rounded-none mx-5">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Daftar Buku
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            Lihat informasi tentang koleksi buku
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button variant="outlined" size="sm" className="font-sans">
                            View All
                        </Button>
                        <Link href="/bukus/create">
                            <Button className="flex items-center gap-2 h-10 w-auto" size="sm">
                                <UserPlusIcon strokeWidth={2} className="h-4 w-4" />
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
                                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {bukus.data.map(buku => (
                            <tr key={buku.id}>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <div className="flex items-center gap-3">
                                        <Avatar src={window.location.origin + `/upload/${buku.sampul}`} alt={buku.judul} className="size-10" />
                                        <div className="flex flex-col">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-medium"
                                            >
                                                {buku.judul}
                                            </Typography>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal opacity-70"
                                            >
                                                {buku.penulis}
                                            </Typography>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        <NumericFormat value={buku.harga.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
                                    </Typography>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <div className="flex flex-col">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {buku.isbn}
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal opacity-70"
                                        >
                                            {buku.penerbit}
                                        </Typography>
                                    </div>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {new Date(buku.tanggal_terbit).toLocaleDateString()}
                                    </Typography>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {buku.genre}
                                    </Typography>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {buku.bahasa}
                                    </Typography>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <Tooltip content="Edit User">
                                        <Link href={`/bukus/${buku.id}`} type='button' className="link text-sm font-semibold leading-6 text-gray-900"
                                        >
                                            Details {buku.id}
                                        </Link>
                                    </Tooltip>
                                </td>
                            </tr>
                        )
                        )
                        }
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="col-span-full text-center justify-between border-t border-blue-gray-50 p-4">
                <div className="flex gap-2">
                    {bukus.links.map((link) =>
                        link.url ? (
                            <Link
                                key={link.label}
                                href={link.url}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className={link.active ? "text-black font-bold p-1 mx-1" : "p-1 mx-1"} />
                        ) : (
                            <span
                                key={link.label}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className="p-1 mx-1 text-gray-400"
                            >
                            </span>
                        )
                    )}
                </div>
            </CardFooter>
        </Card>
    );
}
