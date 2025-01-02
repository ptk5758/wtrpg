import { Server, ServerOptions } from "socket.io"
import http from 'http'
const SERVER_OPTION : Partial<ServerOptions> = {
    cors : {
        origin : ["http://localhost:3000"]
    }
}
export default class SocketManager
{    
    static instance : SocketManager | null
    static get() {
        if (this.instance == null) throw new Error("Socket Manager Instance of null")
        return this.instance
    }
    public io : Server
    constructor(server : http.Server) {
        this.io = new Server(server, SERVER_OPTION)
        SocketManager.instance = this
        this.initialize()
    }
    initialize() {
        this.io.on("connection", (socket) => {
            console.log(`Connected! : [${socket.id}] Socket Count : ${this.io.engine.clientsCount}`)
        })
    }
}