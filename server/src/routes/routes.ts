import { Router } from "express"
import room from "./room/room-route"
const route = Router()
route.use("/room", room)
route.use("*", (req, res) => {
    res.status(404).json({message : "Page Not Found"})
})
export default route