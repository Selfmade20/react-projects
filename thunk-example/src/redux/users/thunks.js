export const getAllUsers = () => {
  return async dispatch => {
    const usersResult = await fetch('https://reqres.in/api/users')
    const users = await usersResult.json()

    dispatch({ type: "ADD_USERS", payload: [ ...users.data ]})
  }
}

export const addUser = (user) => {
  console.log('asdf', user)
  return {
    type: "ADD_USER",
    payload: user
  }
}