export const getAllUsers = () => {
  return async dispatch => {
    const usersResult = await fetch('https://localhost:3000/users/add')
    const users = await usersResult.json()
    console.log("Hello", users)

    dispatch({ type: "ADD_USERS", payload: [ ...users.data ]})
  }
}

export const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user
  }
}

export const removeUser = (user) => {
  return {
    type: "REMOVE_USER",
    payload: user
  }
}