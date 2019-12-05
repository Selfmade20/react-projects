
const initialState = {
    userData: [
        {
            name: "",
            messages: [],

        }
    ],

}

export default function listOfUsers(state = initialState, action) {
    switch (action.type) {
        case "ADD_USER": {
            const { name } = action.payload;
            return {
                ...state, userData: [...state.userData, {
                    name: name
                }]
            }
        }

        case "ADD_MESSAGE": {
            const newState = {
                ...state, messages: [...action.payload]
            }
            return newState;
        }
        
        case "ENTER_NAME": {
          const newState = {
              ...state, name: [action.payload]
          }
        }

        default:
            return state;
    }
}