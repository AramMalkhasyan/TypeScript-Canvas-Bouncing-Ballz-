"use strict";
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight;
class Ball {
    constructor(positionX, positionY, radius, yDelta, gravity) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.radius = radius;
        this.yDelta = yDelta;
        this.gravity = gravity;
    }
}
let arrayOfBalls = [];
function getMousePositionX(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    return x;
}
function getMousePositionY(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let y = event.clientY - rect.top;
    return y;
}
canvas.addEventListener("mousedown", e => {
    const xPos = getMousePositionX(canvas, e);
    const yPos = getMousePositionY(canvas, e);
    arrayOfBalls.push(new Ball(xPos, yPos, 50, 1, 1));
    console.log(arrayOfBalls);
});
function animate() {
    context === null || context === void 0 ? void 0 : context.clearRect(0, 0, window.innerWidth, canvas.height);
    arrayOfBalls.forEach((ball) => {
        if (context) {
            if (ball.positionY + ball.radius + ball.yDelta > canvas.height) {
                ball.yDelta = -ball.yDelta * 0.9;
            }
            else {
                ball.yDelta += ball.gravity;
            }
            ball.positionY += ball.yDelta;
            context.beginPath();
            context.arc(ball.positionX, ball.positionY, ball.radius, 0, Math.PI * 2, false);
            context.fillStyle = "red";
            context.fill();
            context.stroke();
            context.closePath();
        }
    });
    requestAnimationFrame(animate);
}
animate();
