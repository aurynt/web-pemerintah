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
        <Guest title="Home" logo={setting.logo}>
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
                <p>{setting.desc}</p>
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
