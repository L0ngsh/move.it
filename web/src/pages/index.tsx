import Head from 'next/head';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdow";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { CoutndownProvider } from '../contexts/CountdownContexts';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <div className={styles.container}>
        <ExperienceBar />
        
        <CoutndownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
                <ChallengeBox />
            </div>
          </section>
        </CoutndownProvider>
      </div>
    </>
  )
}
