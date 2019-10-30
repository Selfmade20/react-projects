import Users from "../../Containers/Users"

const initialState = {
  all: [],
  id: "1",
  date: new Date().toLocaleTimeString()
}

export default function counter(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case "ADD_USERS": {
      if (state.initialState === 0) {
        return { ...state, all: action.payload, id: 1, date: new Date().toLocaleTimeString() }
      }
      return { ...state, all: action.payload }
    }
    case "ADD_USER": {
      const newState = { ...state, all: [...state.all, action.payload], id: 1, date: new Date().toLocaleTimeString() }
      return newState;
    }
    case "REMOVE_USER": {
      return { all: [...state.all.filter(user => user.id !== action.payload.id)] }
    }
    default:
      return state
  }
}