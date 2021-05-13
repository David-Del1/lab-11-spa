import React, { Component } from 'react';
import './BookItem.css';
import { Link } from 'react-router-dom';

export default class BookItem extends Component {

  render() {
    const book = this.props.book;
    return (
      <li className='BookItem'>
        <Link to={`/books/${book.id}`}>
          <h2>{book.title}</h2>
          <img src={book.image_url} alt=''/>
          <h3>{book.pub_year}</h3>
        </Link>
      </li>
    );
  }
}
