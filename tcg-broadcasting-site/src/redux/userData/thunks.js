export const getAllData = () => {
    return async dispatch => {
        const dataResult = await fetch('http://ac88a44a6935711e982b602f197ebe6f-1529281652.eu-west-2.elb.amazonaws.com/person/')
        const data = await dataResult.json()

        dispatch({type: "ENTER_USERS", payload: [ ...data.data] })
    }
}

export const enterName = (name) => {
    return {
        type :"ENTER_USER",
        payload: name,
    }
}

export const addPost = (post) => {
    return {
        type: "ENTER_POST",
        payload: post,
    }
}