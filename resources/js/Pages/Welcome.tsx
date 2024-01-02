import { Post, Setting } from "@/types";
import Guest from "@/Layouts/GuestLayout";
import Contact from "@/Components/tale/Contact";
import Banner from "@/Components/tale/Banner";
import Service from "@/Components/tale/Service";
import Blog from "@/Components/tale/Blog";

export default function Welcome({
    setting,
    posts,
}: {
    setting: Setting;
    posts: Post[];
}) {
    return (
        <Guest title="Home">
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
                    {setting.desc}
                    {/* tempatnya berita terpercaya yang memberikan informasi
                    Selamat datang di <Link href="/">Liputan6.com</Link>,
                    faktual, akurat, dan terkini. Kami berkomitmen untuk menjadi
                    sumber pemberitaan terbaik, menyajikan berita tanpa bias,
                    dan menjaga integritas informasi. Dapatkan update terbaru
                    hanya di sini! */}
                </p>
                <div className="main-button scroll-to-section">
                    <a href={route("about")}>About us</a>
                </div>
            </Banner>
            <Service />
            <Blog data={posts} />
            <Contact setting={setting} />
        </Guest>
    );
}
