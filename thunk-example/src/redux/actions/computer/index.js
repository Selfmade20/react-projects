import axios from 'axios';


export function removeComputer(id) {
    return async dispatch => {
        try{
            await axios.delete(`http://localhost:5000/computers/${id}`)
            dispatch({type : "REMOVE_COMPUTER" , payload : {id}})
        }catch(e){
            console.log(e);
        }

        // dispatch({ type: "ADD_USERS", payload: [...users.data] })
    }
}


export function  getAllComputers() {
    return async dispatch => {
        try{
            const {data} =  await axios.get('http://localhost:5000/computers');
            console.log("all computes" , data);
            dispatch({type : "GET_ALL_COMPUTERS" , payload : data})
        }catch(e){
            console.log(e);
        }

        // dispatch({ type: "ADD_USERS", payload: [...users.data] })
    }
}

export function addComputer(name) {
    return async dispatch => {
        try{
            const {data} = await axios.post('http://localhost:5000/computers/add', {name})
            dispatch({type : "ADD_COMPUTER" , payload : data})
        }catch(e){
            console.log(e);
        }

        // dispatch({ type: "ADD_USERS", payload: [...users.data] })
    }
}

