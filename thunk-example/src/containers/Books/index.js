import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook, removeBook, editContent } from '../../redux/actions';
import availableBooks from '../../redux/books/reducer';


class Books extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date().toLocaleDateString(),
      isToggle: false,
      editId: "",
      editTitle: ""
    }
  }

  setEditState = (editTitle, editId) => {
    this.setState({
      isToggle: !this.state.isToggle,
      editId,
      editTitle
    });
  }

  addBook(books) {
    const { availableBooks } = this.props;

    for (var i in availableBooks) {
      if (availableBooks[i].name == books) {
        console.log("found match")
        return
      }
    }
    this.props.addBook(books)
  }

  render() {
    const { isToggle, name, author , editTitle ,  editId} = this.state;
    const { availableBooks } = this.props;
    return <div className="books"><h1>Books</h1>
      {availableBooks.map(book => <div style={{ margin: '2rem', wordSpacing: '5px' }}
        key={book.name}><strong>Name:</strong> {book.name} <strong>Author:</strong> {book.author} <ul>{this.state.date}</ul>
        <div>
          <button onClick={() => this.props.removeBook(book.name, book.author)}>Remove Book</button>
          <button onClick={() => this.setEditState(book.name, book.id)}>Edit</button>
        </div>
      </div>)
      }
      {isToggle !== false ? <div>
        <input type="text" 
        value={editTitle}
        onChange={e => this.setState({ editTitle: e.target.value })} />
        <button onClick={() => this.props.editContent(editTitle ,  editId)}>Save</button>
      </div> : null}
      <label>Name here :</label>
      <input placeholder="Enter name here" type="text" style={{ margin: '1px' }} onChange={e => this.setState({ name: e.target.value })} />
      <label>Author here :</label>
      {/* <div> */}
        <input placeholder="Enter author here" style={{ margin: '1rem' }}
          type="text"
          onChange={e => this.setState({ author: e.target.value })} />
        <button onClick={() => this.props.addBook(name, author)}>Add</button>
      {/* </div> */}
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
  removeBook: (name, author) =>
    dispatch(removeBook({ name, author })
    ),
  editContent: (name , id) =>
    dispatch(editContent({ name , id  })
    ),
})


export default connect(mapStateToProps, mapDispatchToProps)(Books)