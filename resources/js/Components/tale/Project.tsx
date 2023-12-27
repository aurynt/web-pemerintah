import React from "react";
import project01 from "../../../../public/assets/images/projects-01.jpg";
import project02 from "../../../../public/assets/images/projects-02.jpg";
import project03 from "../../../../public/assets/images/projects-03.jpg";
import project04 from "../../../../public/assets/images/projects-04.jpg";

export default function Project() {
    return (
        <div className="projects section" id="projects">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <h2>
                                Discover Our <em>Work</em> &amp;{" "}
                                <span>Projects</span>
                            </h2>
                            <div className="line-dec" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed doers eiusmod.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="owl-features owl-carousel">
                            <div className="item">
                                <img src={project01} alt="" />
                                <div className="down-content">
                                    <h4>Digital Agency HTML Templates</h4>
                                    <a href="#">
                                        <i className="fa fa-link" />
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <img src={project02} alt="" />
                                <div className="down-content">
                                    <h4>Admin Dashboard CSS Templates</h4>
                                    <a href="#">
                                        <i className="fa fa-link" />
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <img src={project03} alt="" />
                                <div className="down-content">
                                    <h4>Best Responsive Website Layouts</h4>
                                    <a href="#">
                                        <i className="fa fa-link" />
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <img src={project04} alt="" />
                                <div className="down-content">
                                    <h4>HTML CSS Layouts for your websites</h4>
                                    <a href="#">
                                        <i className="fa fa-link" />
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <img src={project02} alt="" />
                                <div className="down-content">
                                    <h4>Bootstrap 5 Themes for Free</h4>
                                    <a href="#">
                                        <i className="fa fa-link" />
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <img src={project03} alt="" />
                                <div className="down-content">
                                    <h4>Mobile Friendly Website Layouts</h4>
                                    <a href="#">
                                        <i className="fa fa-link" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
