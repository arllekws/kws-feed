import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src="https://avatars.githubusercontent.com/u/151403603?v=4"  />
                    <div className={styles.authorInfo}>
                        <strong>Diego Fernandes</strong>
                        <span>Java Developer</span>
                    </div>

                </div>
                <time title='11 de maio de 2025' dateTime="2025-05-01 15:39:01">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                    <p> Fala galeraa 👋</p>

                    <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                    <p> 👉 <a href="">jane.design/doctorcare</a></p>

                    <p>
                        <a href=""> #novoprojeto</a>
                        <a href=""> #nlw</a>
                        <a href=""> #rocketseat</a>
                    </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentario'>
                    
                </textarea>
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    );
}