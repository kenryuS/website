import Head from 'next/head'
import Link from 'next/link';
import styles from '../../styles/home.module.css'
import FloatMenu from '../../components/floatmenu';
import Post from '../../components/posts';
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
                <title>kenryuS Blog</title>
                <meta name="description" content="kenryuS (Kenryu Shibata) Blog Home" />
                <link rel="icon" href="/icon.jpeg" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href='https://github.com/kenryuS'>kenryuS</a> blog!
                </h1>

                <p className={styles.description}>
                    This is the blog page of kenryuS.<br/><b style={{color: 'rgb(194, 199, 44)'}}>Warning: This website is under construction!</b>
                </p>

                <div className={styles.posts}>
                    {post.map((thepost, index) => {
                        return (
                            <Post post={thepost} key={index}/>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}

export async function getStaticProps() {

    const files = fs.readdirSync(path.join('posts'));
    
    const posts = files.map((filename) => {
        const slug = filename.replace('.mdx', '');
        const mdmeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
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
