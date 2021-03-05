import Link from 'next/link';
import { useState } from 'react';

import styles from '../styles/components/SideBar.module.css';

interface SideBArProps {
    active: 'home' | 'rank';
}

export function SideBar({ active }: SideBArProps) {
    const [ isSideBarShown, setisSideBarShown ] = useState(false);
    
    function toggleSidebar() {
        setisSideBarShown(!isSideBarShown)
    }

    return(
        <>
            <div className={styles.container} style={{left: (isSideBarShown)? '0':'-100px'}}>
                <div className={styles.logo} onClick={toggleSidebar} >
                    <img src="/logomini.svg" alt="move.it" />
                </div>
                
                <div className={styles.links}>
                    <Link href="/">
                        <a data-active={(active === 'home') ? 'true':'false'}>
                            <div className={styles.hover} />

                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12L16 2.66663L28 12V26.6666C28 27.3739 27.719 28.0522 27.219 28.5522C26.7189 29.0523 26.0406 29.3333 25.3333 29.3333H6.66667C5.95942 29.3333 5.28115 29.0523 4.78105 28.5522C4.28095 28.0522 4 27.3739 4 26.6666V12Z" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 29.3333V16H20V29.3333" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </Link>

                    <Link href="/rank">
                        <a data-active={(active === 'rank') ? 'true':'false'}>
                            <div className={styles.hover} />

                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.0001 19.9999C21.1547 19.9999 25.3334 15.8212 25.3334 10.6666C25.3334 5.51193 21.1547 1.33325 16.0001 1.33325C10.8454 1.33325 6.66675 5.51193 6.66675 10.6666C6.66675 15.8212 10.8454 19.9999 16.0001 19.9999Z" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.9466 18.5199L9.33325 30.6666L15.9999 26.6666L22.6666 30.6666L21.0533 18.5066" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </Link>
                
                    <Link href="/logout">
                        <a data-active={(active === 'rank') ? 'true':'false'}>
                            <div className={styles.hover} />

                            <p>Sair</p>
                        </a>
                    </Link>
                </div>
            </div>
            
            <div className={styles.menuIcon} onClick={toggleSidebar} style={{bottom: (isSideBarShown)? '-100px':'0'}} >
                    <div className={styles.iconbar} />
                    <div className={styles.iconbar} />
                    <div className={styles.iconbar} />
            </div>
        </>
    );
}