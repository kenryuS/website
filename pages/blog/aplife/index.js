import Head from 'next/head'
import Link from 'next/link';
import styles from '../../../styles/home.module.css'
import Post from '../../../components/posts';
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const sortblog = (a, b) => {
    return new Date(b.metadata.date) - new Date(a.metadata.date)
}

export default function blog({post}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>kenryuS AP Life Blog</title>
                <meta name="description" content="kenryuS (Kenryu Shibata) Blog - AP Life Home" />
                <link rel="icon" href="/icon.jpeg" />
            </Head>

            <main className={styles.mainContent}>
                <h1 className={styles.title}>
                    Welcome to <a href='https://github.com/kenryuS'>kenryuS</a> AP Life Blog!
                </h1>

                <p className={styles.description}>
                    This is the blog page of kenryuS life in AP course(s).
                </p>

                <div className={styles.posts}>
                    {post.map((thepost, index) => {
                        return (
                            <Post post={thepost} series={"aplife"} key={index}/>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}

export async function getStaticProps() {

    const files = fs.readdirSync(path.join('posts/aplife'));

    const posts = files.map((filename) => {
        const slug = filename.replace('.mdx', '');
        const mdmeta = fs.readFileSync(path.join('posts/aplife', filename), 'utf-8');
        const {data:metadata} = matter(mdmeta);
        return {
            slug,
            metadata
        };
    });

    return {
        props: {
            post: posts.sort(sortblog)
        }
    }
}
