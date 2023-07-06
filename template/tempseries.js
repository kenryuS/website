import Head from 'next/head'
import styles from '../../styles/home.module.css'
import Post from '../../components/posts';
import { getAllPostInfo, sortblog } from '../../components/utils';
import TheSEO from '../components/seo';

const seriesname = "seriesname";

export default function blog({post}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>kenryuS AP Life Blog</title>
                <link rel="icon" href="/icon.jpeg" />
            </Head>

            <TheSEO title="kenryuS Blog <seriesname> Home" description="Blog list of <seriesname> in kenryuS website" currentURL="/blog/seriesname" />

            <main className={styles.mainContent}>
                <h1 className={styles.title}>
                    Welcome to <a href='https://github.com/kenryuS'>kenryuS</a> Blog!
                </h1>

                <p className={styles.description}>
                    Description
                </p>

                <div className={styles.posts}>
                    {post.map((thepost, index) => {
                        return (
                            <Post post={thepost} series={seriesname} key={index}/>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}

export async function getStaticProps() {

    const posts = await getAllPostInfo(seriesname);

    return {
        props: {
            post: posts.sort(sortblog)
        }
    }
}
