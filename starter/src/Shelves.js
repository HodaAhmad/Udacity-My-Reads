import React from "react";
import ListBooks from "./ListBooks";

const Shelves = ({shelf, title, changeShelf, listBooksHomePage}) => {
    const books = shelf.map(book => <ListBooks book={book} key={book.id} changeShelf={changeShelf} listBooksHomePage={listBooksHomePage}  />)
    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books}
          </ol>
        </div>
      </div>
    )
}

export default Shelves;