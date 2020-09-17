var canvas;
var canvasContext;
var pipesX = 600;
var lowerPipeH = Math.random() * 200 + 175;
var pipeSpace = Math.random() * 50 + 150;
var gravity = 1;
var birdH = 250;
var timer = 0;
var jumped = 0;

window.onload = function () {
    canvas = document.getElementById('gb');
    canvasContext = canvas.getContext('2d');

    setInterval(game, 5);
}

function game() {
    move();
    draw();
    console.log(jumped);
}

function move() {
    timer++;
    pipesX--;

    if (pipesX + 100 <= 0) {
        pipesX = 600;
        lowerPipeH = Math.random() * 200 + 175;
        pipeSpace = Math.random() * 50 + 150;
    }

    if (birdH < 465 && jumped == 0) {
        birdH = birdH + gravity;
    }

    if (jumped == 1 && timer < 15) {
        birdH = birdH - 4;
    } else {
        jumped = 0;
    }

    document.body.onkeyup = function (e) {
        if (e.keyCode == 32) {
            jumped = 1;
            timer = 0;
        }
    }
}

function draw() {

    canvasContext.fillStyle = '#87ceeb';
    canvasContext.fillRect(0, 0, canvas.width, canvas.clientHeight);

    canvasContext.fillStyle = '#00b300';
    canvasContext.fillRect(pipesX, lowerPipeH, 70, 600);
    canvasContext.fillStyle = '#008100';
    canvasContext.fillRect(pipesX - 15, lowerPipeH, 100, 30);

    canvasContext.fillStyle = '#00b300';
    canvasContext.fillRect(pipesX, -600 + lowerPipeH - pipeSpace, 70, 600);
    canvasContext.fillStyle = '#008100';
    canvasContext.fillRect(pipesX - 15, lowerPipeH - pipeSpace, 100, 30);

    canvasContext.fillStyle = 'orange';
    canvasContext.fillRect(100, birdH, 35, 35);
}