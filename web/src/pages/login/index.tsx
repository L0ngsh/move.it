import Head from 'next/head';
import { FormEvent, useEffect, useState } from 'react';

import styles from '../../styles/pages/Login.module.css';

export default function Login(){
    const [ inputTargetValue, setInputTargetValue ] = useState('');
    const [ isButtonActive, setIsButtonActive ] = useState(false);

    function formSubmit(e: FormEvent) {
        e.preventDefault();
    }

    function handleInputChange(e: any) {
        if (e.nativeEvent.data === ' ') {
            return false;
        }
        
        setInputTargetValue(e.target.value)
    }

    useEffect(() => {
        if (inputTargetValue) {
            setIsButtonActive(true);
        } else {
            setIsButtonActive(false);
        }
    }, [inputTargetValue]);

    return(
        <div className={styles.container}>
            <Head>
                <title>Login | move.it</title>
            </Head>


            <section>
                <div className={styles.login}>
                    <div className={styles.logo}>
                        <svg viewBox="0 0 250 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0)">
                            <path d="M107.307 22.0488L103.685 38.6822H94.2484L97.8707 22.0488C98.1546 20.7414 97.99 20.5004 96.6529 20.5004H93.2463C91.9177 20.5004 91.6395 20.7414 91.3585 22.0155C91.3585 22.0155 91.3585 22.0377 91.3585 22.0488L87.7362 38.6822H78.2914L81.9166 22.0488C82.2005 20.7414 82.0358 20.5004 80.6959 20.5004H77.2893C75.9494 20.5004 75.6797 20.7441 75.3959 22.0488L71.7707 38.6822H62.3345L67.8957 13.149H75.5605L76.7755 15.3428C77.4745 14.6247 78.3205 14.0583 79.2586 13.6803C80.1967 13.3023 81.2058 13.1213 82.2204 13.149H84.1763C87.8668 13.149 90.3564 14.714 91.2478 17.3593C92.8971 14.4176 95.2874 13.149 98.1745 13.149H100.133C105.677 13.149 108.496 16.6419 107.307 22.0488Z" attributeName="change"/>
                            <path d="M136.084 22.0487L134.4 29.7824C133.222 35.1893 128.879 38.6821 123.329 38.6821H116.181C110.639 38.6821 107.82 35.1865 108.999 29.7796L110.682 22.0487C111.857 16.6418 116.201 13.1489 121.753 13.1489H128.913C134.443 13.1489 137.265 16.6418 136.084 22.0487ZM126.639 22.0487C126.923 20.7413 126.758 20.5003 125.421 20.5003H122.015C120.675 20.5003 120.405 20.7441 120.121 22.0487L118.435 29.7796C118.151 31.087 118.318 31.328 119.655 31.328H123.062C124.399 31.328 124.672 31.0842 124.956 29.7796L126.639 22.0487Z" attributeName="change"/>
                            <path d="M194.975 20.0156C194.63 21.467 193.796 22.7639 192.607 23.6996L187.801 27.5775C186.649 28.523 185.199 29.0548 183.694 29.0843H177.039L176.889 29.7685C176.605 31.0759 176.77 31.3169 178.11 31.3169H192.508L190.907 38.671H174.624C169.082 38.671 166.263 35.1754 167.441 29.7685L169.125 22.0376C170.303 16.6307 174.646 13.1378 180.196 13.1378H187.361C192.889 13.1489 195.747 16.459 194.975 20.0156ZM185.09 22.0487C185.374 20.7413 185.21 20.5003 183.87 20.5003H180.463C179.129 20.4975 178.845 20.744 178.561 22.0487L177.993 24.7106H183.614C183.866 24.7004 184.108 24.6102 184.303 24.4537C184.497 24.2972 184.634 24.083 184.693 23.8436L185.09 22.0487Z" attributeName="change"/>
                            <path d="M205.583 34.3471C205.061 36.7431 203.122 38.6849 200.19 38.6849C197.257 38.6849 196.167 36.7459 196.689 34.3471C197.212 31.9484 199.151 30.0122 202.083 30.0122C205.016 30.0122 206.097 31.9484 205.583 34.3471Z" fill="#4CD62B"/>
                            <path d="M225.829 13.1489L224.228 20.4975L220.254 38.6794H210.82L214.795 20.4975H210.085L211.689 13.1461L225.829 13.1489ZM218.823 8.38186C217.188 6.60911 217.687 3.56772 219.933 1.59276C222.178 -0.382197 225.327 -0.542853 226.97 1.23267C228.614 3.0082 228.106 6.04958 225.86 8.02454C223.615 9.9995 220.461 10.1602 218.823 8.38186Z" attributeName="change"/>
                            <path d="M240.972 16.8246L238.15 29.7796C237.866 31.087 238.031 31.328 239.368 31.328H245.236L243.635 38.6821H235.888C230.346 38.6821 227.525 35.1865 228.703 29.7796L231.524 16.8246H227.956L229.557 9.47044H233.134L234.446 3.44861H243.89L242.579 9.47044H250.005L248.395 16.8246H240.972Z" attributeName="change"/>
                            <path d="M25.5088 3.745H37.4829L27.5215 50H15.5474L25.5088 3.745Z" attributeName="change"/>
                            <path d="M43.0786 3.745H55.0527L47.2914 39.9868H35.3145L43.0786 3.745Z" attributeName="change"/>
                            <path d="M7.76366 3.745H19.7378L11.9765 39.9868H-0.000488281L7.76366 3.745Z" attributeName="change"/>
                            <path d="M171.027 13.1489L153.531 38.6821H143.879L137.498 13.1489H147.834L150.613 29.9153L160.691 13.1628L171.027 13.1489Z" attributeName="change"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="250" height="50" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>

                    <strong>Bem-vindo</strong>

                    <div className={styles.github}>
                        <img src="/icons/github.svg" alt="Github Logo"/>
                        <p>Faça login com seu github para começar</p>
                    </div>

                    <form onSubmit={formSubmit}>
                        <input
                            type="text"
                            name="githubUserName"
                            id="githubUserName"
                            placeholder="Digite seu username"
                            value={inputTargetValue}
                            onChange={handleInputChange}
                        />

                        {isButtonActive? (
                            <button type="submit" style={{backgroundColor: '#4cd62b'}}>
                                <img src="/icons/arrow.svg" alt="Send"/>
                            </button>
                        ):(
                            <button type="submit" disabled >
                                <img src="/icons/arrow.svg" alt="Send"/>
                            </button>
                        )}
                    </form>
                </div>
            </section>
        </div>
    );
}