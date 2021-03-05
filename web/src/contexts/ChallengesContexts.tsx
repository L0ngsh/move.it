import { createContext, ReactNode, useEffect, useState } from 'react';

import { LevelUpModal } from '../components/LevelUpModal';

import { api } from '../api';
import challenges from '../../challenges.json';
import { formatWithValidation } from 'next/dist/next-server/lib/utils';

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
    name: String;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
    closeLevelUpModal: () => void;
}

interface ChallengesProviderProp {
    children: ReactNode;
    level: Number;
    currentXp: Number;
    challengesCompleted: Number;
    totalXp: Number;
    id: Number;
    name: String;
}

export const ChallengesContext = createContext({} as ChallengesConxtsData);

export function ChallengesProvider({ children, ...rest } : ChallengesProviderProp) {
    const [ level, setLevel ] = useState(Number(rest.level));
    const [ currentXp, setCurrentXp ] = useState(Number(rest.currentXp));
    const [ totalXp, setTotalXp ] = useState(Number(rest.totalXp));
    const [ challengesCompleted, setChallengesCompleted ] = useState(Number(rest.challengesCompleted));
    const [ isLevelUpModalOpen, setisLevelUpModalOpen ] = useState(false);
    
    const name = rest.name;

    const [activeChallenge, setActiveChallenge] = useState(null);

    const xpToNextLevel = Math.pow((level + 1) * 4, 2);

    useEffect(() => {
        const updateUser = async () => {
            await api.post('updateuser', {
                level,
                currentXp,
                totalXp,
                challengesCompleted,
                id: rest.id
            });
        }

        updateUser();
    }, [level, currentXp, totalXp, challengesCompleted])

    function levelUp() {
        setLevel(level + 1);
    
        setisLevelUpModalOpen(true);
    }

    function closeLevelUpModal() {
        setisLevelUpModalOpen(false);
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

        setTotalXp(totalXp + amount);
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
                completeChallenge,
                closeLevelUpModal,
                name,
            }}
        >
            {children}
            {(isLevelUpModalOpen) && <LevelUpModal /> }
        </ChallengesContext.Provider>
    )
}