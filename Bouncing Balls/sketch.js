//VARIABLES

var ballB = {
    x: 180,
    y: 150,
    w: 20,
    h: 40,
    xSpeed: -5
}

var ballR = {
    x: 130,
    y: 400,
    w: 40,
    h: 20,
    ySpeed: -4
}

var ballG = {
    x: 600,
    y: 300,
    w: 40,
    h: 40,
    xSpeed: 2.5,
    ySpeed: 2.5
}

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);

}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    background("white");

    ballB.x += ballB.xSpeed;
    if (ballB.x - ballB.w < 0) {
        ballB.xSpeed = 5;
    }
    if (ballB.x + ballB.w > width) {
        ballB.xSpeed = -5;
    }


    ballR.y += ballR.ySpeed;
    if (ballR.y - ballR.h < 0) {
        ballR.ySpeed = 4;
    }
    if (ballR.y + ballR.h > height) {
        ballR.ySpeed = -4;
    }


    ballG.x += ballG.xSpeed;
    if (ballG.x > width - ballG.w / 2 || ballG.x < ballG.w / 2) {
        ballG.xSpeed = ballG.xSpeed * -1;
    }

    ballG.y += ballG.ySpeed;
    if (ballG.y > height - ballG.h / 2 || ballG.y < ballG.h / 2) {
        ballG.ySpeed = ballG.ySpeed * -1;
    }



    fill(0, 0, 255); //Blue
    ellipse(ballB.x, ballB.y, 2 * ballB.w, ballB.h); // Horizontal circle

    fill(255, 0, 0); //Red
    ellipse(ballR.x, ballR.y, ballR.w, 2 * ballR.h); // Vertical circle

    fill(0, 225, 0); //Green
    ellipse(ballG.x, ballG.y, ballG.w, ballG.h); // Diagonal circle

}
