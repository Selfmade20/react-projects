const initialState = {
  computers: [{
    name:"MacBook",
    id: 1,
    date: new Date().toLocaleTimeString()
  }]
}


export default function addComputer(state = initialState, action) {
  switch (action.type) {
    case "ADD_COMPUTER": {
      if(state.computers.length === 0){
        return {...state, computers: [...state.computers, {name :action.payload.name, id: 1, date: new Date().toLocaleTimeString() }] }
      }
    }
      return {...state , computers: [...state.computers,
       {name :action.payload.name, id: state.computers[state.computers.length -1].id +1 , date: new Date().toLocaleTimeString()}]}
    
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

