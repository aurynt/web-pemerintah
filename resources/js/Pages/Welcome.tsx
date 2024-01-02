import { PageProps } from "@/types";
import Guest from "@/Layouts/GuestLayout";
import Contact from "@/Components/tale/Contact";
import Banner from "@/Components/tale/Banner";
import Project from "@/Components/tale/Project";
import Service from "@/Components/tale/Service";
import { Link } from "@inertiajs/react";

export default function Welcome() {
    return (
        <Guest>
            <Banner>
                <h6>
                    LIPUTAN6
                    <b className="text-red-700 text-2xl font-bold">.</b>
                    COM
                </h6>
                <div className="line-dec" />
                <h4>
                    Sumber <em>Informasi</em> Terpercaya
                    <span>Untuk Anda</span>
                </h4>
                <p>
                    Selamat datang di <Link href="/">Liputan6.com</Link>,
                    tempatnya berita terpercaya yang memberikan informasi
                    faktual, akurat, dan terkini. Kami berkomitmen untuk menjadi
                    sumber pemberitaan terbaik, menyajikan berita tanpa bias,
                    dan menjaga integritas informasi. Dapatkan update terbaru
                    hanya di sini!
                </p>
                <div className="main-button scroll-to-section">
                    <a href={route("about")}>About us</a>
                </div>
            </Banner>
            <Service />
            <Project />
            <Contact />
        </Guest>
    );
}
