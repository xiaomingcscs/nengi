class ViewAABB {
    x: number
    y: number
    halfWidth: number
    halfHeight: number

    constructor(x: number, y: number, halfWidth: number, halfHeight: number) {
        this.x = x
        this.y = y
        this.halfWidth = halfWidth
        this.halfHeight = halfHeight
    }
}

export { ViewAABB }