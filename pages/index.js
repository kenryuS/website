import Head from 'next/head'
import styles from '../styles/home.module.css'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/posts'
import Link from 'next/link'

const sortblog = (a, b) => {
    return new Date(b.metadata.date) - new Date(a.metadata.date)
}

export default function Home({post}) {
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
            <div>
                <small>Posted on {post.metadata.date}</small>
                <h3>{post.metadata.title}</h3>
                <p>{post.metadata.preview}</p>
                <Link href={`/blog/diary/${post.slug}`}>
                    <a>Read More </a>
                </Link>
            </div> 
        </main>
    </div>
  )
}

export async function getStaticProps() {
    const files = fs.readdirSync(path.join('posts/diary'));

    const posts = files.map((filename) => {
        const slug = filename.replace('.mdx', '');
    const mdmeta = fs.readFileSync(path.join('posts/diary', filename), 'utf-8');
    const {data:metadata} = matter(mdmeta);
    return {
            slug,
        metadata
    };
    });

    return {
        props: {post: (posts.sort(sortblog))[0]}
    }
}
