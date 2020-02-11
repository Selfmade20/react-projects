

export function removeComputer(id) {
    return {
        type: "REMOVE_COMPUTER",
        payload: { id }
    }
}

export function addComputer(name) {
    return {
        type: "ADD_COMPUTER",
        payload: { name }
    }
}