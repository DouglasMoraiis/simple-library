import { useState } from "react";

import InputSearch from "../InputSearch/InputSearch";
import Button from "../Button/Button";
import {List, IBook} from "../List/List";
import api from "../../_config/api"

const { REACT_APP_TITLE } = process.env;

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState();
  const [books, setBooks] = useState<IBook[]>();

  const labelInput = "Buscar livro: ";

  const storageBooks = async () => {
    const response = await api.get("search?query="+searchTerm)
    const returnedBooks = response.data?.hits?.map((book: IBook, index: number) => {
        return { 
            id: index,
            author: book?.author || "Desconhecido",
            title: book?.title || "Desconhecido",
            url: book.url || "Desconhecido"
        }
    })
    setBooks(returnedBooks)    
  }

  const handleSearch = () => {
    storageBooks()
  };
  
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>{REACT_APP_TITLE}</h1>
      <InputSearch
        id="search"
        onInputChange={handleInput} 
      > Buscar livro
      </InputSearch>
      <Button onSearch={handleSearch}>Buscar</Button> 
      <List list={books}/>

    </div>
  );
};

export default Home;
