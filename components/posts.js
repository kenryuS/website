import Link from "next/link";
import styles from "../styles/postcard.module.css"

export default function Post({post}) {
    return (
        <div className={styles.card}>
            <small>Posted on {post.frontmatter.date}</small>
            <h3>{post.frontmatter.title}</h3>
            <p>{post.frontmatter.preview}</p>

            <Link href={`/blog/${post.slug}`}>
                <button>Read More</button>
            </Link>
        </div>
    )
}