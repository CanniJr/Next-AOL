import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AOL - 2021</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>AOL</h1>
    </div>
  )
}
