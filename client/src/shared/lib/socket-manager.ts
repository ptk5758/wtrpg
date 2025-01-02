import { io, Socket } from "socket.io-client";

export default class SocketManager {
    io : Socket
    constructor(url : string) {
        this.io = io(url)
    }
    close() {
        this.io.close()
    }
}