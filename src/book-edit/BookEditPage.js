import React, { Component } from 'react';
import BookForm from '../common/BookForm';
import { getBook, updateBook } from '../utils/books-api';
import './BookEditPage.css';

export default class BookEditPage extends Component {
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

  handleUpdate = async book => {
    const { history } = this.props;

    try {
      this.setState({ loading: true });
      const updatedBook = await updateBook(book);
      history.push(`/books/${updatedBook.id}`);
    }
    catch (err) {
      console.log(err.message);
      this.setState({ loading: false });
    }
  }
  
  render() {
    const { book } = this.state;

    return (
      <div className="BookEditPage">
        <h2>Edit Book</h2>

        {book && <BookForm book={book} onSubmit={this.handleUpdate}/>}
      </div>
    );
  }
}
