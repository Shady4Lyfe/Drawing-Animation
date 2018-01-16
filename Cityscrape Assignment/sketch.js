// P5.JS TEMPLATE

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(1200, 850);
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    background(15, 0, 75);
    fill(0);

    //building #1
    rect(0, 350, 175, innerHeight);
    triangle(0, 350, 0, 225, 175, 350); //Roof 

    //building #2 
    rect(175, 450, 150, innerHeight);

    //building #3 
    rect(325, 330, 175, innerHeight);
    rect(360, 250, 105, 100); //2nd part
    rect(380, 175, 65, 75); //3rd part 
    rect(411, 120, 5, 75); //4th part 

    //building #4 
    rect(500, 500, 230, innerHeight);
    rect(535, 300, 150, 200); //2nd part 
    triangle(535, 300, 685, 150, 685, 300); //Roof 

    //building #5
    rect(700, 150, 195, innerHeight);
    rect(730, 70, 135, 125); //2nd part 
    rect(760, 30, 75, 45); //3rd part 

    //building #7
    rect(970, 310, innerWidth, innerHeight);
    rect(1015, 200, 140, 200); //2nd part 
    rect(1047, 150, 75, 50); //3rd part 
    rect(1083, 60, 5, 90); //4th part 

    //building #1 windows
    for (let x = 30; x <= 130; x += 40) {
        for (let y = 340; y <= 800; y += 40) {
            fill(255, 255, 150);
            rect(x, y, 25, 25);
        }
    }

    //building #2 windows
    for (let y = 475; y <= 800; y += 50) {
        rect(205, y, 85, 25)
    }

    //building #3 windows
    for (let x = 331; x <= 490; x += 12) {
        rect(x, 340, 6, 500);
    }

    //building #4 windows pt. 1
    for (let x = 558; x <= 664; x += 32) {
        for (let y = 310; y <= 478; y += 32) {
            rect(x, y, 19, 19);
        }
    }

    //building #4 windows pt. 2
    for (let y = 515; y <= 830; y += 48) {
        rect(535, y, 150, 28);
    }

    //building #5 windows
    for (let x = 712; x <= 870; x += 30) {
        rect(x, 160, 20, 670);
    }

    //building #7 windows
    for (let x = 980; x <= 1160; x += 45) {
        for (let y = 330; y <= 800; y += 45) {
            rect(x, y, 29, 29);
        }
    }

    //building #6
    fill(0);
    rect(870, 375, 190, innerHeight);
    //windows
    for (let x = 880; x <= 1050; x += 10) {
        fill(255, 225, 150);
        rect(x, 385, 5, 454);
    }
}
