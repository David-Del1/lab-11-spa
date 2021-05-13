import React, { Component } from 'react';
import { getBook, deleteBook } from '../utils/books-api';
import './BookDetailPage.scss';
import { Link } from 'react-router-dom';

export default class BookDetailPage extends Component {
  state = {
    book: null,
    loading: true
  }

  async componentDidMount() {
    const { match } = this.props;
    try {
      const book = await getBook(match.params.id);
      this.setState({ book: book });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  handleDelete = async () => {
    const { book } = this.state;
    const { history } = this.props;

    const confirmation = `Are you sure you want to delete ${book.title}?`;

    if (!window.confirm(confirmation)) { return; }

    try {
      this.setState({ loading: true });
      await deleteBook(book.id);
      history.push('/books');
    }
    catch (err) {
      console.log(err.message);
      this.setState({ loading: false });
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

        <p>Owned by user "{book.userName}"</p>

        <Link to={`/books/${book.id}/edit`}>
          Edit this Book
        </Link>

        <button className="delete" onClick={this.handleDelete}>
          Delete this Book
        </button>
        
      </div>
      
    );
  }
}
