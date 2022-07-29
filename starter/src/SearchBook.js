import React from "react";
import {Link} from 'react-router-dom';
import ListBooks from "./ListBooks";

const SearchBook = ({search, result, changeShelf, listBooksHomePage, incorrect}) => {
    const books = result.map(book => <ListBooks book={book} key={book.id} changeShelf={changeShelf} listBooksHomePage={listBooksHomePage} />)
    return(
        <div className="search-books">
        <div className="search-books-bar">
          <Link to ='/'className="close-search" onClick = {incorrect} >Close</Link>
          <div className="search-books-input-wrapper">
            <input 
            type="text" 
            placeholder="Search by title or author" 
            onKeyUp={(e)=>search(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books}
          </ol>
        </div>
      </div>
    )
}

export default SearchBook;