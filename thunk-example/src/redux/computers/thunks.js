
export const addComputer = (computer) => {
  return {
    type: "ADD_COMPUTER",
    payload: computer
  }
}

export const removeComputer = (computer) => {
  return {
    type: "REMOVE_COMPUTER",
    payload: computer
  }
}