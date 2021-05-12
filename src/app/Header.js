import { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() { 
    return (
      <header className="Header">

        <h1>David's Book List</h1>

        <div className='navLinks'>
          <a href='/'>Home</a>
          <a href='/books'>Book List</a>
        </div>

       
        
      </header>
    );
  }

}
 
export default Header;