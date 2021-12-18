import { useStyles } from './List.style'

export interface IBook extends Object {
  id: number;
  author: string;
  title: string;
  url: string;
}

type ListProps = {
  list?: Array<IBook>;
};

export const List = (props: ListProps) => {
  const styles = useStyles()

  return (
    <div className={styles.listContainer}>
      {props.list?.map((item) => {
        return (
          <div key={item.id} className={styles.book}>
            <div className={styles.bookAtributes}>
              <span>✏️</span>
              <span><b>Autor</b></span>
              <span className={styles.content}>{item.author}</span>
            </div>
            <div className={styles.bookAtributes}>
              <span>📘</span>
              <span><b>Título</b></span>
              <span className={styles.content}>{item.title}</span>
            </div>
            <div className={styles.bookAtributes}>
              <span>🔎</span>
              <span><b>URL</b></span>
              <a className={styles.content} href={item.url} >{item.url}</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
