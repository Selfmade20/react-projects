
const initialData = {
    
    userName: ''
};


export default function userName(state = initialData, action ) {
    switch(action.type){
        case "ENTER_NAME": 
        return {
            ...state,initialData: [...state.initialData, {userName: action.payload.userName}]
        }
        default: {
            return state;
        }
    }
} 