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

if (!firstStep) {
    console.error('It would be nice if we had a FIRST step')
}

const findExitingMoves = (stepName) => {
    const foundMoves = []
    for (move of data.moves) {
        if (move.from.name === stepName) {
            foundMoves.push(move)
        }
    }

    return foundMoves
}

const findTo = (toName) => {
    for (step of data.steps) {
        if (step.name === toName) {
            return step
        }
    }
}

let currentStep = firstStep;
let currentPlace = null;
let currentTransition = null;
let currentX = xStart
let currentY = yStart

while (true) {
    console.log('while')
    currentPlace = shape.newPlace(currentX, currentY, currentStep.name)
    currentX = currentPlace.coordinates.x + 250
    // currentY = currentPlace.coordinates.y

    if (currentTransition) {
        shape.newArrow(currentTransition.rightEdge, currentPlace.leftEdge)
    }

    let exitingMoves = findExitingMoves(currentStep.name)

    currentStep = null
    for (exitingMove of exitingMoves) {
         if (exitingMove.isBackward) {
             // TODO: render backward moves and steps
         } else {
            currentTransition = shape.newTransition(currentPlace.rightEdge.x + 30, currentPlace.rightEdge.y, exitingMove.name)
            shape.newArrow(currentPlace.rightEdge, currentTransition.leftEdge)

            currentStep = findTo(exitingMove.to.name)
         }
    }

    if (!currentStep) {
        break;
    }
}