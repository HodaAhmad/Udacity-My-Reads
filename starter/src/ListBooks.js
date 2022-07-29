import React from "react";
import PropTypes from 'prop-types';

const ListBooks = ({book, changeShelf, listBooksHomePage}) => {
    const img = book.imageLinks && book.imageLinks.thumbnail 
    ? book.imageLinks.thumbnail
    : "" ;

    let currShelf = "none";

    listBooksHomePage.forEach(b=>{
        if(b.id === book.id){
            return currShelf = b.shelf;
        }
    })
    
    return (
        <li>
            <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${img})`}}></div>
            <div className="book-shelf-changer">
              <select onChange = {(e)=> changeShelf(book, e.target.value)} value={currShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
        </li>
    )
        
 
}

export default ListBooks;