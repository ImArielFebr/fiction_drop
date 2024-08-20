import React from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { Container } from "@mui/material";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";

export default function AdminLayout({ children }) {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <div className="flex h-screen bg-brown-50">
            <Card className="col-span-1 h-auto max-w-[20rem] basis-1/5 rounded-none bg-brown-500 p-4 pt-10 shadow-xl shadow-brown-600">
                <div className="mb-2 p-4">
                    <Link href="/">
                        <Typography variant="h5" color="white">
                            Fiction Drop
                        </Typography>
                    </Link>
                </div>
                <List>
                    <Accordion
                        open={open === 1}
                        icon={
                            <ChevronDownIcon
                                color="white"
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                            />
                        }
                    >
                        <ListItem className="p-0" selected={open === 1}>
                            <AccordionHeader
                                onClick={() => handleOpen(1)}
                                className="border-b-0 p-3"
                            >
                                <ListItemPrefix>
                                    <PresentationChartBarIcon
                                        className="h-5 w-5"
                                        color="white"
                                    />
                                </ListItemPrefix>
                                <Typography
                                    color="white"
                                    className="mr-auto font-normal"
                                >
                                    Dashboard
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <Link href="/admin">
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon
                                                color="white"
                                                strokeWidth={3}
                                                className="h-3 w-5"
                                            />
                                        </ListItemPrefix>
                                        <Typography color="white">
                                            Home
                                        </Typography>
                                    </ListItem>
                                </Link>
                                <Link href="#">
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon
                                                color="white"
                                                strokeWidth={3}
                                                className="h-3 w-5"
                                            />
                                        </ListItemPrefix>
                                        <Typography color="white">
                                            Analytics
                                        </Typography>
                                    </ListItem>
                                </Link>
                                <Link href="#">
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon
                                                color="white"
                                                strokeWidth={3}
                                                className="h-3 w-5"
                                            />
                                        </ListItemPrefix>

                                        <Typography color="white">
                                            Projects
                                        </Typography>
                                    </ListItem>
                                </Link>
                            </List>
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        open={open === 2}
                        icon={
                            <ChevronDownIcon
                                color="white"
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                            />
                        }
                    >
                        <ListItem className="p-0" selected={open === 2}>
                            <AccordionHeader
                                onClick={() => handleOpen(2)}
                                className="border-b-0 p-3"
                            >
                                <ListItemPrefix>
                                    <ShoppingBagIcon
                                        color="white"
                                        className="h-5 w-5"
                                    />
                                </ListItemPrefix>
                                <Typography
                                    color="white"
                                    className="mr-auto font-normal"
                                >
                                    Buku
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <Link href="/bukus">
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon
                                                color="white"
                                                strokeWidth={3}
                                                className="h-3 w-5"
                                            />
                                        </ListItemPrefix>
                                        <Typography color="white">
                                            Daftar Buku
                                        </Typography>
                                    </ListItem>
                                </Link>
                                <Link href="#">
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon
                                                color="white"
                                                strokeWidth={3}
                                                className="h-3 w-5"
                                            />
                                        </ListItemPrefix>
                                        <Typography color="white">
                                            Transaksi
                                        </Typography>
                                    </ListItem>
                                </Link>
                            </List>
                        </AccordionBody>
                    </Accordion>
                    <hr className="my-2 border-blue-gray-50" />
                    <Link href="#">
                        <ListItem>
                            <ListItemPrefix>
                                <InboxIcon color="white" className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="white">Inbox</Typography>
                            <ListItemSuffix>
                                <Chip
                                    value="14"
                                    size="sm"
                                    variant="ghost"
                                    color="blue-gray"
                                    className="rounded-full"
                                />
                            </ListItemSuffix>
                        </ListItem>
                    </Link>
                    <Link href="#">
                        <ListItem>
                            <ListItemPrefix>
                                <UserCircleIcon
                                    color="white"
                                    className="h-5 w-5"
                                />
                            </ListItemPrefix>
                            <Typography color="white">Profile</Typography>
                        </ListItem>
                    </Link>
                    <Link href="#">
                        <ListItem>
                            <ListItemPrefix>
                                <Cog6ToothIcon
                                    color="white"
                                    className="h-5 w-5"
                                />
                            </ListItemPrefix>
                            <Typography color="white">Pengaturan</Typography>
                        </ListItem>
                    </Link>
                    <Link
                        method="post"
                        href={route("admin.logout")}
                        as="button"
                    >
                        <ListItem>
                            <ListItemPrefix>
                                <PowerIcon color="white" className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="white">Log Out</Typography>
                        </ListItem>
                    </Link>
                </List>
            </Card>

            <Container className="basis-4/5 justify-start bg-transparent">
                <div className="bg-transparent pt-10">{children}</div>
            </Container>
        </div>
    );
}
