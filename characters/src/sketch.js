function setup() {
let canvas = createCanvas(400, 400);
canvas.parent('sketch-container');

resetSketch();
let button = createButton("RESET"); 
button.mousePressed(resetSketch);
button.parent('sketch-container2');


saveFile();
let buttonSave = createButton("SAVE"); 
buttonSave.mousePressed(saveFile)
buttonSave.parent('sketch-container2');
}

function resetSketch(){
let canvas = createCanvas(400, 400);
canvas.parent('sketch-container');
background(102);
line(200, 400, 200, 0);
line(0, 200, 400, 200);
line(0, 400, 400, 0);
line(0, 0, 400, 400);
}

function draw() {
stroke(255);
if (mouseIsPressed === true) {
line(mouseX, mouseY, pmouseX, pmouseY);
strokeWeight(15);
}
}

function resetSketch(){
let canvas = createCanvas(400, 400);
canvas.parent('sketch-container');
background(102);
line(200, 400, 200, 0);
line(0, 200, 400, 200);
line(0, 400, 400, 0);
line(0, 0, 400, 400);
}

function saveFile(){
if (mouseIsPressed === true) {
saveCanvas('myCharacter', 'jpg');  
}
}