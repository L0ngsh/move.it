import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level, name } = useContext(ChallengesContext);
    
    return(
        <div className={styles.profileContainer}>
            <img src={`https://github.com/${name}.png`} alt={`${name}.png`}/>
            <div>
                <strong>{name}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}