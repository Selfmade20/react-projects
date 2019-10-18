

export function removeComputer(name) {
    return {
        type: "REMOVE_COMPUTER",
        payload: { name }
    }
}

export function addComputer(name) {
    return {
        type: "ADD_COMPUTER",
        payload: { name }
    }
}