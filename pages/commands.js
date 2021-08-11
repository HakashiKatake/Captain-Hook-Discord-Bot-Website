import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Command() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Captain Hook - A fun Discord Bot</title>
      {/* <link rel="shortcut icon" href="/assets/logo.png" type="image/x-icon" /> */}
      </Head>
      <header className={styles.header}>
        <h1 className={styles.title}>Captain Hook - Fun Discord Bot</h1>
        <Image 
        src="/assets/logo.png"
        className={styles.borderCir}
        width="144"
        height="144"
        quality="100"
        />
        {/* https://discord.com/api/oauth2/authorize?client_id=756715507306201130&permissions=8&scope=bot */}
        <p className={styles.desc}>
          Commands are as follows
        <ul>
          <li><a href="https://discord.com/api/oauth2/authorize?client_id=756715507306201130&permissions=8&scope=bot" target="_blank">It's <b>Captain Hook 🏴‍☠️</b> invite me now</a></li>
          <br/>
          <li><a href="https://discord.gg/9Ef8fq5sTA" target="_blank">Join our <b>Support</b> server</a></li>
        </ul>
        </p>
      </header>
    </div>
  )
}
