const initialState = {
    listOfPosts: [],
}

export default function listOfPosts (state = initialState, action) {
    switch(action.type) {
        case "GET_POSTS" : {
            const newState = {...state, listOfPosts: [...action.payload]}
            return newState
        }
        default: 
        return state
    }
}