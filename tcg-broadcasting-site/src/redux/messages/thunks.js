import Axios from "axios";
const url = "ws://ac88a44a6935711e982b602f197ebe6f-1529281652.eu-west-2.elb.amazonaws.com/chat/"
var socket = new WebSocket(url);
var listOfMessage = [];

export const addPost = (message) => dispatch => {
    socket.send(JSON.stringify(message))
}

export const getPosts = () => dispatch => {
    socket.onopen = function (event) {
        console.log("event open", event);
    };

    socket.onmessage = function (event) {
        const messages = JSON.parse(event.data);
        listOfMessage = messages;
    }
    dispatch({
        type: "GET_POSTS",
        payload: listOfMessage

    })
}