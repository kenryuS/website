import Navbar from "./navigatorbar";
import NavbarMobile from "./navigatorbar-mobile";
import Footer from "./footer";
import Sidebar from './hamburger-menu';

export default function Layout({children}) {
    return (
        <div id="outer-container">
            {/* <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */}
            <div id="page-wrap">
                <Navbar/>
                <main>{children}</main>
                <Footer/>
                <NavbarMobile/>
            </div>
        </div>
    )
}
