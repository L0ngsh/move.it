import styles from '../styles/components/RankWidget.module.css';

interface RankProps {
    username: string;
    challengesCompleted: number;
    totalXp: number;
    level: number;
    rank: number;
}

export function RankWidget(userProps: RankProps) {
    return(
        <div className={styles.container}>
            <div className={styles.position}>
                {userProps.rank}
            </div>

            <div className={styles.userProps}>
                <div className={styles.profileData}>
                    <img src={`https://github.com/${userProps.username}.png`} alt={`${userProps.username}.png`}/>
                
                    <div>
                        <strong>{userProps.username}</strong>
                        <div>
                            <img src="/icons/level.svg" alt="level.svg" />
                            <span>Level {userProps.level}</span>    
                        </div>
                    </div>
                </div>
            
                <div>
                    <p>
                        <span>{userProps.challengesCompleted}</span> Desafios
                    </p>
                </div>

                <div>
                    <p>
                        <span>{userProps.totalXp}</span> xp
                    </p>
                </div>

            </div>
        </div>
    );
}