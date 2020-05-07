import React from 'react';
import Book from './Book';
const BookShelf = props => (
    <div className="bookshelf">
    <h2 className="bookshelf-title">{props.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
          {props.books && props.books.map(book => book.shelf === props.compareString && <Book key={book.id} book={book} changeShelf={props.changeShelf}/>)}
      </ol>
    </div>
  </div>
);

export default BookShelf;