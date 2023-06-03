import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const sortblog = (a, b) => {
    return new Date(b.metadata.date) - new Date(a.metadata.date)
}

export async function getAllPostInfo(series) {
    const allposts = fs.readdirSync(path.join(process.cwd(), `pages/blog/posts/${series}`));

    const posts = allposts.map((filename) => {
        const slug = filename.replace('.mdx', '');
        const mdmeta = fs.readFileSync(path.join(process.cwd(), `pages/blog/posts/${series}`, filename), 'utf-8');
        const {data:metadata} = matter(mdmeta);
        return {slug,metadata};
    });

    return posts;
}