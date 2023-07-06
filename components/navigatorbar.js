import Link from 'next/link'
import styles from '../styles/navbar.module.css'

function Linksinbuttons() {
    return (
        <nav className={styles.navi}>
            <Link href='/'>Home</Link>
            <Link href='/blog'>Blogs</Link>
            <Link href='/toOther'>Other</Link>
            <Link href='/about'>About</Link>
        </nav>
    );
}

function HomeButton() {
    return (
        <nav className={styles.bannerImage}>
        <Link href='/'>
                <img src="/icon.jpeg" alt='Page Icon' className={styles.banneraImage}/>
                <h2>kenryuS</h2>
        </Link>
        </nav>
    );
}

function Navbar() {
    return (
        <div className={styles.container}>
        <div className={styles.topspace}></div>
            <div className={styles.bannerBar}>
                <HomeButton/>
                <Linksinbuttons/>
            </div>
        </div>
    );
}

export default Navbar;
