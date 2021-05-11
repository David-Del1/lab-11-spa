import React, { Component } from 'react';
import { getBooks } from '../utils/books-api';

export default class BookDetailPage extends Component {
  state = {
    cat: null,
    loading: true
  }

  async componentDidMount() {
    const { match } = this.props;
    try {
      const cat = await getBooks(match.params.id);
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }
  
  render() {
    const { book } = this.state;

    return (
      <div className="CatDetailPage">

        <h2>{book.title}</h2>

        <img src={book.url} alt=''/>
        
      </div>
    );
  }
}
