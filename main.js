let canvas = document.querySelector("canvas")
let context = canvas.getContext("2d")
let box = 32

canvas.width = window.screen.width
canvas.height = window.screen.height

let snake = []
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right"

function createBackgroundGame() {
    context.fillStyle = "lightgreen"
    context.fillRect(0, 0, 16 * box, 16 * box)
}

function createSnake() {
    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = "green"
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

document.addEventListener("keydown", update)

function update(event) {
    if (event.key == "ArrowUp" && direction != "down") direction = "up"
    
    if (event.key == "ArrowDown" && direction != "up") direction = "down"

    if (event.key == "ArrowLeft" && direction != "right") direction = "left"

    if (event.key == "ArrowRight" && direction != "left") direction = "right"

}

function startGame() {
    createBackgroundGame()
    createSnake()

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    if (direction == "right") snakeX += box
    if (direction == "left") snakeX -= box
    if (direction == "up") snakeY += box
    if (direction == "down") snakeY -= box

    snake.pop()

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead)
}

let game = setInterval(startGame, 100)