import { useStyles } from "./InputSearch.style";

type InputSearchProps = {
  id: string;
  children: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputSearch = (props: InputSearchProps) => {
  const styles = useStyles();

  return (
    <input
      className={styles.input}
      id={props.id}
      placeholder={props.children}
      type="text"
      onChange={props.onInputChange}
    />
  );
};

export default InputSearch;
