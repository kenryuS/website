import fs from 'fs'
import path from 'path'
import matter from "gray-matter";
import dynamic from 'next/dynamic';
import Link from "next/link";
import Head from "next/head";
import {serialize} from 'next-mdx-remote/serialize'
import {MDXRemote} from 'next-mdx-remote'
import SyntaxHighlighter from 'react-syntax-highlighter'
import styles from '../../../styles/home.module.css'
import mdstyles from '../../../styles/markdown.module.css'

export default function PostPage ({frontMatter: {title, date}, mdxSource}) {    
    return (
        <div className={styles.container}>
            <Head>
                <title>{"kenryuS AP Life Blog - " + title}</title>
                <meta name="description" content="kenryuS(Kenryu Shibata) AP Life Blog post"/>
                <link rel="icon" href="/icon.jpeg"/>
            </Head>
            <div className={mdstyles.Article}>
                <h1>{title}</h1>
                <h6>Last updated: {date}</h6>
                <MDXRemote {...mdxSource} components={{SyntaxHighlighter}}/>
            <Link href='/blog/aplife' passHref>
	        <div className={mdstyles.goBackButton}>
	            <a>Go Back</a>
                </div>
            </Link>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts/aplife'));

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.mdx', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {slug}}) {
    const markdownWithMeta = fs.readFileSync(path.join('posts/aplife', slug + '.mdx'), 'utf-8');
    const {data: frontMatter, content } = matter(markdownWithMeta);
    const mdxSource = await serialize(content);
    return {
        props: {
            slug,
            frontMatter,
            mdxSource
        },
    };
}
