import Link from 'next/link'
import styles from '../styles/navbar-mobile.module.css'

function Linksinbuttons() {
    return (
        <nav className={styles.navi}>
            <Link href='/'><a><p>Home</p></a></Link>
            <Link href='/blog'><a><p>Blogs</p></a></Link>
            <a href="https://kenryu-liveterm.vercel.app"><p>Terminal</p></a>
            <Link href='/about'><a><p>About</p></a></Link>
        </nav>
    );
}

function NavbarMobile() {
    return (
        <div className={styles.container}>
            <Linksinbuttons/>
        </div>
    );
}

export default NavbarMobile;
