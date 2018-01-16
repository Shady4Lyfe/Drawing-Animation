// MOUSE LOCATION EXERCISES

function setup() {
    createCanvas(600, 600);
    noCursor();
    textAlign(CENTER);
}

function draw() {
    // Draw Grid and Level (Uncomment current level)
    background(0);
    drawGrid();
    // drawLevel1(); // Use Binary
    // drawLevel2(); // Use Chained
    // drawLevel3(); // Use Binary
    // drawLevel4(); // Use Binary
    // drawLevel5(); // Use Chained
    // drawLevel6(); // Use Binary
    // drawLevel7(); // Use Chained
    // drawLevel8(); // Use Binary
    // drawLevel9(); // Use Chained
    // drawLevel10(); // Use Binary
    // drawLevel11(); // Use Binary
    // drawLevel12(); // Use Chained
    drawLevel13(); // Use Binary (hint: dist() function is useful)

    // IF STATEMENTS TO CONTROL FILL COLOR...

    // Level 1
    /* if(mouseX < 300){
        fill(255, 0, 0);
    }  else  {
        fill(0, 255, 0);
    }
	*/

    // Level 2
    /* if(mouseX < 200)    {
        fill(255, 0, 0,);
    }  else if(mouseX < 400)   {
        fill(0, 255, 0);
    }  else   {
        fill(0, 0, 255);
    }
    */

    // Level 3
    /* if(mouseX < 200 || mouseX > 400) {
        fill(255, 0, 0);
    }  else  {
        fill(0, 255, 0);
    }
    */

    // Level 4
    /* if(mouseY < 300) {
        fill(255, 0, 0);
    }   else    {
        fill(0, 255, 0);
    }
    */

    // Level 5
    /* if(mouseY < 200)    {
         fill(255, 0, 0,);
     }  else if(mouseY < 400)   {
         fill(0, 255, 0);
     }  else   {
         fill(0, 0, 255);
     }
     */

    // Level 6
    /* if(mouseY < 200 || mouseY > 400) {
         fill(255, 0, 0);
     }  else  {
         fill(0, 255, 0);
     }
     */

    // Level 7
    /* if(mouseX < 150)     {
         fill(255, 0, 0,);
     }   else if(mouseX < 300)   {
         fill(0, 255, 0);
     }   else if(mouseX < 450)   {
         fill(0, 0, 255);
     }   else if(mouseX < 600)   {
         fill(255, 255, 0);
     }
     */

    // Level 8
    /* if(mouseX < 300 && mouseY < 300)     {
         fill(255, 0, 0,);
     }   else    {
         fill(0, 255, 0);
     }
     */

    // Level 9
    /* if(mouseX < 300 && mouseY < 300)    {
         fill(255, 0, 0);
     }  else if(mouseX > 300 && mouseY < 300)   {
         fill(0, 255, 0);
     }  else if(mouseX < 300 && mouseY > 300)   {
         fill(0, 0, 255);
     }  else    {
         fill(255, 255, 0);
     }
     */

    // Level 10
    /* if(mouseX < 300 && mouseY < 300 || mouseX > 300 && mouseY > 300)    {
         fill(255, 0, 0);
     }   else if(mouseX > 300 && mouseY < 300 || mouseX < 300 && mouseY > 300)   {
         fill(0, 255, 0);
     }
     */

    // Level 11
    /* if(mouseX < 400 && mouseY > 200 && mouseX > 200 && mouseY < 400)    {
         fill(255, 0, 0);
     }   else    {
         fill(0, 255, 0);
     }
     */

    // Level 12
    /* if(mouseX < 250 && mouseY > 200 && mouseX > 100 && mouseY < 350)    {
         fill(255, 0, 0);
     }   else  if(mouseX < 500 && mouseY > 200 && mouseX > 350 && mouseY < 350)    {
         fill(0, 255, 0);
     }   else    {
         fill(0, 0, 255);
     }
     */

    // Level 13
    var x = 300
    var y = 300

    if (dist(mouseX, mouseY, x, y) < 100) {
        fill(255, 0, 0);
    } else {
        fill(0, 255, 0);
    }


    // Draw Ellipse
    noStroke();
    ellipse(mouseX, mouseY, 25);
}
