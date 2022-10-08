import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function blog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>kenryuS Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://github.com/kenryuS'>kenryuS</a> blog!
        </h1>

        <p className={styles.description}>
          This is the blog page of kenryuS.<br/><b style={{color: 'rgb(194, 199, 44)'}}>Warning: This website is under construction!</b>
        </p>

	<ul className={styles.jumper}>
	  <a href="/"><li>Home Page</li></a>
    <a href="/blog"><li>Blog Home</li></a>
    <a href="/about"><li>About</li></a>
	</ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
