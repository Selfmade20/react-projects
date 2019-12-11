const initialState = {
    userName: "",
}

export default function loginReducer (state = initialState, action) {
    switch (action.type) {
        case "ENTER_NAME": {
            return {
                userName: action.payload
            }

        }
        default: {
            return state
        }
    }

}