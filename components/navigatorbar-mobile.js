import Link from 'next/link'
import styles from '../styles/navbar-mobile.module.css'

function Linksinbuttons() {
    return (
        <nav className={styles.navi}>
            <Link href='/'><a><p>Home</p></a></Link>
            <Link href='/blog'><a><p>Blogs</p></a></Link>
            <Link href='/toOther'><a><p>Other</p></a></Link>
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
