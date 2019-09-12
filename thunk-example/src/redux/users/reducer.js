const inititalState = { all: [ ] }

export default function counter(state = inititalState, action) {
  console.log(action)
  switch (action.type) {
    case "ADD_USERS": {
      return { ...state, all: action.payload }
    }
    case "ADD_USER": {
      console.log('adding user')
      const newState = { ...state, all: [...state.all, action.payload] }
      console.log('new state', newState)
      return newState;
    }
    default:
      return state
  }
}