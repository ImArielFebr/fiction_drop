import { Link } from "@inertiajs/react";
import Layout from "../Layout/Layout";
import React from "react";
import {
    Navbar,
    Collapse,
    Button,
    IconButton,
    Typography,
    Input,
} from "@material-tailwind/react";
import {
    RectangleStackIcon,
    UserCircleIcon,
    CommandLineIcon,
    Squares2X2Icon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Home() {
    return (
        <>
            <header className="bg-white p-8">
                <div className="mt-16 grid min-h-[82vh] w-full place-items-stretch bg-[url('/image/bg-hero-17.svg')] bg-contain bg-center bg-no-repeat md:h-[34rem] lg:h-[54rem]">
                    <div className="container mx-auto px-4 text-center">
                        <Typography className="text-primary inline-flex rounded-lg border-[1.5px] border-blue-gray-50 bg-white px-1 py-1 text-xs font-medium lg:px-4">
                            Exciting News! Introducing our latest innovation
                        </Typography>
                        <Typography
                            variant="h1"
                            color="blue-gray"
                            className="mx-auto my-6 w-full !text-2xl leading-snug lg:max-w-3xl lg:!text-5xl"
                        >
                            Get ready to experience a new level of{" "}
                            <span className="leading-snug text-green-500">
                                performance
                            </span>{" "}
                            and{" "}
                            <span className="leading-snug text-green-500">
                                functionality
                            </span>
                            .
                        </Typography>
                        <Typography
                            variant="lead"
                            className="mx-auto w-full text-base !text-gray-500 lg:text-lg"
                        >
                            The time is now for it to be okay to be great. For
                            being a bright color. For standing out.
                        </Typography>
                        <div className="mt-8 grid w-full place-items-start md:justify-center">
                            <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                                <Input
                                    color="gray"
                                    label="Enter your email"
                                    size="lg"
                                />
                                <Button
                                    color="gray"
                                    className="w-full px-4 md:w-[12rem]"
                                >
                                    get started
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

Home.layout = (page) => <Layout children={page} />;

export default Home;
