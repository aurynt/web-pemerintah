import { Link } from "@inertiajs/react";
import logoImg from "./../../../../public/assets/images/logo.png";
export default function Header({ logo }: { logo: string }) {
    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/* ***** Logo Start ***** */}
                            <Link href="/" className="logo">
                                <img
                                    src={
                                        logoImg
                                    } /* {`/storage/logo/${logo}`} */
                                    alt=""
                                    style={{ maxWidth: 110 }}
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
