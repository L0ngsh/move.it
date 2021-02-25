import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';

import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const { currentXp, xpToNextLevel } = useContext(ChallengesContext);
    
    const percentXp = Math.round((currentXp * 100) / xpToNextLevel);

    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentXp}%` }} />
            
                <span className={styles.currentXp} style={{ left: `${percentXp}%` }}>{currentXp} xp</span>
            </div>
            <span>{xpToNextLevel} xp</span>
        </header>
    );
}