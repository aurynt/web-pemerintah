import { SVGAttributes } from "react";
import logo from "../../../public/assets/images/liputan6.png";

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
        <img
            src={logo}
            alt="logo"
            style={{ width: "150px" }}
            className="bg-blend-multiply"
        />
    );
}
