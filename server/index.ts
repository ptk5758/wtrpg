import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import SocketManager from './src/socket/socket'
import route from './src/routes/routes'
const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 5000
const socketManager : SocketManager = new SocketManager(server)
app.use(route)
server.listen(PORT, () => { console.log(`PORT [${PORT}] SERVER OPEN!`) })