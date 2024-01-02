import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import type { Category } from "@/types";

export default function Header() {
    return (
        <>
            <div className="flex justify-between py-4 px-5">
                <ApplicationLogo />
                <div className="flex gap-3">
                    <Link className="text-gray-800" href="/">
                        Home
                    </Link>
                    <Link className="text-gray-800" href={route("about")}>
                        About
                    </Link>
                    <Link className="text-gray-800" href={route("blog")}>
                        Blog
                    </Link>
                </div>
            </div>
            <div className="w-full border mb-3"></div>
        </>
    );
}
