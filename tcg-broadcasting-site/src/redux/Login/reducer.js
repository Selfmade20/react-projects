const initialState = {
    userName: "",
}

export default function userName (state = initialState, action ) {
    switch(action.type){
        case "ENTER_NAME": {
            const {name} = action.payload;
            if(state.userName.length == 0){
                return { userName: name }
            }
        }
        return {
            userName: name
        }
        default : {
            return state
        }
    }
    
}