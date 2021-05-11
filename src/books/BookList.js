import React, { Component } from 'react';
import BookItem from './BookItem';
import './BookList.css';

export default class BookList extends Component {
  render() {
    const { books } = this.props;

    return (
      <ul className="BooksList">
        {books.map(book => (
          <BookItem key={book.id} book={book}/>
        ))}
      </ul>
    );
  }
}
