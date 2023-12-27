import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Guest from "@/Layouts/GuestLayout";
import Infos from "@/Components/tale/Infos";
import Contact from "@/Components/tale/Contact";
import Banner from "@/Components/tale/Banner";
import Project from "@/Components/tale/Project";
import Service from "@/Components/tale/Service";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <Guest>
            <Banner />
            <Service />
            <Project />
            <Infos />
            <Contact />
        </Guest>
    );
}
