const c = document.getElementById("wf")
const ctx = c.getContext("2d")

const fontSize = 12
const verticalTextAllignment = 5
const arcRadius = 50
const rectWidth = 100
const rectHeight = 50
const _180 = 2 * Math.PI
const arrowHeadLength = 7 // in pixels

ctx.font = fontSize + "px Arial MS"
ctx.textAlign = "center"

const shape = {
    newPlace(x, y, name) {
        ctx.beginPath()
        ctx.arc(x, y, arcRadius, 0, _180)
        ctx.stroke()

        ctx.fillText(name, x, y + verticalTextAllignment)

        return {
            name: name,
            coordinates: {x, y},
            leftEdge: {x: x - arcRadius, y: y},
            rightEdge: {x: x + arcRadius, y: y},
        }
    },

    newTransition(x, y, name) {
        const newY = y - rectHeight / 2
        ctx.rect(x, newY, rectWidth, rectHeight)
        ctx.stroke()

        ctx.fillText(name, x + rectWidth / 2, newY + rectHeight / 2 + verticalTextAllignment)

        return {
            name: name,
            coordinates: {x: x + rectWidth / 2, y},
            leftEdge: {x: x, y: y},
            rightEdge: {x: x + rectWidth, y: y},
        }
    },

    newArrow(from, to) {
        const len = arrowHeadLength;   
        ctx.beginPath();
        const angle = Math.atan2(to.y - from.y,to.x - from.x);
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.lineTo(to.x - len * Math.cos(angle - Math.PI/6), to.y - len * Math.sin(angle - Math.PI/6));
        ctx.moveTo(to.x, to.y);
        ctx.lineTo(to.x - len * Math.cos(angle + Math.PI/6), to.y - len * Math.sin(angle + Math.PI/6));
        ctx.stroke();
    }
}