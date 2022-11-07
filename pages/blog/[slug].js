import fs from 'fs'
import path from 'path'
import matter from "gray-matter";
import dynamic from 'next/dynamic';
import Link from "next/link";
import styles from '../../styles/home.module.css'

export default function PostPage ({fm, sl, cont}) {
    let title = fm.title;
    let date = fm.date;
    let bcont = cont;
    let mdx;
    
    if (typeof window) {
        const Mdx = dynamic(() => import(`../../posts/${sl + '.mdx'}`));
        mdx = <Mdx/>
    } {/*else {
        const comp = require(`../../posts/${sl + '.mdx'}`).default;
        const ReactDOMServer = require("react-dom/server");

        const ssr = ReactDOMServer.renderToString(<comp/>) as string;
        mdx = <div dangerouslySetInnerHTML={{__html: ssr}}/>;
    }*/}
    return (
        <div className={styles.container}>
            <Link href='/blog'>
                <button>Go Back</button>
            </Link>
            <div>
                {mdx}
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'));

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
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8');
    
    const {data: frontmatter, content} = matter(markdownWithMeta);

    return {
        props: {
            fm: frontmatter,
            sl: slug,
            cont: content
        },
    };
}