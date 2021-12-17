export interface IBook extends Object {
  id: number;
  author: string;
  title: string;
  url: string;
}

type ListProps = {
  list: Array<IBook>;
};

export const List = (props: ListProps) => {
  return (
    <div>
      {props.list?.map((item) => {
        return (
          <div key={item.id}>
            <p>
              <span>✏️</span>
              {item.author}
            </p>
            <p>
              <span>📘</span>
              {item.title}
            </p>
            <a href={item.url}>
              <span>🔎</span>
              {item.url}
            </a>
          </div>
        );
      })}
    </div>
  );
};
