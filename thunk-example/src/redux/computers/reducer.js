const inititalState = { computers:[ {name : "" }]  }

export default function computers(state = inititalState, action) {
  console.log("state" ,state)
  switch (action.type) {
    case "ADD_COMPUTER": {
      return { ...state, all: action.payload }
    }
    case "ADD_COMPUTER": {
      const newState = { ...state, all: [...state.all, action.payload] }
      return newState;
    }
    default:
      return state
  }
}

