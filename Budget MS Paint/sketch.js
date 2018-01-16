// P5.JS TEMPLATE

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);
    background("white");
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    fill(0); // black
    rect(0, 0, 30, 30);

    fill(255, 0, 0); // red
    rect(30, 0, 30, 30);

    fill(0, 255, 0); // green
    rect(60, 0, 30, 30);

    fill(0, 0, 255); //blue
    rect(90, 0, 30, 30);

    fill(255, 255, 0); //yellow
    rect(120, 0, 30, 30);

    fill(255); //clear
    rect(150, 0, 30, 30);

    if (mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY)
    }
}

function mousePressed() {
    if (mouseX < 30 && mouseY < 30) {
        stroke(0)
    }

    if (mouseX > 30 && mouseY < 30) {
        stroke(255, 0, 0)
    }

    if (mouseX > 60 && mouseY < 30) {
        stroke(0, 255, 0)
    }

    if (mouseX > 90 && mouseY < 30) {
        stroke(0, 0, 255)
    }

    if (mouseX > 120 && mouseY < 30) {
        stroke(255, 255, 0)
    }

    if (mouseX > 150 && mouseY < 30) {
        clear();
        background("white");
        stroke(0);
    }

}
