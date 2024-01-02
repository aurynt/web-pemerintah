import type { About } from "@/types";

export default function HappyClientSection({ data }: { data: About }) {
    return (
        <div className="happy-clients section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="naccs">
                            <div className="tabs">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="menu">
                                            <div className="active">
                                                <span>Sejarah</span>
                                            </div>
                                            <div>
                                                <span>Visi</span>
                                            </div>
                                            <div className="last-item">
                                                <span>Misi</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <ul className="nacc">
                                            <li className="active">
                                                <div>
                                                    <div className="row">
                                                        <div className="col-lg-7">
                                                            <h4>
                                                                Sejarah Liputan6
                                                            </h4>
                                                            <div className="line-dec" />
                                                            {data.sejarah}
                                                        </div>
                                                        <div className="col-lg-5 align-self-center">
                                                            <img
                                                                src="assets/images/happyclient-01.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <div className="row">
                                                        <div className="col-lg-7">
                                                            <h4>Visi</h4>
                                                            <div className="line-dec" />
                                                            <p>{data.visi}</p>
                                                        </div>
                                                        <div className="col-lg-5 align-self-center">
                                                            <img
                                                                src="assets/images/happyclient-01.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <div className="row">
                                                        <div className="col-lg-7">
                                                            <h4>Misi</h4>
                                                            <div className="line-dec" />
                                                            <p>{data.misi}</p>
                                                        </div>
                                                        <div className="col-lg-5 align-self-center">
                                                            <img
                                                                src="assets/images/happyclient-01.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
