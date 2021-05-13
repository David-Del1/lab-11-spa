import React, { Component } from 'react';
import BookForm from '../common/BookForm';
import { addBook } from '../utils/books-api';
import './BookAddPage.css';

export default class BookAddPage extends Component {
  state = {
    loading: false
  }

  handleAdd = async bookToAdd => {
    console.log(bookToAdd);
    const { history } = this.props;

    try {
      this.setState({ loading: true });

      const newBook = await addBook(bookToAdd);

      history.push(`/books/${newBook.id}`);
    }
    catch (err) {
      this.setState({ loading: false });
      console.log(err.message);
    }
  }

  render() {

    return (

      <div className="BookAddPage">
        <h2>Add a Book</h2>
        <BookForm onSubmit={this.handleAdd}/>

        
      </div>

    );
      
      
  }
}
