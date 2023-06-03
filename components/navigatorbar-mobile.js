import Link from 'next/link'
import styles from '../styles/navbar-mobile.module.css'

function Linksinbuttons() {
    return (
        <nav className={styles.navi}>
            <Link href='/'><p>Home</p></Link>
            <Link href='/blog'><p>Blogs</p></Link>
            <Link href='/toOther'><p>Other</p></Link>
            <Link href='/about'><p>About</p></Link>
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
