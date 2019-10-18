export function addBook(name) {
    return {
        type: "ADD_BOOK",
        payload: { name }
    }
}
export function removeBook(name) {
    return {
        type: "REMOVE_BOOK",
        payload: name
    }
}

export function editContent(name, id) {
    return {
        type: "EDIT_CONTENT",
        payload: { name }
    }
}