import React, { Component } from 'react';
import { connect } from 'react-redux';
import addBook from '../Books';


class Books extends Component {
  render() {
    console.log('props', this.props)
    return <div className="books"><h1>Books</h1>
      {this.props.availableBooks.map(b => <div style={{ margin: '2rem', wordSpacing: '5px' }} key={b.name}>NAME {b.name} AUTHOR {b.author}</div>)}
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
  addBook: (name, author) => dispatch(addBook({ name, author }))
  })
  




export default connect(mapStateToProps, mapDispatchToProps)(Books)