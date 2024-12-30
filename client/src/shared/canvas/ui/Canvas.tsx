import React, { useEffect } from "react"
import CanvasManager from "../api/canvas-manager"
function Canvas()
{
    const ref = React.useRef<HTMLCanvasElement>(null)
    useEffect(()=>{
        if (ref.current) {
            const canvas = ref.current
            const manager = new CanvasManager(canvas)
        }
    }, [])
    return (
        <canvas style={{border : "1px solid #000000"}} ref={ref}></canvas>
    )
}
export default Canvas