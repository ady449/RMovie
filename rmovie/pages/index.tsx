import Head from 'next/head';


import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RMovie</title>
        <meta name="description" content="RMovie" />
        <link rel="icon"  sizes="32x32" href="./favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         XXX
        </h1>
      </main>
    </div>
  );
}
