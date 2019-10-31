import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook, removeBook, editContent } from '../../redux/actions/books actions';



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
      if (availableBooks[i].author == author.trim().toUpperCase()) {
        alert('Found existing Author')
        return
      }
    }
    this.props.addBook(name, author)
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
    return <div className="books"><h1>Books</h1>
      <strong style={{ margin: '0.5' }}>Name here :</strong>
      <input placeholder="Enter name here" type="text" style={{ margin: '0.8%' }}
        onChange={e => this.setState({ name: e.target.value })} />
      <strong style={{ margin: '0.5%' }}>Author here :</strong>
      <input placeholder="Enter author here" style={{ margin: '0.8%' }}
        type="text"
        onChange={e => this.setState({ author: e.target.value })} />
      <button onClick={() => this.addBook(name, author)} style={{ backgroundColor: 'orange', color: 'black', position: 'revert' }}>Add</button>
      {isToggle !== false ? <div>
        <input type="text"
          style={{ margin: '3%' }}
          value={editAuthor}
          onChange={e => this.setState({ editAuthor: e.target.value })} />
        <button onClick={() => this.editContent(editAuthor, editId)} style={{ backgroundColor: 'orange', color: 'black' }}>Save</button>
      </div> : null}
      {availableBooks.map(book => <div style={{ margin: '2rem', wordSpacing: '5px' }}
        key={book.name}><strong>Name:</strong> {book.name} <strong>Author:</strong> {book.author} <h3>Date: {book.date}<ul></ul></h3>
        <button onClick={() => this.props.removeBook(book.id)} style={{ backgroundColor: 'purple', color: 'white', margin: '2%' }}>Remove Book</button>
        <button onClick={() => this.setEditState(book.author, book.id)} style={{ backgroundColor: 'orange', color: 'black' }}>Edit</button>
        <div className='book-buttons'>
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