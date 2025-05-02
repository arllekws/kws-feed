import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css'
import { Avatar } from './Avatar';

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/80819977?v=4" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Stella Souza</strong>
                            <time title="01 de maio às 05h55" datetime="2025-09-11 08:11:30">Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar Comentario'>
                            <Trash size = {24}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>

                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span></span>
                        </button>
                </footer>
            </div>
        </div>
    );
}