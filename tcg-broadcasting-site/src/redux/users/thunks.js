import Axios from 'axios'


export const postAdded = (message) => {
    return async dispatch => {
        try {
            await Axios.post("http://ac88a44a6935711e982b602f197ebe6f-1529281652.eu-west-2.elb.amazonaws.com/chat/person/", message.message);
            dispatch({
                type: "ADD_MESSAGE",
                payload: [...message]
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}


export const showPosts = () => {
    return async dispatch => {
        try {
            const messages = await Axios.get("http://ac88a44a6935711e982b602f197ebe6f-1529281652.eu-west-2.elb.amazonaws.com/chat/person/")
            dispatch({
                type: "GET_MESSAGES",
                payload: [...messages.data]
            })
        } catch (error) {
            console.log(error)
        }
    }
}