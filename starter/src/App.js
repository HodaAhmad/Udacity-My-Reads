import "./App.css";
import React from "react";
import {Route, Routes} from "react-router-dom"
import * as BooksAPI from './BooksAPI'
import SearchBook from "./SearchBook";
import Shelves from "./Shelves";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import PageNotFound from "./PageNotFound";

const App = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    BooksAPI.getAll()
    .then((res) => {
      setBooks(res)
    })
  }, []);

  const changeShelf = (book, shelf) =>{
    book.shelf = shelf;
    BooksAPI.update(book, shelf).then(() => {
      setBooks([...books.filter((b) => b.id !== book.id), book])
    });
  }

  function search(value){
    value?
    BooksAPI.search(value)
    .then((books) =>{
      books.length?
      setQuery(books) : setQuery([])
    }) :
    setQuery([])
  }

  function incorrect(){
    setQuery([])
  }

  const currentlyReading = books.filter(book => book.shelf === "currentlyReading")
  const wantToRead = books.filter(book => book.shelf === "wantToRead")
  const read = books.filter(book => book.shelf === "read")

  return (
    <Routes>
      <Route
            exact path = '/'
            element = {
              <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <Shelves 
                  shelf = {currentlyReading} 
                  title = 'Currently Reading'
                  changeShelf = {changeShelf}
                  listBooksHomePage = {books}
                />
                <Shelves 
                  shelf = {wantToRead} 
                  title = 'Want To Read'
                  changeShelf = {changeShelf}
                  listBooksHomePage = {books}
                />
                <Shelves 
                  shelf = {read} 
                  title = 'Read'
                  changeShelf = {changeShelf}
                  listBooksHomePage = {books}
                />
              </div>
              <div className="open-search">
                <Link to ='/search'>Add a book</Link>
              </div>
            </div>
            }
            /> 
            
          <Route
            exact path = '/search'
            element = {
              <SearchBook 
              search = {search} 
              changeShelf={changeShelf}
              result = {query}
              listBooksHomePage = {books}
              incorrect = {incorrect}
              />
            }
          />
          <Route 
              path="*" element= {
              <PageNotFound />
            }
          />
    </Routes>
  )
}


export default App;
