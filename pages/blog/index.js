import Head from 'next/head'
import Link from 'next/link';
import styles from '../../styles/home.module.css'

export default function blogHome() {
    return (
        <div className={styles.container}>
            <Head>
                <title>kenryuS Blog</title>
                <meta name="description" content="kenryuS (Kenryu Shibata) Blog Home" />
                <link rel="icon" href="/icon.jpeg" />
            </Head>

            <div className={styles.mainContent}>
                <h1 className={styles.title}>
                    Welcome to <a href='https://github.com/kenryuS'>kenryuS</a> blogs!
                </h1>

                <p className={styles.description}>
                    This page is the list of blog series.
                </p>

                <ul>
                <li>
                <Link href='/blog/diary' passHref>
                    <h3><a>Diary</a></h3>
                </Link>
                </li>

                <li>
                <Link href='/blog/aplife' passHref>
                    <h3><a>AP Life Blog</a></h3>
                </Link>
                </li>
                </ul>
            </div>
        </div>
    );
}
