const inititalState = {
  computers: [{
    name: "MacBook",
    id: 1
  }]
}


export default function addComputer(state = inititalState, action) {
  switch (action.type) {
    case "ADD_COMPUTER": {
      return {...state , computers: [...state.computers, {name :action.payload.name, id: state.computers[state.computers.length -1].id +1}]}
    }
    case "REMOVE_COMPUTER": {
      return { computers: [...state.computers.filter(computer => computer.name !== action.payload.name) ]}
    }
    case "EDIT_CONTENT": {
      return state
    }
    default:
      return state
  }
}

