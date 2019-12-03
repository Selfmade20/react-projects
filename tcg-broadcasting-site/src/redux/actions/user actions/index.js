export function enterName(name) {
    return {
        type: "ENTER_NAME",
        payload: name
    }
}

export function enterMessage(message) {
    return {
        type: "ENTER_MESSAGE",
        payload: message
    }
 }
