
  export const addComputer = (computer) => {
    console.log('abcde', computer)
    return {
      type: "ADD_COMPUTER",
      payload: computer
    }
  }