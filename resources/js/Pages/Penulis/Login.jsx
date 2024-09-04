import { useState } from "react";

import { Typography, Input, Button, Checkbox } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Link, useForm } from "@inertiajs/react";
import { Container } from "@mui/material";

function LoginPenulis() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });
    console.log();
    function submit(e) {
        e.preventDefault();
        post("/penulis/login", {
            onFinish: () => reset("password"),
        });
    }

    return (
        <section className="grid h-screen items-center p-8 text-center">
            <div>
                <Typography variant="h3" color="blue-gray" className="mb-2">
                    Sign In
                </Typography>
                <Typography className="mb-10 text-[18px] font-normal text-gray-600">
                    Masukkan email dan password untuk masuk
                </Typography>
                <form
                    onSubmit={submit}
                    className="mx-auto max-w-[24rem] text-left"
                >
                    <div className="mb-6">
                        <label htmlFor="email">
                            <Typography
                                variant="small"
                                className="mb-2 block font-medium text-gray-900"
                            >
                                Email
                            </Typography>
                        </label>
                        <Input
                            id="email"
                            color="gray"
                            size="lg"
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            placeholder="email@mail.com"
                            className="focus:border-t-primary w-full border-t-blue-gray-200 placeholder:opacity-100"
                            labelProps={{
                                className: "hidden",
                            }}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password">
                            <Typography
                                variant="small"
                                className="mb-2 block font-medium text-gray-900"
                            >
                                Password
                            </Typography>
                        </label>
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
                    </div>
                    <div className="mt-4 block">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                            />
                            <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
                                Remember me
                            </span>
                        </label>
                    </div>

                    <Button
                        type="submit"
                        disabled={processing}
                        color="gray"
                        size="lg"
                        className="mt-6"
                        fullWidth
                    >
                        sign in
                    </Button>
                    <div className="!mt-4 flex justify-end">
                        <Link href="#">
                            <Typography
                                color="blue-gray"
                                variant="small"
                                className="font-medium"
                            >
                                Forgot password?
                            </Typography>
                        </Link>
                    </div>
                    <Button
                        variant="outlined"
                        size="lg"
                        className="mt-6 flex h-12 items-center justify-center gap-2"
                        fullWidth
                    >
                        <img
                            src={`https://www.material-tailwind.com/logos/logo-google.png`}
                            alt="google"
                            className="h-6 w-6"
                        />{" "}
                        sign in with google
                    </Button>
                    <Typography
                        variant="small"
                        color="gray"
                        className="!mt-4 text-center font-normal"
                    >
                        Not registered?{" "}
                        <Link
                            href={"/penulis/register"}
                            className="font-medium text-gray-900"
                        >
                            Create account
                        </Link>
                    </Typography>
                </form>
            </div>
        </section>
    );
}

LoginPenulis.layout = (page) => <Container children={page} />;

export default LoginPenulis;
