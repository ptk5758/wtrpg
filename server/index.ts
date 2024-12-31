import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
const app = express()
const server = http.createServer(app)
const io = new Server(server, {
    cors : {
        origin : "*"
    }
})
const PORT = process.env.PORT || 5000
io.on("error", (err)=>{
    console.error(err)
})
io.on("connection", (socket) => {    
    socket.emit("data", "test Value")    
})
app.get("/", (req, res) => { res.send({message : "Hello world"}) })
server.listen(PORT, () => { console.log(`PORT [${PORT}] SERVER OPEN!`) })   