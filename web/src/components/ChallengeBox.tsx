import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import { CountdownContext } from '../contexts/CountdownContexts';

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    return (
        <div className={styles.challengeBoxContainer}>
            {(activeChallenge)? (
                <div className={styles.challengesActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>

                        <p>
                            {activeChallenge.description}
                        </p>
                    </main>

                    <footer>
                        <button type="button" className={styles.challengeFailedButton} onClick={() => {resetChallenge(); resetCountdown();}}>Falhei</button>
                        <button type="button" className={styles.challengeSucceededButton} onClick={() => {completeChallenge(); resetCountdown();}} >Completei</button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengsNotActive}>
                    <strong>Finalize um ciclo para receber um desafios</strong>
                
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando desafios.
                    </p>
                </div>
            )}
        </div>
    );
}