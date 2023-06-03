import Navbar from "./navigatorbar";
import NavbarMobile from "./navigatorbar-mobile";
import Footer from "./footer";

export default function Layout({children}) {
    return (
        <div id="outer-container">
            <div id="page-wrap">
                <Navbar/>
                <main>{children}</main>
                <Footer/>
                <NavbarMobile/>
            </div>
        </div>
    )
}
