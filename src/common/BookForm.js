import React, { Component } from 'react';
import './BookForm.css';

export default class BookForm extends Component {
  state = {
    title: '',
    author: '',
    genre: '',
    image_url: '',
    pub_year: 2020
  }

  componentDidMount() {
    const { book } = this.props;
    if (!book) { return; }

    this.setState(book);
  }

  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleChangeTitle = ({ target }) => {
    this.setState({ title: target.value });
  }

  handleAuthorTitle = ({ target }) => {
    this.setState({ author: target.value });
  }

  handleChangeGenre = ({ target }) => {
    this.setState({ genre: target.value });
  }

  handleChangeURL = ({ target }) => {
    this.setState({ image_url: target.value });
  }

  handleChangePubYear = ({ target }) => {
    this.setState({ pub_year: target.value });
  }
  
  render() {
    const { title, author, genre, image_url, pub_year } = this.state;
    const { book } = this.props;
    console.log(genre);
    return (
      <form 
        onSubmit={this.handleSubmit}
        className="BookForm" >
        <p>
          <label>
            <span>Book Title</span>
            <input title="title" required placeholder="Title" value={title} onChange={this.handleChangeTitle}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Book Author</span>
            <input type="text" required placeholder="Author" value={author} onChange={this.handleAuthorTitle}/>
          </label>
        </p>

        <p>
          <label>
            <span>Book Genre</span>
            <select name="genre" required placeholder="Genre" value={genre} onChange={this.handleChangeGenre}>
              <option value="" disabled>Genre</option>
              <option value="fiction">Fiction</option>
              <option value="non-fiction">Non-fiction</option>
              <option value="science">Science</option>
              <option value="philosophy">Philosophy</option>
              <option value="social science">Social Science</option>
            </select>
          </label>
        </p>

        <p>
          <label>
            <span>Image URL</span>
            <input type="text" placeholder="Image URL" value={image_url} onChange={this.handleChangeURL}/>
          </label>
        </p>

        <p>
          <label>
            <span>Publication Year</span>
            <input type="text" value={pub_year} onChange={this.handleChangePubYear}></input>
          </label>
        </p>

        <p>
          <button>{book ? 'Update' : 'Add'} Book</button>
        </p>
      </form>
    );
  }
}
