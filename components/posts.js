import Link from "next/link";
import styles from "../styles/postcard.module.css"

export default function Post({post}) {
    return (
        <div className={styles.card}>
            <small>Posted on {post.metadata.date}</small>
            <h3>{post.metadata.title}</h3>
            <p>{post.metadata.preview}</p>

            <Link href={`/blog/${post.slug}`}>
                <a>Read More</a>
            </Link>
        </div>
    )
}
