const inititalState = {
  computers: [{
    name: ""
  }]
}


export default function computerReducer(state = inititalState, action) {
  switch (action.type) {
    case "ADD_COMPUTER": {
      return { computers: [...state.computers, {name :action.payload} ]}
    }
    case "REMOVE_COMPUTER": {
      return {computers: [...state.computers, {name :action.payload} ]}
    }
    default:
      return state
  }
}

