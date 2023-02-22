import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/lucascebertin.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.AuthorAndTime}>
              <strong></strong>
              <time title="15 de Janeiro às 08:30" dateTime="2023-02-15 18:30">
                Cerca de 1hora atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Black, parabéns!! 👏🏽👏🏽</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>23</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
