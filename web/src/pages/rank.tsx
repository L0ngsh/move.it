import { RankWidget } from "../components/RankWidget";
import { SideBar } from "../components/Sidebar";

import styles from '../styles/pages/Rank.module.css'

export default function RankPage() {
    return(
        <>
            <SideBar {...{active:'rank'}} />
        
            <div className={styles.container}>
                <strong className={styles.title}>Leaderboard</strong>
            
                <div>
                    <RankWidget {...{
                        username: 'L0ngsh',
                        challengesCompleted: 0,
                        totalXp: 0,
                        level: 1,
                        rank: 1,}
                    }/>

                    <RankWidget {...{
                        username: 'L0ngsh',
                        challengesCompleted: 0,
                        totalXp: 0,
                        level: 1,
                        rank: 1,}
                    }/>

                    <RankWidget {...{
                        username: 'L0ngsh',
                        challengesCompleted: 0,
                        totalXp: 0,
                        level: 1,
                        rank: 1,}
                    }/>

                    <RankWidget {...{
                        username: 'L0ngsh',
                        challengesCompleted: 0,
                        totalXp: 0,
                        level: 1,
                        rank: 1,}
                    }/>                  
                </div>
            </div>
        </>
    );
}