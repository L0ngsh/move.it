import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdow";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { SideBar } from '../components/Sidebar';
import { ChallengesProvider } from '../contexts/ChallengesContexts';
import { CoutndownProvider } from '../contexts/CountdownContexts';

import { api } from '../api';
import excuteQuery from '../db';

import styles from '../styles/pages/Home.module.css';

interface UserProps {
  githubId: Number;
  githubName: String;
  level: Number;
  currentXp: Number;
  totalXp: Number;
  challengesCompleted: Number;
}

interface HomeProps {
  success: boolean;
  user:UserProps;
}

export default function Home(props: HomeProps) {
  const router = useRouter();
  
  useEffect(() => {
    if (!props.success) {
      router.push(`${process.env.baseURL}/logout`);
    }
  }, []);
  
  return (
    <ChallengesProvider name={props.user.githubName} id={props.user.githubId} totalXp={props.user.totalXp} level={props.user.level} currentXp={props.user.currentXp} challengesCompleted={props.user.challengesCompleted}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      
      <SideBar {...{active: 'home'}} />

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
  const { id, token } = ctx.req.cookies;
  
  const props = {success: true, user: {
    githubId: null,
    githubName: null,
    level: null,
    currentXp: null,
    totalXp: null,
    challengesCompleted: null
  }};
  
  if(!id || !token) {
    props.success = false;
    return { props };
  }

  const verifyResponse = await api.post('verifyuser', {token, id});

  if(!verifyResponse.data.success) {
    props.success = false;
    return { props };
  }

  const query = "SELECT * FROM users WHERE githubId = ?";
  const values = [id];

  const getUserData = await excuteQuery({ query, values });

  const { githubId, githubName, level, currentXp, totalXp, challengesCompleted } = getUserData[0];

  props.user = {
    githubId,
    githubName,
    level,
    currentXp,
    totalXp,
    challengesCompleted
  }

  return { props }; 
}