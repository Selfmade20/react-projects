/*
 * action types
 */

export const ADD_COMPUTER = 'ADD_COMPUTER'
export const ADD_BOOK = 'ADD_BOOK'
export const ADD_USER = 'ADD_USER'
export const REMOVE_COMPUTER = 'REMOVE_COMPUTER'
export const REMOVE_USER = 'REMOVE_USER'

/*
 * action creators
 */

export function addBook(name,author) {
  return {
    type: "ADD_BOOK",
    payload: { name, author }
  }
}
export function removeBook(name) {
  return {
    type: "REMOVE_BOOK",
    payload: name
  }
}
export function removeComputer(name){
  return {
    type: "REMOVE_COMPUTER",
    payload: { name }
  }
}

export function addComputer(name) {
  return {
    type: ADD_COMPUTER, 
    payload: { name }
   }
}


export function addUser(name) {
  return {
    type: "ADD_USER",
    payload: name
   }
}