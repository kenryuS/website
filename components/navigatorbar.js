import Link from 'next/link'
import styles from '../styles/navbar.module.css'

function Navbar() {
    return (
        <div className={styles.container}>
            <div style={{'marginTop' : '1vw'}}></div>
            <div className={styles.banner}>
                <div>
                <Link href='/'>
                    <a>
                        <div>
                            <img src="/icon.jpeg" className={styles.banneraImage}/>
                            <h1>kenryuS website</h1>
                        </div>
                    </a>
                </Link>
                <nav className={styles.navi}>
                    <Link href='/'><button>Home</button></Link>
                    <Link href='/blog'><button>Blog</button></Link>
                    <button>Test</button>
                    <Link href='/about'><button>About</button></Link>
                </nav>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
