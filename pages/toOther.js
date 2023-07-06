import Head from 'next/head'
import styles from '../styles/home.module.css'
import TheSEO from '../components/seo';

export default function toOther() {
	return (
		<div className={styles.container}>
			<Head>
			    <title>kenryuS Website - Other Pages</title>
			    <link rel="icon" href="/icon.jpeg" />
		    </Head>

			<TheSEO title="kenryuS Website - Other" description="List of links to other webpage Kenryu Shibata created" currentURL="/toOther" />

		    <main className={styles.mainContent}>
			<h1 className={styles.title}>Other Pages</h1>
			<p>The list of website I created.</p>
			<ul>
			<li><a href="https://kenryu-liveterm.vercel.app">kenryuS-Term</a></li>
			<li><a href="https://japan-visitation-record-kenryus.vercel.app/">Japan Visitation Record</a></li>
		    </ul>
		    </main>
		</div>
	);
}
