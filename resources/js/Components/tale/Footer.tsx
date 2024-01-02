import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="col-lg-12">
                    <p>
                        Copyright © 2024{" "}
                        <Link className="text-blue-700" href="/">
                            Liputan6
                        </Link>
                        . All rights reserved.
                        <br />
                        Design by{" "}
                        <a
                            className="text-blue-700"
                            href="https://auryncode.vercel.app"
                            target="_blank"
                        >
                            Auryncode
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
