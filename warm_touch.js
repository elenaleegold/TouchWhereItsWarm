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
        console.log("touch!");
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
        image(brush, mouseX, mouseY);
        // ellipse(mouseX, mouseY, 100);
        if (fSize > 20 || fSize < 15) {
            dir *= -1;
        }
        fSize += (dir * 0.005);

        setTimeout(function() {
            console.log("its off");
            toggle = false;
            clear();
            return;
        }, 30000);

    // } else if (toggle == false || toggle == undefined) {
    //     setTimeout(function() {
    //         toggle = true;
    //         console.log("its on");
    //         background(0);
    //         canvas.style('pointer-events', 'none');
    //     }, Math.random() * 6000 + 3000);
    // }
}

//textAlign(CENTER);




function updateWindow() {
    cH = window.innerHeight;
    cW = window.innerWidth;
    myCanvas = createCanvas(cW, cH);
    console.log('canvas');
}




// let toggle;


// function startSketch() {
//     let sketch = function(p) {

//         let fSize;
//         let dir;
//         let cW, cH;
//         let brush;
//         p.preload = function() {
//             brush = p.loadImage('https://i.ibb.co/gvCzcSZ/brush.png');
//         }

//         p.setup = function() {
//             if (toggle) {
//                 var canvas = p.createDiv();
//                 cH = window.innerHeight;
//                 cW = window.innerWidth;
//                 var body = p.select('body');
//                 body.style('pointer-events', 'none');
//                 canvas.id('sketch-holder');
//                 canvas.parent(p.select('body'));
//                 var myCanvas = p.createCanvas(cW, cH);
//                 canvas.style('position', 'fixed');
//                 canvas.style('pointer-events', 'none');
//                 canvas.style('z-index', '1000');
//                 canvas.style('top', '0');
//                 myCanvas.parent(canvas);
//                 p.background(0);
//                 fSize = 15;
//                 dir = -1;
//                 p.imageMode(p.CENTER);
//             }
//         }


//         p.draw = function() {
//             if (toggle) {
//                 p.textFont('Courier');
//                 p.textSize(fSize);
//                 p.fill(0, 255);
//                 let message = "Touch your computer. Linger on the spots that feel the warmest.";
//                 let tSize = p.textWidth(message);
//                 p.rect(30, cH - (cH / 6), tSize - tSize / 3, 60);
//                 p.fill(255, 255);
//                 p.text("Touch your computer.\nLinger on the spots that feel the warmest.", 30, cH - (cH / 7));
//                 p.fill(255, 93, 95, 1);
//                 p.noStroke();
//                 // p.tint(255, 3);
//                 // p.image(brush, p.mouseX, p.mouseY);
//                 p.ellipse(p.mouseX, p.mouseY, 100);
//                 if (fSize > 20 || fSize < 15) {
//                     dir *= -1;
//                 }
//                 fSize += (dir * 0.005);

//                 setTimeout(function() {
//                     toggle = false;
//                     console.log("its off " + toggle);
//                     p.clear();
//                     return;
//                 }, 3000);

//             } else {
//                 if (toggle == false || toggle == undefined) {
//                     setInterval(function() {
//                         startSketch();
//                         toggle = true;
//                         console.log("its on " + toggle);
//                     }, Math.random() * 6000 + 3000);
//                 }
//             }

//             //textAlign(CENTER);


//         }
//     }
//     var myp5 = new p5(sketch);
// }

// function updateWindow() {
//     cH = window.innerHeight;
//     cW = window.innerWidth;
//     myCanvas = createCanvas(cW, cH);
//     console.log('canvas');
// }