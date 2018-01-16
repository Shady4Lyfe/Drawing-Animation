// P5.JS TEMPLATE

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);

    total = 0;
    var num
    for (num = 1; num <= 1000; num += 1) {
        total += num
    }
    console.log(total)

}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    background("white");

    textSize(40);
    textAlign(CENTER);
    text(total, 400, 300);

}
