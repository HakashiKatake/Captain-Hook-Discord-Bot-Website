import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Command() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Captain Hook - A fun Discord Bot</title>
      <link rel="shortcut icon" href="/assets/logo.png" type="image/x-icon" />
      <meta name="description" content="A cool discord bot for fun, memes, calculator, games, info, economy, utility, image and many more." />
      <meta
          property="og:image"
          content={`/assets/logo.png`}
        />
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
          It&apos;s <b>Captain Hook</b> here. I am here to help you with commands. You can find my characteristics below: 
        <ul>
          <li>You can provoke me with <b><code>$</code>(Dollar Sign)</b></li>
          <br/>
          <li>I am here to have fun on your <b>Discord</b> Server</li><br/>
          <Image
          src="/assets/cmd.png"
          width="300"
          height="300"

          /><br/><br/>
          <li><Link href="/">
          <a className="command">Back <b>Home</b>&rarr;</a>
        </Link></li>
        </ul>

        
        </p>
      </header>
    </div>

  )
}
