import Head from 'next/head'
import styles from '../styles/home.module.css'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/posts'
import Link from 'next/link'

const sortdiaryblog = (a, b) => {
    return new Date(b.diarymetadata.date) - new Date(a.diarymetadata.date)
}
const sortaplifeblog = (a, b) => {
    return new Date(b.aplifemetadata.date) - new Date(a.aplifemetadata.date)
}

export default function Home({diarypost, aplifepost}) {
  return (
    <div className={styles.container}>
        <Head>
            <title>kenryuS Website</title>
            <meta name="description" content="kenryuS Website" />
            <link rel="icon" href="/icon.jpeg" />
        </Head>

        <main className={styles.mainContent}>
            <h1 className={styles.title}>
                Welcome to <a href='https://github.com/kenryuS'>kenryuS</a> website!
            </h1>

            <p className={styles.description}>
                This is the website of kenryuS.
            </p>
            <h2>Latest Diary Entry</h2>
            <div className={styles.postHome}>
                <small>Posted on {diarypost.diarymetadata.date}</small>
                <h3>{diarypost.diarymetadata.title}</h3>
                <p>{diarypost.diarymetadata.preview}</p>
                <Link href={`/blog/diary/${diarypost.diaryslug}`}>
                    <a>Read More </a>
                </Link>
            </div> 
            <h2>Latest AP Life Entry</h2>
            <div className={styles.postHome}>
                <small>Posted on {aplifepost.aplifemetadata.date}</small>
                <h3>{aplifepost.aplifemetadata.title}</h3>
                <p>{aplifepost.aplifemetadata.preview}</p>
                <Link href={`/blog/aplife/${aplifepost.aplifeslug}`}>
                    <a>Read More </a>
                </Link>
            </div> 
        </main>
    </div>
  )
}

export async function getStaticProps() {
    const diaryfiles = fs.readdirSync(path.join('posts/diary'));

    const diaryposts = diaryfiles.map((filename) => {
        const diaryslug = filename.replace('.mdx', '');
    const diarymdmeta = fs.readFileSync(path.join('posts/diary', filename), 'utf-8');
    const {data:diarymetadata} = matter(diarymdmeta);
    return {
        diaryslug,
        diarymetadata
    };
    });
    
    const aplifefiles = fs.readdirSync(path.join('posts/aplife'));

    const aplifeposts = aplifefiles.map((filename) => {
        const aplifeslug = filename.replace('.mdx', '');
    const aplifemdmeta = fs.readFileSync(path.join('posts/aplife', filename), 'utf-8');
    const {data:aplifemetadata} = matter(aplifemdmeta);
    return {
        aplifeslug,
        aplifemetadata
    };
    });

    return {
        props: {
            diarypost: (diaryposts.sort(sortdiaryblog))[0],
            aplifepost: (aplifeposts.sort(sortaplifeblog))[0]
        }
    }
}
