//https://reactjs.org/docs/forms.html
// https://upmostly.com/tutorials/react-onchange-events-with-examples
//https://stackoverflow.com/questions/42550341/react-trigger-onchange-if-input-value-is-changing-by-state

import React, { Component } from 'react';
class Book extends Component {
    render(){

        return(
            <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}></div>
              <div className="book-shelf-changer">
                <select
                 onChange={(event)=> this.props.shelfUpdate (this.props.book, event.target.value)} 
                 value={this.props.currentshelf}
                 >
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
                
              </div>
            </div>
        <div className="book-title"> Book Title : {this.props.book.title}</div>
        <div className="book-authors"> Author : {this.props.book.authors}</div>
        <div className="book-averageRating"> Rating : {this.props.book.averageRating}</div>
        <div className="book-pageCount"> No. of pages : {this.props.book.pageCount}</div>
        <div className="book-description"> Description : {this.props.book.description}</div>

          </div>

        );
    }   
}
export default Book;
