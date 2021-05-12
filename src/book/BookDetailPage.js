import React, { Component } from 'react';
import { getBook } from '../utils/books-api';
import './BookDetailPage.scss';

export default class BookDetailPage extends Component {
  state = {
    book: null
  }

  async componentDidMount() {
    const { match } = this.props;
    const book = await getBook(match.params.id);
    if (book) {
      this.setState({ book: book });
    }
    else {
      console.log('No Book Received!');
    }
  }
  
  
  render() {
    const { book } = this.state;

    if (!book) return null;

    return (
      <div className="BookDetailPage">



        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <img src={book.image_url} alt={book.title}/>
        <p>Year Published: {book.pub_year}</p>
        
      </div>
      
    );
  }
}
