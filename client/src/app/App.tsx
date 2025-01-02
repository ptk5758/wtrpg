import React from "react"
import useSocket, { Canvas } from "../shared"
import { io } from 'socket.io-client'
import { CreateRoomButton } from "../featured/room"
import { Board } from "../widgets"
import { SocketManagerProvider } from "./providers/SocketManagerProvider"
function App() : React.JSX.Element {
    return (
        <SocketManagerProvider url="ws://localhost:5000">
            <div>
                <Board/>
            </div>
        </SocketManagerProvider>
        
    )
}
export default App

{/* <h1>W - TRPG</h1>
        <Canvas/>
        <button onClick={async ()=>{
            const socket = io(`ws://localhost:5000`)
            socket.on("data", (data)=>{
                console.log(`recive data : ${data}`)
            })
        }}>test</button> */}
        {/* <button onClick={async () => {
            const response = await fetch("http://localhost:5000")
            const data = await response.json()
            console.log(data)
    }}>test</button> */}