import React from "react";
import service01 from "../../../../public/assets/images/services-01.jpg";
import service02 from "../../../../public/assets/images/services-02.jpg";
import service03 from "../../../../public/assets/images/services-03.jpg";
import service04 from "../../../../public/assets/images/services-04.jpg";

export default function Service() {
    return (
        <div className="services section" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-6">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-heading">
                                    <h2>
                                        We Provide <em>Different Services</em>{" "}
                                        &amp;
                                        <span>Features</span> For Your Agency
                                    </h2>
                                    <div className="line-dec" />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed doers eiusmod.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="service-item">
                                    <div className="icon">
                                        <img
                                            src={service01}
                                            alt="discover SEO"
                                            className="templatemo-feature"
                                        />
                                    </div>
                                    <h4>Discover More on Latest SEO Trends</h4>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="service-item">
                                    <div className="icon">
                                        <img
                                            src={service02}
                                            alt="data analysis"
                                            className="templatemo-feature"
                                        />
                                    </div>
                                    <h4>Real-Time Big Data Analysis</h4>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="service-item">
                                    <div className="icon">
                                        <img
                                            src={service03}
                                            alt="precise data"
                                            className="templatemo-feature"
                                        />
                                    </div>
                                    <h4>
                                        Precise Data Analysis &amp; Prediction
                                    </h4>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="service-item">
                                    <div className="icon">
                                        <img
                                            src={service04}
                                            alt="SEO marketing"
                                            className="templatemo-feature"
                                        />
                                    </div>
                                    <h4>SEO Marketing &amp; Social Media</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
