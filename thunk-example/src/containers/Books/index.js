import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addBook,
  removeBook,
  editContent,
  getAllBooks,
  getName,
  getAuthor
} from "../../redux/actions/books";
import "./books.css";
import moment from "moment";
// import Loader from "src/components/Loader";
import PaginationRounded from "../../components/Pagination";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      isToggle: false,
      editId: "",
      editAuthor: "",
      bookName: "",
      bookAuthor: ''
    };
  }

  componentDidMount() {
    this.props.getAllBooks();
  }

  handleNameChange = (event) => {
    this.setState({ bookName: event.target.value })
  }

  handleAuthorChange = (event) => {
    this.setState({ bookAuthor: event.target.value })
  }

  setEditState = (editAuthor, editId) => {
    this.setState({
      isToggle: !this.state.isToggle,
      editId,
      editAuthor
    });
  };

  addBook() {
    const { availableBooks } = this.props;
    const { bookName, bookAuthor } = this.state;
    for (var i in availableBooks) {
      if (availableBooks[i].bookAuthor === bookAuthor) {
        alert("Found existing Author");
        return;
      }
    }
    this.props.addBook({
      bookName,
      bookAuthor
    });
    this.setState({ bookName: "", bookAuthor: "" });
  }

  editContent(editAuthor, editId) {
    this.props.editContent(editAuthor, editId);
    this.setState({
      isToggle: !this.state.isToggle,
      editId: "",
      editAuthor: ""
    });
  }

  setValue = e => {
    this.setState({ newBook: e.target.value });
  };

  search = () => {
    this.setState({ search: "" });
  };

  render() {
    const { isToggle, editAuthor, editId } = this.state;
    const { availableBooks } = this.props;
    return (
      <div className="books">
        <h1 className="header">Books</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search by name"
            onChange={this.handleNameChange}
          />
          <button onClick={() => this.props.getName(this.state.bookName)}>
            <i className="fa fa-search"> Search</i>
          </button>
          <input
            type="text"
            placeholder="Search by author"
            onChange={this.handleAuthorChange}
          />
          <button onClick={() => this.props.getAuthor(this.state.bookAuthor)}>
            <i className="fa fa-search"> Search</i>
          </button>
        </div>
        <label style={{ textAlign: "left" }}>Enter Details below</label>
        <div className="con">
          <h7>Name here :</h7>
          <input
            placeholder="Enter book name here"
            type="text"
            value={this.state.bookName}
            onChange={e => this.setState({ bookName: e.target.value })}
          />
          <h7>Author here :</h7>
          <input
            placeholder="Enter book author here"
            type="text"
            value={this.state.bookAuthor}
            onChange={e => this.setState({ bookAuthor: e.target.value })}
          />
          <button onClick={() => this.addBook()}>Add</button>
        </div>
        {isToggle !== false ? (
          <div className="edit_author">
            <input
              type="text"
              value={editAuthor}
              onChange={e => this.setState({ editAuthor: e.target.value })}
            />
            <button onClick={() => this.editContent(editAuthor, editId)}>
              Save
            </button>
          </div>
        ) : null}
        {/* {true  ?  <Loader/> : null} */}
        {availableBooks.map(book => (
          <div style={{ wordSpacing: 9 }} className="data" key={book.name}>
            <strong>Name:</strong> {book.bookName} <strong>Author:</strong>{" "}
            {book.bookAuthor}
            <h5>Date: {moment(book.date).format("DD.MM.YYYY")}</h5>
            <div className="book-buttons">
              <button onClick={() => this.props.removeBook(book.id)}>
                Remove Book
              </button>
              <button
                onClick={() => this.setEditState(book.bookAuthor, book.id)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
        <PaginationRounded />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  availableBooks: state.books.availableBooks
});

const mapDispatchToProps = dispatch => ({
  addBook: (book) => dispatch(addBook(book)),
  removeBook: id => dispatch(removeBook({ id })),
  editContent: (name, id) => dispatch(editContent({ name, id })),
  getAllBooks: () => {
    dispatch(getAllBooks());
  },
  getName: book => dispatch(getName(book)),
  getAuthor: book => dispatch(getAuthor(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
