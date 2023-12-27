import { Head, Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import "../../../public/assets/css/templatemo-tale-seo-agency.css";
import "../../../public/assets/css/owl.css";
import "../../../public/assets/css/animate.css";
import "../../../public/assets/css/fontawesome.css";
import "../../../public/vendor/bootstrap/css/bootstrap.min.css";
import Header from "@/Components/tale/Header";
import Footer from "@/Components/tale/Footer";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
                <title>Home</title>
                {/* Additional CSS Files */}
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
                />
                <script src="vendor/jquery/jquery.min.js"></script>
                <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

                <script src="assets/js/isotope.min.js"></script>
                <script src="assets/js/owl-carousel.js"></script>
                <script src="assets/js/tabs.js"></script>
                <script src="assets/js/popup.js"></script>
                <script src="assets/js/custom.js"></script>
            </Head>
            {/* ***** Header Area Start ***** */}
            <Header />
            {/* ***** Header Area End ***** */}
            {children}
            {/* {children} */}
            <Footer />
            {/* Scripts */}
            {/* Bootstrap core JavaScript */}
        </>
    );
}
