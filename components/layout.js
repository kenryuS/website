import Navbar from "./navigatorbar";
import Footer from "./footer";

export default function Layout({children}) {
    return (
        <>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}