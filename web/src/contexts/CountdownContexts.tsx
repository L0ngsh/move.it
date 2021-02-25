import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContexts";

interface CountdownContextsData {
    active: boolean;
    hasFinisehd: boolean;
    minutes: number;
    seconds: number;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownProvider {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextsData);

let countdownTimeout: NodeJS.Timeout;

export function CoutndownProvider({ children } : CountdownProvider) {
    const { startNewChallenge } = useContext(ChallengesContext)
    
    const [time, setTime] = useState(0.1 * 60);
    const [active, setActive] = useState(false);
    const [hasFinisehd, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        setActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setActive(false);
        setHasFinished(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if (active && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if(active && time === 0) {
            setHasFinished(true);
            setActive(false);
        
            startNewChallenge();
        }
    }, [active, time]);

    return (
        <CountdownContext.Provider value={{
            active,
            hasFinisehd,
            minutes,
            seconds,
            startCountdown,
            resetCountdown,
        }}>
            { children }
        </CountdownContext.Provider>
    );
}