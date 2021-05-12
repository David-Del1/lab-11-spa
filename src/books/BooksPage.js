import React, { Component } from 'react';
import { getBooks } from '../utils/books-api';
import BookList from './BookList';
import './BooksPage.css';

export default class BooksPage extends Component {
  state = {
    books: []
  }

  async componentDidMount() {
    try {
      const books = await getBooks();
      this.setState({ books: books });
    }
    catch (err) {
      console.log(err);
    }
  }
  
  render() {
    const { books } = this.state;

    return (
      <div className='BooksPage'>
  

        <BookList books={books}/>
        
      </div>
    );
  }
}
