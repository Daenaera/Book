import React, { useEffect, useState } from "react";
import Book from './Book';
import "./App.css";


const App = () => {

  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('potter');
  
  useEffect(() => {
    getBooks();
  }, [query]);
  
  
  const getBooks = async () => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const data = await response.json();
    setBooks(data.items);
    console.log(data.items);
  }

  const UpdateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }
  
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={UpdateSearch}
          placeholder="cerca un libro"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div>
        <p>Ecco i primi 10 risultati</p>
        <Book className="libri" book={books}/>
      </div>
    </div>
  )
}


export default App; 