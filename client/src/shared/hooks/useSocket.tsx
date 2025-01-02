import { useEffect, useRef } from "react"
import { io, Socket } from "socket.io-client"

function useSocket()
{
    const socketRef = useRef<Socket | null>(null)

    useEffect(() => {
        socketRef.current = io("ws://localhost:5000")
        return () => {
            if (socketRef.current) {
                socketRef.current.close()
            }
        }
    }, [])
    return socketRef
}

export default useSocket