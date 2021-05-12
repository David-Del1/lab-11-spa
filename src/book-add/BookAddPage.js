import React, { Component } from 'react';
import BookForm from '../common/BookForm';

export default class BookAddPage extends Component {
  state = {
    loading: false
  }

  handleAdd = async catToAdd => {

    const { history } = this.props;

    try {
      this.setState({ loading: true });
    }
    catch (err) {
      console.log(err.message);
    }
  }
  render() {
    return (

      <div className="BookAddPage">
        <h2>Add a Book</h2>
        <BookForm/>

        
      </div>

    );
      
      
  }
}
