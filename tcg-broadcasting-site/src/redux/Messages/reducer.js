const initialState = {
    listOfPosts: [],
}

export default function messagesReducer (state = initialState, action) {
    switch(action.type) {
        case "GET_POSTS" : {
            return {
                ...state, listOfPosts: action.payload
            }
        }
        default: 
        return state
    }
}