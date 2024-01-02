import React from "react";

export default function VideoSection() {
    return (
        <div className="video-info section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="video-thumb">
                            <img src="assets/images/video-thumb.jpg" alt="" />
                            <a href="http://youtube.com" target="_blank">
                                <i className="fa fa-play" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <div className="section-heading">
                            <h2>
                                Detailed Information On What We Do &amp; Who We
                                Are
                            </h2>
                            <div className="line-dec" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed doers eiusmod tempor
                                incididunt ut labore et dolore dolor.
                            </p>
                        </div>
                        <div className="skills">
                            <div className="skill-slide marketing">
                                <div className="fill" />
                                <h6>SEO Marketing</h6>
                                <span>90%</span>
                            </div>
                            <div className="skill-slide digital">
                                <div className="fill" />
                                <h6>Digital Marketing</h6>
                                <span>80%</span>
                            </div>
                            <div className="skill-slide media">
                                <div className="fill" />
                                <h6>Social Media Management</h6>
                                <span>95%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
