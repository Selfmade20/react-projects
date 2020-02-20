import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook, removeBook, editContent, getAllBooks } from '../../redux/actions/books';
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

  componentDidMount() {
    this.props.getAllBooks()
  }

  setEditState = (editAuthor, editId) => {
    this.setState({
      isToggle: !this.state.isToggle,
      editId,
      editAuthor
    });
  }

  addBook(bookName, bookAuthor) {
    const { availableBooks } = this.props;

    for (var i in availableBooks) {
      if (availableBooks[i].bookAuthor === bookAuthor) {
        alert('Found existing Author')
        return
      }
    }
    const book = this.state.newBook
    this.props.addBook(book)
    this.setState({ newBook: ""  })
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
    const { isToggle, name, author, editAuthor, editId, } = this.state;
    const { availableBooks } = this.props;
    return <div className="books"><h1 className="header">Books</h1>
      <label style={{ textAlign: "left" }}>Enter Details below</label>
      <div className="con">
        <h7>Name here :</h7>
        <input placeholder="Enter name here" type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
        <h7>Author here :</h7>
        <input placeholder="Enter author here" type="text" value={this.state.author} onChange={e => this.setState({ author: e.target.value })} />
        <button onClick={() => this.addBook(name, author)}>Add</button>
      </div>
      {isToggle !== false ? <div>
        <input type="text" value={editAuthor} onChange={e => this.setState({ editAuthor: e.target.value })} />
        <button onClick={() => this.editContent(editAuthor, editId)}>Save</button>
      </div> : null}
      {availableBooks.map(book => <div style={{ wordSpacing: 10 }} className="data"
        key={book.name}><strong>Name:</strong> {book.bookName}  <strong>Author:</strong> {book.bookAuthor}
        <h5>Date: {book.date}</h5>
        <div className='book-buttons'>
          <button onClick={() => this.props.removeBook(book._id)}>Remove Book</button>
          <button onClick={() => this.setEditState(book.bookAuthor, book._id)}>Edit</button>
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
    getAllBooks: () => {
      dispatch(getAllBooks())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Books)