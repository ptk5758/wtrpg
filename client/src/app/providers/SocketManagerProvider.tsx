import { createContext, PropsWithChildren, useContext, useEffect, useRef } from "react"
import SocketManager from "../../shared/lib/socket-manager"

const socketContext = createContext<null | SocketManager>(null)

type Prop = PropsWithChildren<{url : string}>

export function SocketManagerProvider({ url, children } : Prop) {
    const ref = useRef<SocketManager | null>(null)
    useEffect(() => {
        ref.current = new SocketManager(url)
        return () => {
            if (ref.current) {
                ref.current.close()
            }
        }
    }, [])
    
    return (
        <socketContext.Provider value={ref.current}>
            { children }
        </socketContext.Provider>
    )
}

export function useSocketManager()
{
    const context = useContext(socketContext)
    if (!context) throw new Error("SocketManager undefined error")
    return context
}