// P5.JS TEMPLATE

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);

}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    background("white");
    textSize(25);
    text("Left arrow key to convert Celsius to Fahrenheit", 100, 250);
    text("Right arrow key to convert Fahrenheit to Celsius", 100, 300);
}


function keyPressed() {
    if (keyCode == 37) {
        var C = Number(prompt("Enter your Celsius value"));
        var F = C * 1.8 + 32;
        alert("The fahrenheit counterpart of " + C + " is " + F);
    } else if (keyCode == 39) {
        var F = Number(prompt("Enter your Fahrenheit value"));
        var C = F - 32;
        var C = C / 1.8;
        alert("The Celsius counterpart of " + F + " is " + C);
    }
}
