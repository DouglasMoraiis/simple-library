import { useStyles } from "./Button.style";

type ButtonProps = {
  children: string;
  onSearch: () => void;
};

const Button = (props: ButtonProps) => {
  const styles = useStyles();

  return (
    <button className={styles.button} type="button" onClick={props.onSearch}>
      {props.children}
    </button>
  );
};

export default Button;
