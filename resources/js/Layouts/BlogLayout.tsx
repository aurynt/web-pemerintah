import Header from "@/Pages/Blog/partial/Header";
import { Head } from "@inertiajs/react";
import { type PropsWithChildren } from "react";

export default function BlogLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Head title="Blog" />
            <Header />
            {children}
        </>
    );
}
