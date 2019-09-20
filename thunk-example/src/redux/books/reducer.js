const initialState = {
  availableBooks: [{
    name: "",
    author: ""

  }]
}

export default function books(state = initialState, action) {
  switch (action.type){
    case "ADD_BOOK": {
      return { availableBooks: [...state.availableBooks, action.payload.name ]}
    }
    case "REMOVE_BOOK": {
      return { availableBooks: [...state.availableBooks.filter(book => book.name !== action.payload.name) ]}
    }
    default: {
      return state
    }
  }
}