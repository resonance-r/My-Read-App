import React, { Component } from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';


class SearchPage extends Component {
  state={
    query:'',
    searchBook:[]
  }
  updateQuery =(query)=>{
    this.setState({
      query:query
    })
    this.updatesearchBook(query);
  }
  // solving undifined .map error while searching new books
    updatesearchBook =(query)=>{
      if (query){
    BooksAPI.search(query).then((searchBook) =>{
      if (searchBook.error){
        this.setState({searchBook: []});
      }else {
        this.setState({searchBook:searchBook})
      }
    })
  } else {
    this.setState({searchBook: []});
  }
  }
    render() {
     
    return (
       <div className="search-books">
    <div className="search-books-bar">
   {/*//add Link  */}   
   <Link 
      to="/" className="close-search">
        Closs
      </Link> 
    {/*  <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
     */}
     <div className="search-books-input-wrapper">
        {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
        <input type="text" placeholder="Search by title or author"
        className="search-books"
        value={this.state.query}
        onChange={(event)=> this.updateQuery(event.target.value)}
        />

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
        {this.state.searchBook.map(searchBook => {
          var shelf= "none";
          {/*finding if book on shelf */}
          this.props.books.map (book=> (
            book.id === searchBook.id?
            shelf=book.shelf : ' ' ))
          return (
           <li key={searchBook.id}>
            <Book
              book={ searchBook }
            shelfUpdate={this.props.shelfUpdate}
            currentshelf={shelf}
            
             />
         </li>
         )
        })
         }
        </ol>
      </div>
     </div>
   );
  }

 }
export default SearchPage;