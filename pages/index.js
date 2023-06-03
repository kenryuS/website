import Head from 'next/head';
import styles from '../styles/home.module.css';
import { getAllPostInfo,sortblog } from '../components/utils';
import Post from '../components/posts';

export default function Home({latestPosts}) {
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

            <div className={styles.theLatestPosts}>
            {latestPosts.map((post, index) => {
                return (
                    <div key={index}>
                        <h3>Latest {post[2]} Post</h3>
                        <Post post={post[0]} series={post[1]} />
                    </div>
                );
            })}
            </div>
        </main>
    </div>
  )
}

export async function getStaticProps() {
    const diaryposts = await getAllPostInfo('diary');
    const aplifeposts = await getAllPostInfo('aplife');
    const devlogposts = await getAllPostInfo('Devlog');

    const diarypost = (diaryposts.sort(sortblog))[0];
    const aplifepost = (aplifeposts.sort(sortblog))[0];
    const devlogpost = (devlogposts.sort(sortblog))[0];

    // latest post, series directory name, series name
    const latestPosts = [
        [diarypost, "diary", "Diary"],
        [aplifepost, "aplife", "AP Life"],
        [devlogpost, "Devlog", "Devlog"],
    ];

    return {
        props: {
            latestPosts: latestPosts,
        }
    }
}
