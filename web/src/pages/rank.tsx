import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { RankWidget } from "../components/RankWidget";
import { SideBar } from "../components/Sidebar";

import { api } from '../api';
import excuteQuery from '../db';

import styles from '../styles/pages/Rank.module.css'

export default function RankPage({ rankList, success }) {
    const router = useRouter()
    
    useEffect(() => {
        if (!success) {
            router.push('/logout');
        }
    });
    
    return(
        <>
            <Head>
                <title>Leaderboard | move.it</title>
            </Head>

            <SideBar {...{active:'rank'}} />
        
            <div className={styles.container}>
                <strong className={styles.title}>Leaderboard</strong>
            
                <div>
                    {rankList.map(user => (
                        <RankWidget {...{
                            username: user.name,
                            challengesCompleted: user.challengesCompleted,
                            totalXp: user.totalXp,
                            level: user.level,
                            rank: user.rank}
                        }/>               
                    ))}
                </div>
            </div>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { id, token } = ctx.req.cookies;
    
    const props = {
        success: true,
        rankList: [],
    }
    
    if(!id || !token) {
        props.success = false;
        return { props };
    }
    
    const verifyResponse = await api.post('verifyuser', {token, id});

    if(!verifyResponse.data.success) {
        props.success = false;
        return { props };
    }

    const query = "SELECT *, @curRank := @curRank + 1 AS rank FROM users p, (SELECT @curRank := 0) r ORDER BY totalXp DESC LIMIT 10";

    const response:any = await excuteQuery({ query, values: [] });

    response.forEach(user => {
        let { githubName, level, totalXp, challengesCompleted, rank } = user;
        let userData = { name: githubName,
            level,
            totalXp,
            challengesCompleted,
            rank
        };

        props.rankList.push(userData);
    });

    return { props };
}