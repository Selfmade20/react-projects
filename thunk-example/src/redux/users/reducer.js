import Users from "../../containers/Users"

const inititalState = { 
  all: [ ], 
  id: "1"
}

export default function counter(state = inititalState, action) {
  console.log(action)
  switch (action.type) {
    case "ADD_USERS": {
      return { ...state, all: action.payload }
    }
    case "ADD_USER": {
      console.log('adding user')
      const newState = { ...state, all: [...state.all, action.payload ] }
      console.log('new state', newState)
      return newState;
    }
    case "REMOVE_USER": {
      return { all: [...state.all.filter(user => user['first_name'] !== action.payload) ]}
    }
    default:
      return state
  }
}