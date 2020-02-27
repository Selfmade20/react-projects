import axios from 'axios'

export function addUser(username) {
    return async dispatch => {
        try {
            const { data } = await axios.post('http://localhost:5000/users/', { username })
            dispatch({ type: "ADD_USER", payload: data })
        } catch (error) {
            console.log(error);
        }
    }
}


export function getAllUsers() {
    return async dispatch => {
        try {
            const { data } = await axios.get('http://localhost:5000/users');
            dispatch({ type: "GET_ALL_USERS", payload: data })
        } catch (error) {
            console.log(error);
        }
    }
}



export function removeUser(id) {
    return async dispatch => {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`)
            dispatch({type: "REMOVE_USER", payload: {id}})
        }catch(error){
            console.log(error);
        }
 }
}