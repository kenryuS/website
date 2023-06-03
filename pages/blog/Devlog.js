import Head from 'next/head'
import styles from '../../styles/home.module.css'
import Post from '../../components/posts';
import { getAllPostInfo, sortblog } from '../../components/utils';

const seriesname = "Devlog";

export default function blog({post}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>kenryuS {seriesname}</title>
                <meta name="description" content="kenryuS (Kenryu Shibata) Blog - Devlog Home" />
                <link rel="icon" href="/icon.jpeg" />
            </Head>

            <main className={styles.mainContent}>
                <h1 className={styles.title}>
                    Welcome to <a href='https://github.com/kenryuS'>kenryuS</a> Devlog!
                </h1>

                <p className={styles.description}>
                    This is the blog posts of mostly programming related topics.
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
