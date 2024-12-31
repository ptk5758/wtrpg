import React from "react"
import { Canvas } from "../shared"
import { io } from 'socket.io-client'
function App() : React.JSX.Element {
    return (
        <div>
            <h1>W - TRPG</h1>
            <Canvas/>
            <button onClick={async ()=>{
                const socket = io(`ws://localhost:5000`)
                socket.on("data", (data)=>{
                    console.log(`recive data : ${data}`)
                })
            }}>test</button>
        </div>
    )
}
export default App