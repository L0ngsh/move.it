import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdow";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { ChallengesProvider } from '../contexts/ChallengesContexts';
import { CoutndownProvider } from '../contexts/CountdownContexts';

import styles from '../styles/pages/Home.module.css';

interface HomeProps {
  level: number;
  currentXp: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider level={props.level} currentXp={props.currentXp} challengesCompleted={props.challengesCompleted}>
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
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {
  const { level, currentXp, challengesCompleted } = ctx.req.cookies;
  
  const user = {
    level: Number(level),
    currentXp: Number(currentXp),
    challengesCompleted: Number(challengesCompleted),
  }
  
  return {
    props: user
  }
}