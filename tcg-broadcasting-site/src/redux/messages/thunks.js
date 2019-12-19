import Axios from "axios";

export const addPost = (message) => {
    return async dispatch => {
        try {
            console.log("Ayeye", message)
            await Axios.post("http://ac88a44a6935711e982b602f197ebe6f-1529281652.eu-west-2.elb.amazonaws.com/chat/person/",
            message )
                
        }catch(error){
            console.log(error);
        }
    }
}

export const getPosts = () => {
    return async dispatch => { 
        try{
            const posts = await Axios.get("http://ac88a44a6935711e982b602f197ebe6f-1529281652.eu-west-2.elb.amazonaws.com/chat/person/")
            dispatch({
                type: "GET_POSTS",
                payload: [...posts.data]
            })
        }catch(error){
            console.log(error)
        }
    }
}