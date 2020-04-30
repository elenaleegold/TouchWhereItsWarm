let fSize;
let dir;
let cW, cH;
let brush;
let toggle;
let canvas;


function preload() {
    brush = loadImage('https://i.ibb.co/gvCzcSZ/brush.png');
}

function setup() {
    canvas = createDiv();
    cH = window.innerHeight;
    cW = window.innerWidth;
    var body = select('body');
    body.style('pointer-events', 'none');
    canvas.id('sketch-holder');
    canvas.parent(select('body'));
    var myCanvas = createCanvas(cW, cH);
    canvas.style('position', 'fixed');
    canvas.style('z-index', '1000');
    canvas.style('top', '0');
    myCanvas.parent(canvas);
    background(0);
    fSize = 15;
    dir = -1;
    imageMode(CENTER);
}


function draw() {
    // if (toggle) {
    textFont('Courier');
    textSize(fSize);
    fill(0, 255);
    let message = "Touch your computer. Linger on the spots that feel the warmest.";
    let tSize = textWidth(message);
    rect(30, cH - (cH / 6), tSize - tSize / 3, 60);
    fill(255, 255);
    text("Touch your computer.\nLinger on the spots that feel the warmest.", 30, cH - (cH / 7));
    fill(255, 93, 95, 1);
    noStroke();
    tint(255, 3);
    if (mouseIsPressed) {
        image(brush, mouseX, mouseY);
    }
    if (fSize > 20 || fSize < 15) {
        dir *= -1;
    }
    fSize += (dir * 0.005);
}




function updateWindow() {
    cH = window.innerHeight;
    cW = window.innerWidth;
    myCanvas = createCanvas(cW, cH);
    console.log('canvas');
}
