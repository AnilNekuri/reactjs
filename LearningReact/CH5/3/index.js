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
    open: true,
    freeBookmark: true,
    hiring: true,
    data: [],
    loading: false
  }

  componentDidMount(){
    this.setState({loading: true})
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/10')
      .then(data => data.json())
      .then(data => this.setState({data, loading: false}))
  }

  componentDidUpdate(){
    console.log("The component just updated")
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
        {this.state.loading 
        ? "loading..." 
        : <div>
          {this.state.data.map(product => {
            return (
              <div key={product.id}>
                <h3>Library Product of the Week!</h3>
                <h4>{product.name}</h4>
                <img alt={product.name} src={product.image} height={100} />
              </div>
            )
          }
          )}
          </div>
        }
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