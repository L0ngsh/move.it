import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/pages/404.module.css';

export default function fourOhFour() {
    return(
        <div className={styles.container}>
            <Head>
                <title>404 | move.it</title>
            </Head>
            
            <section>
                <strong>Erro <span>404</span>, Página não encontrada!</strong>

                <p>Voltar a <Link href='/'><a>Home</a></Link></p>
            </section>
        </div>
    );
}