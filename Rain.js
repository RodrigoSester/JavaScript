var xPositions = [200];
var yPositions = [0];

draw = function() {
    background(204, 247, 255);
    // add balls
    if (mouseIsPressed) {
        xPositions.push(mouseX);
        yPositions.push(mouseY);
    }
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(random(400), random(400), random(400));
        // ball rain
        ellipse(xPositions[i], yPositions[i], 10, 10);
        // limite of animation
        if (yPositions[i] === 400) {
            yPositions[i] -= 400;
        }
        // velocity
        yPositions[i] += 5;
    }
};