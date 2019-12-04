
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
                ...state, userData: [...state.userDate, {
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

        default:
            return state;
    }
}