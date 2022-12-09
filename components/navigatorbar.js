import Link from 'next/link'
import styles from '../styles/navbar.module.css'

function Linksinbuttons() {
    return (
        <nav className={styles.navi}>
            <Link href='/'><a>Home</a></Link>
            <Link href='/blog'><a>Blog</a></Link>
            <a href="https://kenryu-liveterm.vercel.app">Terminal</a>
            <Link href='/about'><a>About Website</a></Link>
        </nav>
    );
}

const getWindowSize = () => {
    if (typeof window !== "undefined") {
        const { innerWidth: width, innerHeight: height } = window;
        return {width, height};
    }
};

function Navbar() {
    //console.log(getWindowSize());
    return (
        <div className={styles.container}>
            <div style={{'marginTop' : '1vw'}}></div>
            <div>
                <div className={styles.bannerBar}>
                    <div className={styles.bannerImage}>
	            <Link href='/'>
                        <a>
                            <div>
                                <img src="/icon.jpeg" className={styles.banneraImage}/>
                                <h2>kenryuS</h2>
                            </div>
                        </a>
	            </Link>
	            </div>
                    <Linksinbuttons/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
