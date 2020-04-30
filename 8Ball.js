fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(random(200), random(200), random(200));
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(1, 5));
textSize(30);
if (answer === 4) {
    text("Do it", 170, 240);
}
else if (answer === 3) {
    text("eu sou", 157, 237);
}
else if (answer === 6) {
    text("SEI LÁ", 180, 200);
}
else if (answer === 5){
    text("Melhor não", 159, 229); 
}
else if (answer === 2){
    text("Talvez", 156, 244);
}
else if (answer === 1){
    text("NÃO FAZ", 137, 268);

}