const initialState = {
  availableBooks: [{
    name: "Atomic Habits",
    author: "James Clear",
    id: 1

  }]
}

export default function books(state = initialState, action) {
  switch (action.type){
    case "ADD_BOOK": {
      return {...state, availableBooks: [...state.availableBooks,
         {name: action.payload.name.name, author: action.payload.name.author,id: state.availableBooks[state.availableBooks.length - 1].id + 1 } ]}
    }
    case "REMOVE_BOOK": {
      return { availableBooks: [...state.availableBooks.filter(book => book.name !== action.payload.name) ]}
    }
    case "EDIT_CONTENT": {
      console.log("aacction" , action.payload)
      const indexOfPosition = state.availableBooks.findIndex(book => book.id == action.payload.name.id);
      state.availableBooks[indexOfPosition].name = action.payload.name.name;
      return {...state , availableBooks: [...state.availableBooks]};
    }
    default: {
      return state
    }
  }
}