export function addUser(name) {
    return {
        type: "ADD_USER",
        payload: name
    }
}

export function removeUser(id) {
    return {
        type: "REMOVE_USER",
        payload: id
    }
}