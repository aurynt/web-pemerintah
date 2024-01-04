import Banner from "@/Components/tale/Banner";
import HappyClientSection from "@/Components/tale/HappyClientSection";
import Guest from "@/Layouts/GuestLayout";
import type { About, Setting } from "@/types";

export default function About({
    about,
    setting,
}: {
    about: About;
    setting: Setting;
}) {
    return (
        <Guest title={"About"} logo={setting.logo}>
            <Banner>
                <div className="caption  header-text">
                    <h6>
                        LIPUTAN6
                        <b className="text-red-700 text-2xl font-bold">.</b>
                        COM
                    </h6>
                    <div className="line-dec" />
                    <h4>
                        <em>Selengkapnya</em> Tentang Kami
                    </h4>
                    <p>{about.desc}</p>
                </div>
            </Banner>
            <HappyClientSection data={about} />
        </Guest>
    );
}
