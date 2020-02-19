export function addBook(name) {
    return {
        type: "ADD_BOOK",
        payload: { name }
    }
}
export function removeBook(id) {
    return {
        type: "REMOVE_BOOK",
        payload: id
    }
}

export function editContent(name) {
    return {
        type: "EDIT_CONTENT",
        payload: { name }
    }
}