import React, {Component} from 'react';
import {render} from 'react-dom';

const Books = [
  {title: "Dark Web", author: "Riaan N", pages: 472},
  {title: "Life of Pi", author: "Arin N", pages: 235},
  {title: "Gentleman", author: "Sharon N", pages: 1091},
  {title: "Arjun Reddy", author: "Anil N", pages: 10091}
]

const Book = ({title, author, pages, freeBookmark}) => {
  return (
    <section>
    <h2>{title}</h2>
    <p>By: {author}</p>
    <p>Pages: {pages} pages</p>
    <p>Free Bookmarks today : {freeBookmark ? 'Yes!' : 'No!'}</p>
  </section>
  )
}

const Hiring = () => 
  <div>
    <p>The library is hiring. Go the www.library.com/jobs for more.</p>
  </div>

const NotHiring = () => 
  <div>
    <p>The library is not hiring. Check back later for more info.</p>
  </div>
class Library extends Component {
  state = { 
    open: false,
    freeBookmark: true,
    hiring: true
  }

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render() {
    const { books } = this.props
    return (
      <div>
        {this.state.hiring ? <Hiring/> : <NotHiring />}
        <h1>The library is {this.state.open ? 'Open' : 'Closed'} </h1>
        <button onClick={this.toggleOpenClosed} >Change</button>
        {books.map(
            (book, i) => <Book 
             key={i}
             title={book.title} 
             author={book.author} 
             pages={book.pages} 
             freeBookmark={this.state.freeBookmark}/>
        )} 
      </div>
    )
  }
}
render(
  <Library books={Books}/>,
  document.getElementById('root')
)