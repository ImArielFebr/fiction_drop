import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Link, useForm } from "@inertiajs/react";
import { Container } from "@mui/material";

function RegisterAdmin() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
    const { data, setData, post, errors } = useForm({
        name: "",
        email: "",
        password: "",
    });
    console.log(useForm());
    function submit(e) {
        e.preventDefault();
        post("/admin/register");
    }

    return (
        <section className="grid h-screen items-center p-8 text-center">
            <div>
                <Typography variant="h4" color="blue-gray">
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography>
                <form
                    onSubmit={submit}
                    className="mx-auto mt-4 max-w-[24rem] text-left"
                >
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-3"
                        >
                            Nama
                        </Typography>
                        <Input
                            id="name"
                            name="name"
                            size="lg"
                            placeholder="Nama"
                            autoComplete="nama"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className:
                                    "before:content-none after:content-none",
                            }}
                        />
                        {errors.name && (
                            <p className="text-xs text-red-700">
                                {errors.name}
                            </p>
                        )}
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-3"
                        >
                            Email
                        </Typography>
                        <Input
                            id="email"
                            name="email"
                            size="lg"
                            placeholder="email@mail.com"
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className:
                                    "before:content-none after:content-none",
                            }}
                        />
                        {errors.email && (
                            <p className="text-xs text-red-700">
                                {errors.email}
                            </p>
                        )}
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-3"
                        >
                            Password
                        </Typography>
                        <Input
                            id="password"
                            name="password"
                            size="lg"
                            placeholder="********"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            labelProps={{
                                className: "hidden",
                            }}
                            className="focus:border-t-primary w-full border-t-blue-gray-200 placeholder:opacity-100"
                            type={passwordShown ? "text" : "password"}
                            icon={
                                <i onClick={togglePasswordVisiblity}>
                                    {passwordShown ? (
                                        <EyeIcon className="h-5 w-5" />
                                    ) : (
                                        <EyeSlashIcon className="h-5 w-5" />
                                    )}
                                </i>
                            }
                        />
                        {errors.password && (
                            <p className="text-xs text-red-700">
                                {errors.password}
                            </p>
                        )}
                    </div>
                    <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-gray-900"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button type="submit" className="mt-6" fullWidth>
                        Sign Up
                    </Button>
                    <Typography
                        color="gray"
                        className="mt-4 text-center font-normal"
                    >
                        Already have an account?{" "}
                        <Link
                            href={"/admin/login"}
                            className="font-medium text-gray-900"
                        >
                            {" "}
                            Sign In
                        </Link>
                    </Typography>
                </form>
            </div>
        </section>
    );
}

RegisterAdmin.layout = (page) => <Container children={page} />;

export default RegisterAdmin;
