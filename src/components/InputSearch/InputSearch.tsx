type InputSearchProps = {
  id: string;
  children: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputSearch = (props: InputSearchProps) => {
  return (
    <>
      <label>{props.children}</label>
      <input 
        id={props.id} 
        type="text" 
        onChange={props.onInputChange} 
        className="input" 
      />
    </>
  );
};

export default InputSearch;
