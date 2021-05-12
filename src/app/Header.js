import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() { 
    return (
      <header className="Header">

        <h1>David's Book List</h1>

        <nav className='navLinks'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/books'>Book List</NavLink>
          <NavLink to='/books/add'>Add Book</NavLink>
        </nav>

       
        
      </header>
    );
  }

}
 
export default Header;