const xStart = 100
const yStart = 75

// uncomment to see the example
// const place1 = shape.newPlace(xStart, yStart, "name")
// const transition1 = shape.newTransition(place1.rightEdge.x + 50, place1.rightEdge.y, "transition");
// const arrow1 = shape.newArrow(place1.rightEdge, transition1.leftEdge)

const firstStep = (() => {
    for (const step of data.steps) {
        if (step.position === "FIRST") {
            return step
        }
    }
})()

const currentStep = firstStep;

while (true) {
    // I'm bored
}