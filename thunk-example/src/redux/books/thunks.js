
  export const addBook = (book) => {
    console.log('abcde', book)
    return {
      type: "ADD_BOOK",
      payload: book
    }
  }

  export const removeBook = (book) => {
    console.log('ace', book)
    return {
      type: "REMOVE_BOOK",
      payload: book
    }
  }shjh