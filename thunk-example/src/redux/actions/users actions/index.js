export function addUser(name) {
    return {
        type: "ADD_USER",
        payload: name
    }
}

export function removeUser(name) {
    return {
        type: "REMOVE_USER",
        payload: name
    }
}