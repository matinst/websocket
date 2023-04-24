const http = require('http');
const webSocket = require('ws');
const server = http.createServer()
const ws = new webSocket.Server({ server })
ws.on("headers",(headers,req) => {
    console.log(headers);
})
ws.on("connection",(socket,req) => {
    socket.on("message",(event) => {
        console.log(event.toString())
    })
    socket.send("Hello Client! I'm WebSocket")
})
server.listen(3000, () => console.log("app is running on port 3000"))