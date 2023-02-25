import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  const publishedAt = new Date("2023-02-25 10:00:00");
  const publishedDaterelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/lucascebertin.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.AuthorAndTime}>
              <strong></strong>
              <time
                title={publishedDateFormatted}
                dateTime={publishedAt.toISOString()}
              >
                {publishedDaterelativeToNow}
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom mano, parabéns!! 👏🏽👏🏽</p>
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
