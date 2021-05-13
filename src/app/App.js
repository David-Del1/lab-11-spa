import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import BooksPage from '../books/BooksPage';
import BookForm from '../common/BookForm';
import BookDetailPage from '../book/BookDetailPage';
import BookAddPage from '../book-add/BookAddPage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps}/>
                )}
              />

              <Route path="/books" exact={true}
                render={routerProps => (
                  <BooksPage {...routerProps}/>
                )}
              />

              <Route path="/books/add" exact={true}
                render={routerProps => (
                  <BookAddPage {...routerProps}/>
                )}
              />
              <Route path="/books/:id"
                exact={true}
                render={routerProps => (
                  <BookDetailPage {...routerProps}/>
                )}
              />
              
              <Route path="/books/:id/edit"
                exact={true}
                render={routerProps => (
                  <BookForm {...routerProps}/>
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer/>
        </Router>
      </div>
    );
  }

}

export default App;
