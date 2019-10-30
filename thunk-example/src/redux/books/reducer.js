const initialState = {
  availableBooks: [{
    name: "Atomic Habits",
    author: "James Clear",
    id: 1,
    date: new Date().toLocaleTimeString()
  }]
}

export default function books(state = initialState, action) {
  switch (action.type) {
    case "ADD_BOOK": {
      if(state.availableBooks.length === 0) {
        return {...state, availableBooks: [...state.availableBooks, {name: action.payload.name.name, author: action.payload.name.author, id: 1, date: new Date().toLocaleTimeString()}]}
      }
      return {
        ...state, availableBooks: [...state.availableBooks,
        { name: action.payload.name.name, author: action.payload.name.author, id: state.availableBooks[state.availableBooks.length - 1].id + 1,  date: new Date().toLocaleTimeString() }]
      }
    }
    case "REMOVE_BOOK": {
      return { availableBooks: [...state.availableBooks.filter(book => book.id !== action.payload.id)] }
    }
    case "EDIT_CONTENT": {
      const indexOfPosition = state.availableBooks.findIndex(book => book.id == action.payload.name.id);
      state.availableBooks[indexOfPosition].author = action.payload.name.name;
      return { ...state, availableBooks: [...state.availableBooks] };
    }
    default: {
      return state
    }
  }
}