/*
 * action types
 */

export const ADD_COMPUTER = 'ADD_COMPUTER'
// export cons?t ADD_BOOK = 'ADD_BOOK'
export const ADD_USER = 'ADD_USER'

/*
 * action creators
 */

export function addBook(name,author) {
  return {
    type: "ADD_BOOK",
    payload: { name, author }
  }
}

export function computerReducer(action) {
  return {
    type: ADD_COMPUTER,
    payload: { name }
   }
}

export function counter(action) {
  return { all }
}