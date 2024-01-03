import { Link } from "@inertiajs/react";
import logo from "../../../../public/assets/images/liputan6.png";

export default function Header() {
    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/* ***** Logo Start ***** */}
                            <Link href="/" className="logo">
                                <img
                                    src={logo}
                                    alt=""
                                    style={{ maxWidth: 160 }}
                                />
                            </Link>
                            {/* ***** Logo End ***** */}
                            {/* ***** Menu Start ***** */}
                            <ul className="nav">
                                <li className="scroll-to-section">
                                    <Link href="/" className="active">
                                        Home
                                    </Link>
                                </li>
                                <li className="scroll-to-section">
                                    <Link href="#services">Services</Link>
                                </li>
                                <li className="scroll-to-section">
                                    <Link href={route("blog")}>Blog</Link>
                                </li>
                                <li className="scroll-to-section">
                                    <Link href={route("about")}>About Us</Link>
                                </li>
                                <li className="scroll-to-section">
                                    <Link href="#contact">Contact</Link>
                                </li>
                            </ul>
                            <a className="menu-trigger">
                                <span>Menu</span>
                            </a>
                            {/* ***** Menu End ***** */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
