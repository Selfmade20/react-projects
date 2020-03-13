import axios from 'axios';

export function addBook(book) {
    return async dispatch => {

        try {
            const { data } = await axios.post('http://localhost:5000/books', book)
            console.log("bookName", data)
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
            dispatch({ type: "REMOVE_BOOK", payload: id })
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
            await axios.put(`http://localhost:5000/books/${editValues.id}`, editValues);
            dispatch({ type: "EDIT_CONTENT", payload: editValues })
        } catch (e) {
            console.log(e);
        }
    }
}
export function getName(bookName) {
    return async dispatch => {
        try {
            const { data } = await axios.get(`http://localhost:5000/books/${bookName}`)
            dispatch({
                type: 'GET_BOOK_NAME', payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getAuthor(bookAuthor) {
    return async dispatch => {
        try {
            const { data } = await axios.get(`http://localhost:5000/books'/bookAuthor/${bookAuthor}`)
            dispatch({
                type: 'GET_BOOK_AUTHOR', payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
