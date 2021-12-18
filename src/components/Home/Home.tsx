import { useState } from "react";
import { useStyles } from "./Home.style";

import InputSearch from "../InputSearch/InputSearch";
import Button from "../Button/Button";
import { List, IBook } from "../List/List";
import api from "../../_config/api";

const { REACT_APP_TITLE } = process.env;

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState<IBook[]>();

  const styles = useStyles();

  const storageBooks = async () => {
    const response = await api.get("search?query=" + searchTerm);
    const returnedBooks = response.data.hits?.map(
      (book: IBook, index: number) => {
        return {
          id: index,
          author: book?.author || "Desconhecido",
          title: book?.title || "Desconhecido",
          url: book?.url || "Desconhecido",
        };
      }
    );
    setBooks(returnedBooks);
  };

  const handleSearch = () => {
    storageBooks();
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{REACT_APP_TITLE}</h1>
      <div className={styles.searchContainer}>
        <InputSearch id="search" onInputChange={handleInput}>
          Chave de Busca
        </InputSearch>
        <Button onSearch={handleSearch}>Pesquisar</Button>
      </div>
      <List list={books} />
    </div>
  );
};

export default Home;
