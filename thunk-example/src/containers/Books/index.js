import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook, removeBook } from '../../redux/actions';
import books from '../../redux/books/reducer';




class Books extends Component {

  addBook(books) {
  const {book} = this.props;
  
  for(var i in book){
    if(book[i].name == book){
      console.log("found match")
    return
    }
  }
    this.props.addBook(books)
  }


  render() {
    console.log('props', this.props)
    return <div className="books"><h1>Books</h1>
      {this.props.availableBooks.map(book => <div style={{ margin: '2rem', wordSpacing: '5px'  }}
        key={book.name}>NAME {book.name} AUTHOR {book.author}
         <button onClick={() => this.props.removeBook(book.name, book.author)}>Remove Book</button>
        </div>) 
        }
     
      <label>Name here :</label>
      <input type="text" style={{ margin: '1rem' }} onChange={e => this.setState({ name: e.target.value })} />
      <label>Author here :</label>
      <input style={{ margin: '1rem' }} type="text" onChange={e => this.setState({ author: e.target.value })} />
      <button onClick={() => this.props.addBook(this.state.name, this.state.author)}>Add</button>
    </div>
  }

}

const mapStateToProps = (state) => ({
  availableBooks: state.books.availableBooks,
})

const mapDispatchToProps = dispatch => ({
  addBook: (name, author) => 
  dispatch(addBook({ name, author })),

  removeBook: (name, author) => 
  dispatch(removeBook({name, author}))
})


export default connect(mapStateToProps, mapDispatchToProps)(Books)