import styles from '../styles/footer.module.css'

export default function Footer() {
    return (
        <div className={styles.cont}>
            <footer>
            <div className={styles.spacerTop}></div>
            <p>Created by kenryuS with Next.js</p>
            <div className={styles.spacerBottom}></div>
            </footer>
        </div>
    )
}