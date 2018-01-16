var rHeight;
var bgColor;
var lineEnd;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);
    rHeight = 150;
    bgColor = 255;
    lineEnd = 300;

}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    // Logic
    rHeight += 1
    bgColor -= 1
    lineEnd -= 1

    // Draw
    background(bgColor);
    stroke(255, 0, 0);
    line(lineEnd, 500, 500, 500);
    stroke(0);
    rect(300, 50, 250, rHeight);
}
