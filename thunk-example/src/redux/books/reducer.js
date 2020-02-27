const initialState = {
  availableBooks: []
}

export default function books(state = initialState, action) {
  switch (action.type) {
    case "ADD_BOOK": {
      return { ...state, availableBooks: [...state.availableBooks, action.payload] }
    }
    case "REMOVE_BOOK": {
      return { availableBooks: [...state.availableBooks.filter(book => book._id !== action.payload.id)] }
    }
    case "EDIT_CONTENT": {
      const indexOfPosition = state.availableBooks.findIndex(book => book._id === action.payload.name.id);
      state.availableBooks[indexOfPosition].author = action.payload.name.name;
      return { ...state, availableBooks: [...state.availableBooks] };
    }
    case  "GET_ALL_BOOKS":
      return{...state, availableBooks: [...action.payload]}
    default: {
      return state
    }
  }
}