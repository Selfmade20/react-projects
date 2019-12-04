export const getAllData = () => {
    return async dispatch => {
        const dataResult = await fetch('http://ac88a44a6935711e982b602f197ebe6f-1529281652.eu-west-2.elb.amazonaws.com/chat/person/')
        const data = await dataResult.json()

        dispatch({type: "ADD_USER", payload: [ ...data.data] })
    }
}

export const enterName = (name) => {
    return {
        type :"ENTER_USER",
        payload: name,
    }
}

export const enterMessage = (message) => {
    return {
        type: "ADD_MESSAGE",
        payload: message,
    }
}