
const initialState = {
    userData: [
        {
            name: "",
            messages: [],
            posts: []

        }
    ],

}

export default function listOfUsers(state = initialState, action) {
    switch (action.type) {
        case "ADD_USER": {
            console.log("Data", initialState.userData)
            return {
                ...state, posts: [...action.payload]
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