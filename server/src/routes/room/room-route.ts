import { Router } from "express"
import SocketManager from "../../socket/socket"
const room = Router()

room.get("/", (rea, res) => {
    const socketManager = SocketManager.get()
    const rooms = socketManager.io.of("/").adapter.rooms
    console.log(rooms)
    res.send({message : ".."})
})
export default room