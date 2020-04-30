

noStroke();
fill(64, 0, 0);
rect(150, 194, 150, 150);
fill(0, 0, 0);
ellipse(205, 309, 30, 30);
ellipse(276, 246, 25, 25);

mouseMoved = function() {
    var posX = mouseX - 25;
    var posY = mouseY - 15;
    if (posX > 130 && posX < 300 && posY > 170 && posY < 365) {
        fill(255, 255, 255);
        rect(posX, posY, 50, 30);
        }
};

fill(0, 0, 0);
textSize(50);
text("MISTER MAGGY", 10, 50);
textSize(23);
text("Do the test now!!", 112, 90);
text("Use your mouse like a soap dish", 40, 137);
text("in the brown square:", 110, 159);