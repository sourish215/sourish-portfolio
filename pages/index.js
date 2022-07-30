import Head from 'next/head'
import Image from 'next/image'
import Intro from '../src/components/Intro'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <Intro />
    </div>
  )
}
