
  export const addComputer = (computer) => {
    console.log('abcde', computer)
    return {
      type: "ADD_COMPUTER",
      payload: computer
    }
  }

  export const removeComputer = (computer) => {
    console.log('ace', computer)
    return {
      type: "REMOVE_COMPUTER",
      payload: computer
    }
  }