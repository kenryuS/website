import Link from 'next/link'
import styles from '../styles/navbar.module.css'

function Linksinbuttons() {
    return (
        <nav className={styles.navi}>
            <Link href='/'><a>Home</a></Link>
            <Link href='/blog'><a>Blogs</a></Link>
            <a href="https://kenryu-liveterm.vercel.app">Terminal</a>
            <Link href='/about'><a>About</a></Link>
        </nav>
    );
}

function HomeButton() {
    return (
        <nav className={styles.bannerImage}>
        <Link href='/'>
            <a>
                <img src="/icon.jpeg" className={styles.banneraImage}/>
                <h2>kenryuS</h2>
            </a>
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
