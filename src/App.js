import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import BookList from './componenets/BookList'
import SearchBooks from './componenets/SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: new Map(),
    searchResults: []
  }
  componentDidMount = async () => {
    let books = await BooksAPI.getAll();
    let booksMap = new Map();
    books.forEach(book => {
      booksMap.set(book.id,book);
    })
    this.setState({
      books: booksMap
    });
  }
  changeShelf = (selectedBook, toShelf) => {
    BooksAPI.update(selectedBook,toShelf);
    let books = this.state.books;
    let currentBook = books.get(selectedBook.id);
    if(currentBook)
      currentBook.shelf = toShelf;
    else 
      books.set(selectedBook.id, selectedBook);
    this.setState({
      books: books
    });
  }

  searchBook = async searchTerm => {
    if(searchTerm.length>0) {
      let searchResults = await BooksAPI.search(searchTerm);
      if(searchResults.error){
        alert("An error occured while trying to search. Try another keyword");
      }
      else {
        this.setState({
          searchResults: searchResults
        });
      }
    }
  }

  render() {
    let books = Array.from(this.state.books.values());
    let searchResults = this.state.searchResults|| [];
    return (
      <BrowserRouter>
        <div className="app">
          <Route path="/search" exact>
            <SearchBooks searchResults={searchResults} changeShelf={this.changeShelf} searchBook ={this.searchBook} />
          </Route>
          <Route path="/" exact>
           <BookList books={books} changeShelf={this.changeShelf} />
          </Route>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
