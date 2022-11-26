import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home(props: any) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <p className={styles.description}>
                    Your NODE_OPTIONS variable is
                    <code className={styles.code}>{JSON.stringify(props.value)}</code>
                </p>

            </main>
        </div>
    )
}

export function getServerSideProps() {
    return {
        props: {
            value: process.env.NODE_OPTIONS ?? null
        }
    }
}
