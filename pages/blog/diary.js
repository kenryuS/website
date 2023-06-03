import Head from 'next/head'
import styles from '../../styles/home.module.css'
import Post from '../../components/posts';
import { getAllPostInfo, sortblog } from '../../components/utils';

export default function blog({post}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>kenryuS Blog</title>
                <meta name="description" content="kenryuS (Kenryu Shibata) Blog - Diary Home" />
                <link rel="icon" href="/icon.jpeg" />
            </Head>

            <main className={styles.mainContent}>
                <h1 className={styles.title}>
                    Welcome to <a href='https://github.com/kenryuS'>kenryuS</a> diary!
                </h1>

                <p className={styles.description}>
                    This is the diary entries of kenryuS. Updates at least once in three days.
                </p>

                <div className={styles.posts}>
                    {post.map((thepost, index) => {
                        return (
                            <Post post={thepost} series={"diary"} key={index}/>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}

export async function getStaticProps() {

    const posts = await getAllPostInfo('diary');

    return {
        props: {
            post: posts.sort(sortblog)
        }
    }
}
