const draggableElement = document.body.querySelector('.firstFigure');
const dropContainers = document.body.querySelectorAll('.square');
let score = 0;
const squareObject = {
    top: {
        topLeft: false,
        topCenter: false,
        topRight: false,
    },
    middle: {
        middleLeft: false,
        middleCenter: false,
        middleRight: false,
    },
    bottom: {
        bottomLeft: false,
        bottomCenter: false,
        bottomRight: false,
    }
}

function updateScore() {
    document.body.querySelector('.counterPoints').innerHTML = `${score}`
}

draggableElement.draggable = true;

draggableElement.addEventListener("dragstart", (e) => {
    e.target.classList.add("dragFigure")
})

draggableElement.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragFigure")
})

dropContainers.forEach((square) => {
    square.addEventListener("dragover", (e) => {
        e.preventDefault();
        const currentElement = e.target;
    })

    square.addEventListener("drop", (e) => {
        e.preventDefault();
        const dropElement = e.target;
        fillSquare(dropElement)
        score++
        updateScore()
    })
})

function fillSquare(square) {
    switch (square.id) {
        case 'bottomCenter':
            squareObject.bottom.bottomCenter = true;
            break;
        case 'bottomLeft':
            squareObject.bottom.bottomLeft = true;
            break;
        case 'bottomRight':
            squareObject.bottom.bottomRight = true;
            break;
        case 'middleLeft':
            squareObject.middle.middleLeft = true;
            break;
        case 'middleCenter':
            squareObject.middle.middleCenter = true;
            break;
        case 'middleRight':
            squareObject.middle.middleRight = true;
            break;
        case 'topLeft':
            squareObject.top.topLeft = true;
            break;
        case 'topCenter':
            squareObject.top.topCenter = true;
            break;
        case 'topRight':
            squareObject.top.topRight = true;
            break;
        default:
            break;
    }
    clearTimeout(checkFill)
    square.classList.add("filledSquare")
    setTimeout(checkFill, 1000)
}

function checkFill() {
    if (squareObject.bottom.bottomCenter && squareObject.bottom.bottomLeft && squareObject.bottom.bottomRight) {
        dropContainers.forEach((item, index) => {
            if (index == 6 || index == 7 || index == 8) {
                item.classList.remove('filledSquare');
                squareObject.bottom.bottomLeft = false;
                squareObject.bottom.bottomCenter = false;
                squareObject.bottom.bottomRight = false;
            }
        })
        score = score + 3;
        updateScore()
    }
    if (squareObject.middle.middleCenter && squareObject.middle.middleLeft && squareObject.middle.middleRight) {
        dropContainers.forEach((item, index) => {
            if (index == 3 || index == 4 || index == 5) {
                item.classList.remove('filledSquare');
                squareObject.middle.middleLeft = false;
                squareObject.middle.middleCenter = false;
                squareObject.middle.middleRight = false;
            }
        })
        score = score + 3;
        updateScore()
    }
    if (squareObject.top.topCenter && squareObject.top.topLeft && squareObject.top.topRight) {
        dropContainers.forEach((item, index) => {
            if (index == 0 || index == 1 || index == 2) {
                item.classList.remove('filledSquare');
                squareObject.top.topLeft = false;
                squareObject.top.topCenter = false;
                squareObject.top.topRight = false;
            }
        })
        score = score + 3;
        updateScore()
    }
    if (squareObject.top.topLeft && squareObject.middle.middleLeft && squareObject.bottom.bottomLeft) {
        dropContainers.forEach((item, index) => {
            if (index == 0 || index == 3 || index == 6) {
                item.classList.remove('filledSquare');
                squareObject.top.topLeft = false;
                squareObject.middle.middleLeft = false;
                squareObject.bottom.bottomLeft = false;
            }
        })
        score = score + 3;
        updateScore()
    }
    if (squareObject.top.topCenter && squareObject.middle.middleCenter && squareObject.bottom.bottomCenter) {
        dropContainers.forEach((item, index) => {
            if (index == 1 || index == 4 || index == 7) {
                item.classList.remove('filledSquare');
                squareObject.top.topCenter = false;
                squareObject.middle.middleCenter = false;
                squareObject.bottom.bottomCenter = false;
            }
        })
        score = score + 3;
        updateScore()
    }
    if (squareObject.top.topRight && squareObject.middle.middleRight && squareObject.bottom.bottomRight) {
        dropContainers.forEach((item, index) => {
            if (index == 2 || index == 5 || index == 8) {
                item.classList.remove('filledSquare');
                squareObject.top.topRight = false;
                squareObject.middle.middleRight = false;
                squareObject.bottom.bottomRight = false;
            }
        })
        score = score + 3;
        updateScore()
    }

}




