// SUNRISE

//Declare Global Variables
var cloud1 = {
    x: 175,
    y: 150,
    w: 120,
    h: 70
}

var cloud2 = {
    x: 225,
    y: 100,
    w: 120,
    h: 70
}

var sun = {
    x: 200,
    y: 290,
    w: 40,
    h: 40
}


sunG = 0


// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(400, 400);

    var sunG

}


// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {

    // RUN LOGIC
    if (cloud1.x < -100); {
        cloud1.x -= 0.75
    }

    if (cloud2.x < 100); {
        cloud2.x += 0.75;

    }

    sun.y -= 0.65;
    if (sun.y < 110) {
        sun.y += 0.65;
    }

    sunG = sunG + 1;

    sun.w += 0.25;
    if (sun.w > 110) {
        sun.w -= 0.25
    }

    sun.h += 0.25;
    if (sun.h > 110) {
        sun.h -= 0.25
    }







    // DRAW FRAME
    background(19, 231, 242); // Blue sky

    noStroke();

    fill(225, sunG, 0); //Sun color
    ellipse(sun.x, sun.y, sun.w, sun.h); //Sun

    fill(38, 168, 73); // Green
    rect(0, 290, 400, 200); // Ground

    fill(255); // White
    ellipse(cloud1.x, cloud1.y, cloud1.w, cloud1.h); //Left cloud
    ellipse(cloud2.x, cloud2.y, cloud2.w, cloud2.h); //Right cloud



}
