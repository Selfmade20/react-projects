const inititalState = {
  computers: [{
    name: "mac"
  }]
}


export default function addComputer(state = inititalState, action) {
  switch (action.type) {
    case "ADD_COMPUTER": {
      return {...state , computers: [...state.computers, {name :action.payload.name} ]}
    }
    case "REMOVE_COMPUTER": {
      return { computers: [...state.computers.filter(computer => computer.name !== action.payload.name) ]}
    }
    default:
      return state
  }
}

