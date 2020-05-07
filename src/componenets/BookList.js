import React from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';
const BookList = props => (
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelf title="Currently Reading" books = {props.books} compareString = "currentlyReading" changeShelf={props.changeShelf} />
        <BookShelf title="Want to Read" books = {props.books} compareString = "wantToRead" changeShelf={props.changeShelf} />
        <BookShelf title="Read" books = {props.books} compareString = "read" changeShelf={props.changeShelf} />
      </div>
    </div>
    <div className="open-search">
      <Link to="/search"><button >Add a book</button></Link>
    </div>
  </div>
);

export default BookList;