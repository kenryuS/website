import Head from 'next/head'
import Link from 'next/link';
import { readdirSync } from 'fs';
import styles from '../../styles/home.module.css'
import TheSEO from '../../components/seo';

export default function BlogHome({dirs}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>kenryuS Blog</title>
                <link rel="icon" href="/icon.jpeg" />
            </Head>

            <TheSEO title="kenryuS website - Blog Series List" description="List of blog series in kenryuS Blog" currentURL="/blog" />

            <main className={styles.mainContent}>
                <h1 className={styles.title}>
                    Welcome to <a href='https://github.com/kenryuS'>kenryuS</a> blogs!
                </h1>

                <p className={styles.description}>
                    This page is the list of blog series.
                </p>

                <ul>
                {dirs.map((dir,ind) =>{
                    return(
                        <li key={ind}>
                        <h3>
                        <Link href={'/blog/'+dir}>
                        {dir}
                        </Link>
                        </h3>
                        </li>
                    );
                })}
                </ul>
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const postdirectories = readdirSync("pages/blog/posts", {withFileTypes: true})
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    return {
        props: {dirs:postdirectories}
    };
}
