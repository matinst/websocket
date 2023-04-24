const socket = new WebSocket("ws://localhost:3000")
socket.onopen = (event) =>{
    socket.send("Hello Server")
}
socket.onmessage = (event) => {
    document.write(event.data)
}