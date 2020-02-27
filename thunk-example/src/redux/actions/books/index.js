import axios from 'axios';

export function addBook(book) {
    return async dispatch => {
        console.log("bookName", book)
        try {
            const { data } = await axios.post('http://localhost:5000/books', { book })
            dispatch({ type: "ADD_BOOK", payload: data })
        } catch (e) {
            console.log(e);
        }
    }
}
export function removeBook(id) {
    return async dispatch => {
        try {
            console.log("Ifff", id)
            await axios.delete(`http://localhost:5000/books/${id.id}`)
            dispatch({ type: "REMOVE_BOOK", payload: id  })
        } catch (e) {
            console.log(e);
        }
    }
}

export function getAllBooks() {
    return async dispatch => {
        try {
            const { data } = await axios.get('http://localhost:5000/books');
            dispatch({ type: "GET_ALL_BOOKS", payload: data })
        } catch (e) {
            console.log(e)
        }
    }
}


export function editContent(editValues) {
    return async dispatch => {
        console.log("IDS", editValues)
        try {
            await axios.put(`http://localhost:5000/books/${editValues.id}` , editValues);
            // dispatch({ type: "GET_ALL_BOOKS", payload: name })
        } catch (e) {
            console.log(e);
        }
    }
}
