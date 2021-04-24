import React from 'react';
import HomePage from './HomePage';
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchPage from './SearchPage';

//cutting code into components -Books /HomePage & SearchPage

class BooksApp extends React.Component { 
  state={
    books:[]
  }
  componentDidMount(){
    BooksAPI.getAll().then((books) =>{
      this.setState({ books: books })
    })
  } 
  shelfUpdate=(book, shelf)=>{
    //method update 
    BooksAPI.update(book, shelf);

    //reupdate 
    BooksAPI.getAll().then((books) =>{
      this.setState({ books: books });
    })
  }
  
  render() {
  //  console.log(this.state.books);
    return (
      <div className="app">
        <Route exact path="/" render={ () => (
          <HomePage 
          books={this.state.books}
          shelfUpdate={this.shelfUpdate}
         /> )}/>


        <Route path="/search" render={ () => (
          <SearchPage
            shelfUpdate={this.shelfUpdate}
            books={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp;
