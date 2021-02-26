import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import challenges from '../../challenges.json';

interface Challenge {
    type: 'body' | 'eye';
    description: string; 
    amount: number;
}

interface ChallengesConxtsData {
    level: number;
    currentXp: number;
    challengesCompleted: number
    activeChallenge: Challenge;
    xpToNextLevel: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
}

interface ChallengesProviderProp {
    children: ReactNode;
    level: number;
    currentXp: number;
    challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesConxtsData);

export function ChallengesProvider({ children, ...rest } : ChallengesProviderProp) {
    const [ level, setLevel ] = useState(rest.level ?? 1);
    const [ currentXp, setCurrentXp ] = useState(rest.currentXp ?? 0);
    const [ challengesCompleted, setChallengesCompleted ] = useState(rest.challengesCompleted ?? 0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const xpToNextLevel = Math.pow((level + 1) * 4, 2);

    useEffect(() => {
        Notification.requestPermission();
    }, []);

    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentXp', String(currentXp));
        Cookies.set('challengesCompleted', String(challengesCompleted));
    }, [level, currentXp, challengesCompleted]);

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
    
        setActiveChallenge(challenge);    
    
        new Audio('/notification.mp3').play();

        if (Notification.permission === 'granted') {
            const notification = new Notification('Novo Desafio', {
                body: `Valendo ${challenge.amount}xp!`
            });
            notification.onclick = () => window.focus();
        }
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    function completeChallenge() {
        if (!activeChallenge) {
            return;
        }   
    
        const { amount } = activeChallenge;
    
        let finalExperience = currentXp + amount;
    
        if (finalExperience > xpToNextLevel) {
            finalExperience -= xpToNextLevel;
            levelUp();
        }

        setCurrentXp(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
    }

    return (
        <ChallengesContext.Provider
            value={{
                level,
                levelUp,
                currentXp,
                challengesCompleted,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                xpToNextLevel,
                completeChallenge
            }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}