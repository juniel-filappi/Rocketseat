import styles from './Comment.module.css';
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar.jsx";

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/juniel-filappi.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Juniel Filappi</strong>
                            <time
                                title="11 de maio ás 08:12"
                                dateTime="2022-05-11 08:12:30"
                            >
                                Cerca de 1 hora atrás
                            </time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Teste, parabéns!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}