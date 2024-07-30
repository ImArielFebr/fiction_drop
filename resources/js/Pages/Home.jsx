import { Link } from "@inertiajs/react";
import Layout from "../Layout/Layout";

const links = [
    { name: "Open roles", href: "#" },
    { name: "Internship program", href: "#" },
    { name: "Our values", href: "#" },
    { name: "Meet our leadership", href: "#" },
];
const stats = [
    { name: "Offices worldwide", value: "12" },
    { name: "Full-time colleagues", value: "300+" },
    { name: "Hours per week", value: "40" },
    { name: "Paid time off", value: "Unlimited" },
];

function Home() {
    return (
        <div className="relative isolate overflow-hidden bg-transparent py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="font-sans text-4xl font-bold tracking-tight text-black hover:font-mono sm:text-6xl">
                        Hello
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-700">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                        irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                        veniam occaecat fugiat aliqua.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-black sm:grid-cols-2 md:flex lg:gap-x-10">
                        {links.map((link) => (
                            <a key={link.name} href={link.href}>
                                {link.name}{" "}
                                <span aria-hidden="true">&rarr;</span>
                            </a>
                        ))}
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.name}
                                className="flex flex-col-reverse"
                            >
                                <dt className="text-base leading-7 text-gray-700">
                                    {stat.name}
                                </dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-black">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <Link
                    preserveScroll
                    href="/"
                    className="mt-[1000px] block font-sans text-4xl font-bold tracking-tight text-black hover:font-mono sm:text-6xl"
                >
                    {new Date().toLocaleTimeString()}
                </Link>
            </div>
        </div>
    );
}

Home.layout = (page) => <Layout children={page} />;

export default Home;
