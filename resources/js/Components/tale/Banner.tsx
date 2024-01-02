import { Link } from "@inertiajs/react";
import { ReactNode } from "react";

export default function Banner({ children }: { children: ReactNode }) {
    return (
        <div className="main-banner" id="top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="caption header-text">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
