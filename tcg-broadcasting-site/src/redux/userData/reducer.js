//import User from '../../Containers/User'

const initialState = {
    userNames: [
        {
            name: "",
            id: 1
        }
    ],

}

export default function namesOfUsers(state = initialState, action) {
    switch (action.type) {
        case "ENTER_USERS": {
            const {name} = action.payload;
            return { ...state, userNames: [...state.userNames,{
              name:name  
            }]}
        }

        // case "ENTER_USER": {
        //     const newState = { ...state, all: [...state.all, action.payload] }
        //     return newState;
        // }
        default:
            return state;
    }
}