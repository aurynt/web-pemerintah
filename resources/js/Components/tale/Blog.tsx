import { Post } from "@/types";
import project01 from "../../../../public/assets/images/projects-01.jpg";
import project02 from "../../../../public/assets/images/projects-02.jpg";
import project03 from "../../../../public/assets/images/projects-03.jpg";
import project04 from "../../../../public/assets/images/projects-04.jpg";
import { Link } from "@inertiajs/react";

export default function Blog({ data }: { data: Post[] }) {
    return (
        <div className="projects section" id="blogs">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <h2>
                                Berita <em>Hangat</em> &amp;{" "}
                                <span>Terkini</span>
                            </h2>
                            <div className="line-dec" />
                            <p>
                                Baca berita terkini hanya{" "}
                                <Link
                                    className="underline"
                                    href={route("blog")}
                                >
                                    disini
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex sm:justify-center sm:flex-row flex-col overflow-scroll items-center gap-4">
                {data.map((item, i) => (
                    <div key={i} className="h-full min-w-80 max-w-80 item">
                        <div className="overflow-scroll h-52">
                            <img
                                className="h-full"
                                src={`storage/post/${item.photo}`}
                                alt={item.title}
                            />
                        </div>
                        <div className="down-content">
                            <h4>{item.title}</h4>
                            <Link href="#">
                                <i className="fa fa-link" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
