import Head from 'next/head'
import styles from "../styles/home.module.css"
import aboutPageStyle from "../styles/aboutPage.module.css"
import axios from 'axios';
import React from 'react'
import * as DOMPurify from 'isomorphic-dompurify'
import {marked} from 'marked'
import TheSEO from '../components/seo';

export default function about({mdData}) {
    let content = DOMPurify.sanitize(marked.parse(mdData));
    return (
        <div className={styles.container}>
            <Head>
                <title>kenryuS: About</title>
                <link rel="icon" href="/icon.jpeg" />
            </Head>

            <TheSEO title="kenryuS Website - About" description="About page of kenryuS website" currentURL="/about" />

            <main className={styles.mainContent}>
                <h1 className={styles.title}>
                    About This Website:
                </h1>

                <p className={styles.description}>
                    This is <a href="https://github.com/kenryuS">kenryuS</a> website hosted with vercel and next.js.
                </p>

                <h3>About Myself:</h3>
                <div className={aboutPageStyle.prestyle} dangerouslySetInnerHTML={{__html: content}}/>
            </main>
        </div>
    );
}

export async function getServerSideProps({req, res}) {
    const {data : markdownData} = await axios.get('https://raw.githubusercontent.com/kenryuS/kenryuS/main/README.md');
    //console.log(String.raw`${markdownData}`);

    return {
        props: {
            mdData : markdownData.toString()
        }
    }
}
