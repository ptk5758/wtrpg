export default class CanvasManager {

    private canvas : HTMLCanvasElement;
    private context : CanvasRenderingContext2D;
    private isDrag : boolean;
    private mousePosition : {x : number, y : number}
    private set = new Set<{x:number, y:number}>()
    constructor (element : HTMLCanvasElement) {
        this.canvas = element
        const t = this.canvas.getContext("2d")
        if (!t) 
            throw new Error("Canvas Context null error")
        this.context = t
        this.canvas.addEventListener("mousedown", this.onMouseDown)
        this.canvas.onmousemove = this.onMouseMove
        this.canvas.onmouseup = this.onMouseUp
        this.canvas.onmouseleave = this.onMouseLeave
        this.isDrag = false
        this.mousePosition = {x : 0, y : 0}
    }
    onMouseDown = (e : MouseEvent) => {
        this.isDrag = true
        this.mousePosition = {
            x: e.offsetX,
            y: e.offsetY
        }
    }
    onMouseMove = (e : MouseEvent) => {
        if (!this.isDrag) return
        const now = {x : e.offsetX, y : e.offsetY}
        this.set.add(now)
        this.draw(now.x, now.y)
        this.mousePosition.x = now.x
        this.mousePosition.y = now.y
    }
    onMouseUp = (e : MouseEvent) => {
        this.isDrag = false
        this.set.forEach((item) => {
            console.log(item)
        })
        this.set.clear()
    }
    onMouseLeave = (e : MouseEvent) => {
        this.isDrag = false
        this.set.clear()
    }
    draw(x : number, y : number)
    {
        this.context.beginPath()
        this.context.moveTo(this.mousePosition.x, this.mousePosition.y)
        this.context.lineWidth = 2
        this.context.lineTo(x, y)
        this.context.stroke()
    }
}