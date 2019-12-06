import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook, removeBook, editContent } from '../../redux/actions/books actions';
import "./books.css"


class Books extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggle: false,
      editId: "",
      editAuthor: "",
      newBook: ""
    }
  }

  setEditState = (editAuthor, editId) => {
    this.setState({
      isToggle: !this.state.isToggle,
      editId,
      editAuthor
    });
  }

  addBook(name, author) {
    const { availableBooks } = this.props;

    for (var i in availableBooks) {
      if (availableBooks[i].author === author) {
        alert('Found existing Author')
        return
      }
    }
    this.props.addBook(name, author)
    this.setState({
      name: "",
      author: ""
    })
  }

  editContent(editAuthor, editId) {
    this.props.editContent(editAuthor, editId)
    this.setState({
      isToggle: !this.state.isToggle,
      editId: '',
      editAuthor: ''
    });
  }

  setValue = (e) => {
    this.setState({ newBook: e.target.value })
  }


  render() {
    const { isToggle, name, author, editAuthor, editId } = this.state;
    const { availableBooks } = this.props;
    return <div className="books"><h1 className="header">Books</h1>
      <h4>Name here :</h4>
      <input placeholder="Enter name here" type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
      <h4>Author here :</h4>
      <input placeholder="Enter author here" type="text" value={this.state.author} onChange={e => this.setState({ author: e.target.value })} />
      <button onClick={() => this.addBook(name, author)}>Add</button>
      {isToggle !== false ? <div>
        <input type="text" value={editAuthor} onChange={e => this.setState({ editAuthor: e.target.value })} />
        <button onClick={() => this.editContent(editAuthor, editId)}>Save</button>
      </div> : null}
      {availableBooks.map(book => <div className="data"
        key={book.name}>Name:{book.name} Author: {book.author}
        <h3>Date: {book.date}</h3>
        <div className='book-buttons'>
          <button onClick={() => this.props.removeBook(book.id)}>Remove Book</button>
          <button onClick={() => this.setEditState(book.author, book.id)} >Edit</button>
        </div>
      </div>)
      }
    </div>
  }

}

const mapStateToProps = (state) => ({
  availableBooks: state.books.availableBooks,
})

const mapDispatchToProps = dispatch => ({
  addBook: (name, author) =>
    dispatch(addBook({ name, author })
    ),
  removeBook: (id) =>
    dispatch(removeBook({ id })
    ),
  editContent: (name, id) =>
    dispatch(editContent({ name, id })
    ),
})


export default connect(mapStateToProps, mapDispatchToProps)(Books)