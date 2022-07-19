import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={ styles.container }>
        {/*<div className={ styles.imageWrapper }>*/}
        {/*    <Image src="/assets/home/background-home-desktop.jpg" width={1440} height={900} layout="fill"/>*/}
        {/*</div>*/}

      <div className={ styles.main }>
          <div className={ styles.card }>
              <h5>So, you want to travel to</h5>
              <h1>Space</h1>
              <p>Let’s face it; if you want to go to space, you might as well genuinely go to
              outer space and not hover kind of on the edge of it. Well sit back, and relax
              because we’ll give you a truly out of this world experience!</p>
          </div>
          <button className={ styles["button-main"] }>Explore</button>
      </div>
    </div>
  )
}
