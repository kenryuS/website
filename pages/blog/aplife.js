import Head from 'next/head'
import styles from '../../styles/home.module.css'
import Post from '../../components/posts';
import { getAllPostInfo, sortblog } from '../../components/utils';
import TheSEO from '../../components/seo';

export default function blog({post}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>kenryuS AP Life Blog</title>
                <link rel="icon" href="/icon.jpeg" />
            </Head>

            <TheSEO title="kenryuS Blog AP Life Home" description="Blog list of AP Life in kenryuS website" currentURL="/blog/aplife" />

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

    const posts = await getAllPostInfo('aplife');

    return {
        props: {
            post: posts.sort(sortblog)
        }
    }
}
