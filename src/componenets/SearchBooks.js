import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
const SearchBooks = props => (
    <div className="search-books">
        <div className="search-books-bar">
        <Link to="/"><button className="close-search">Close</button></Link>
        <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange = {e => props.searchBook(e.target.value)}/>
        </div>
        </div>
        <div className="search-books-results">
        <ol className="books-grid">
            {props.searchResults && props.searchResults.map(book => <Book key={book.id} book={book} changeShelf={props.changeShelf}/>)}
        </ol>
        </div>
    </div>
);

export default SearchBooks;