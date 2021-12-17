type ButtonProps = {
  children: string;
  onSearch: () => void;
};

const Button = (props: ButtonProps) => {
  return (
    <button type="button" onClick={props.onSearch}>
      {props.children}
    </button>
  );
};

export default Button;
