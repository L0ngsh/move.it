import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContexts';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const { minutes, seconds, active, hasFinisehd, startCountdown, resetCountdown } = useContext(CountdownContext);
    
    const minuteLeftRight = String(minutes).padStart(2, '0');
    const secondLeftRight = String(seconds).padStart(2, '0');

    return(
        <>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeftRight[0]}</span>
                    <span>{minuteLeftRight[1]}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeftRight[0]}</span>
                    <span>{secondLeftRight[1]}</span>
                </div>
            </div>
        
            {(hasFinisehd) ? (
                <button disabled className={styles.countdownButton}>
                    Ciclo encerrado
                </button>
            ): (
                <>
                    {(active)? (
                        <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>
                            Abandonar Ciclo
                            
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.countdownButtonActiveCloseIcon}>
                                <path d="M27 14.41L25.59 13L20 18.59L14.41 13L13 14.41L18.59 20L13 25.59L14.41 27L20 21.41L25.59 27L27 25.59L21.41 20L27 14.41Z"/>
                            </svg>
                        </button>
                    ) : (
                        <button type="button" className={styles.countdownButton} onClick={startCountdown}>
                            Iniciar Ciclo
                        </button>
                    )}
                </>
            )}
        </>
    );
}