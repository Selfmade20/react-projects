const initialState = {
  computers: []
}


export default function addComputer(state = initialState, action) {
  switch (action.type) {
    case "ADD_COMPUTER": {
      return { ...state, computers: [...state.computers, action.payload] }
    }
    case "REMOVE_COMPUTER": {
      return { computers: [...state.computers.filter(computer => computer._id !== action.payload.id)] }
    }
    case "GET_ALL_COMPUTERS": {
      return { ...state, computers: [...action.payload] }
    }
    default:
      return state
  }
}

