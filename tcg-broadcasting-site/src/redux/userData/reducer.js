import User from "../../Containers/User/index";


const initialState = {
    all: [],
    id: "1"
}

export default function counter(state = initialState, action) {
    switch (action.type) {
        case "ENTER_USERS": {

            return { ...state, all: action.payload }
        }

        case "ENTER_USER": {
            const newState = {...state, all: [...state.all, action.payload], id: 1}
            return newState;
        }
        default: 
        return state;
    }
}