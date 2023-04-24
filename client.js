const socket = new WebSocket("ws://localhost:3000")
socket.onopen = (event) =>{
    socket.send("Hello Server")
}
socket.onmessage = (event) => {
    socket.send("I want to read your data")
    document.write(event.data)
}