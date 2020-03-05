const initialState = {
  users: []
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_USERS": {
      return { ...state, users: [...action.payload] }
    }
    case "ADD_USER": {
      return { ...state, users: [...state.users, action.payload] }
    }
    case "REMOVE_USER": {
      return { users: [...state.users.filter(user => user.id !== action.payload.id)] }
    }
    default:
      return state
  }
}