

const buildRect = (context, x, y, width, height, color) => {
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
};

const buildStrokeRect = (context, x, y, width, height, lineWidth, color) => {
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    context.strokeRect(x, y, width, height);
}

const buildClearRect = (context, x, y, width, height) => {
    context.clearRect(x, y, width, height);
}

console.log(buildRect);

const canvas = document.getElementById('cvs');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

// //  fillRect();
// buildRect(ctx, 20, 20, 150, 100, 'red');
// buildRect(ctx, 200, 20, 150, 100, 'black');

// // strokeRect();
// buildStrokeRect(ctx, 100, 200, 150, 100, 5, 'green');

// // clearRect();
// buildClearRect(ctx, 25, 25, 140, 90);

// // fillText();
// ctx.fillText('hello world', 400, 50);

// Paths
const fill = (context, style) => {
    context.fillStyle = style;
    context.fill();
}

const outline = (context, pathing, style) => {
    context.moveTo(pathing[0].x, pathing[0].y);
    for (let i = 1; i < pathing.length; i++) {
        context.lineTo(pathing[i].x, pathing[i].y);
    }
    context.strokeStyle = style;
    context.stroke();
}

// let triangleLeft = [
//     // upper left corner
//     { x: 50, y: 50 },
//     // upper right corner
//     { x: 150, y: 50 },
//     // bottom middle
//     { x: 100, y: 200 }
// ]

// outline(ctx, triangleLeft, 'coral');
// fill(ctx, 'coral');

// let triangleRight = [
//     // upper mid corner
//     { x: 200, y: 50 },
//     // bottom left corner
//     { x: 150, y: 200 },
//     // bottom right corner
//     { x: 250, y: 200 }
// ]

// outline(ctx, triangleRight, 'coral');
// fill(ctx, 'coral');

// // Rectangle
// ctx.beginPath();
// ctx.rect(300, 50, 150, 100);
// ctx.fillStyle = 'teal';
// ctx.fill();

// Arc (circles)
const cX = canvas.width / 2;
const cY = canvas.height / 2;

ctx.beginPath();
ctx.arc(cX, cY, 200, 0, Math.PI * 2, true);

// move to mouth
ctx.moveTo(cX + 100, cY);

// draw mouth
ctx.arc(cX, cY, 100, 0, Math.PI, false);

// move to left eye
ctx.moveTo(cX - 100, cY - 50);
ctx.arc(cX - 100, cY - 75, 25, 360, Math.PI * 2, true);

// move to right eye
ctx.moveTo(cX + 100, cY - 50);
ctx.arc(cX + 100, cY - 75, 25, 360, Math.PI * 2, true);

ctx.stroke();

// const outline = (context, pathing, style) => {
//     context.beginPath();
//     context.moveTo(pathing[0].x, pathing[0].y);
//     for (let i = 1; i < pathing.length; i++) {
//         context.lineTo(pathing[i].x, pathing[i].y);
//     }
//     context.strokeStyle = style;
//     context.closePath();
//     context.stroke();
// }

// HELLO WORLD
ctx.strokeStyle = 'black'
let x = 50;
let y = 50;

const drawStraightLine = (start, end, width) => {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.moveTo(start.x + x, start.y + y);
    ctx.lineTo(end.x + x, end.y + y);
    ctx.closePath();
    ctx.stroke();
}

// 'H' 
// H: left vertical line(thick)
drawStraightLine(
    { x: 0, y: 0 },     // Start
    { x: 0, y: 30 },    // End
    9                   // Width
);

// H: middle horizontal line(bridge)
ctx.lineWidth = 5
ctx.moveTo(0 + x, 15 + y);
ctx.lineTo(20 + x, 15 + y);
ctx.closePath();
ctx.stroke();

// H: right vertical line(thick)
drawStraightLine(
    { x: 20, y: 0 },    // Start
    { x: 20, y: 30 },   // End
    9                   // Width
)

// 'E' in 'hello'
x += 35

// E: left vertical line
ctx.lineWidth = 7
ctx.moveTo(0 + x, 0 + y);
ctx.lineTo(0 + x, 30 + y);
ctx.closePath();
ctx.stroke();

// E: top horizontal line
drawStraightLine(
    { x: 0, y: 4 },     // Start
    { x: 20, y: 4 },    // End
    7                   // Width
)

// E: bottom horizontal line
ctx.lineWidth = 7
ctx.moveTo(0 + x, 26.5 + y);
ctx.lineTo(20 + x, 26.5 + y);
ctx.closePath();
ctx.stroke();

// E: middle horizontal line(smaller)
drawStraightLine(
    { x: 0, y: 15 },
    { x: 17, y: 15 },
    1
)

// 'L' in hello [first one]
x += 35
// L: left vertical line(thick)
ctx.lineWidth = 9
ctx.moveTo(0 + x, 0 + y);
ctx.lineTo(0 + x, 30 + y);
ctx.closePath();
ctx.stroke();

// L: bottom horizontal line(thick)
ctx.lineWidth = 9

ctx.moveTo(0 + x, 25 + y);
ctx.lineTo(20 + x, 25 + y);
ctx.closePath();
ctx.stroke();

// 'L' in hello [first one]
x += 35
// L: left vertical line(thick)
ctx.lineWidth = 9
ctx.moveTo(0 + x, 0 + y);
ctx.lineTo(0 + x, 30 + y);
ctx.closePath();
ctx.stroke();

// L: bottom horizontal line(thick)
ctx.lineWidth = 9

ctx.moveTo(0 + x, 25 + y);
ctx.lineTo(20 + x, 25 + y);
ctx.closePath();
ctx.stroke();

// 'O' in hello
x += 35
// Positioning at top mid
let topMidX = 10;
// O: centered Arc(circle)
ctx.moveTo(topMidX + x, 0 + y);
ctx.arc(10 + x, 15 + y, 12, 30, 11, false);
ctx.stroke();

// letter-spacing
x += 15

// 'W' in WORLD
x += 35
// W: left outside-long
drawStraightLine(
    { x: 0, y: 0 },
    { x: 5, y: 30 },
    8
)

// W: left inside-short
drawStraightLine(
    { x: 5, y: 30 },
    { x: 15, y: 15 },
    6
)

// W: right inside-short
drawStraightLine(
    { x: 15, y: 15 },
    { x: 25, y: 30 },
    6
)

// W: right outside-long
drawStraightLine(
    { x: 25, y: 30 },
    { x: 30, y: 0 },
    8
)

// 'O' in WORLD
x += 45
// Positioning
ctx.moveTo(10 + x, 0 + y);

// 'O': arc
console.log('x', x)
ctx.arc(15 + x, 15 + y, 13, 30, 11, true);
ctx.stroke();

// 'R' in WORLD
x += 45
console.log('x', x)
// 'R': left vertical line(thick)
drawStraightLine(
    { x: 0, y: 0 },
    { x: 0, y: 30 },
    9
)

// 'R': top horizontal line [part of box]
ctx.beginPath();
ctx.lineWidth = 7;
ctx.moveTo(0 + x, 4 + y);
ctx.lineTo(20 + x, 4 + y);
ctx.closePath();
ctx.stroke();

// 'R': right vertical line [part of box]
ctx.beginPath();
ctx.lineWidth = 7;
ctx.moveTo(17 + x, 0 + y);
ctx.lineTo(17 + x, 15 + y);
ctx.closePath();
ctx.stroke();

// 'R': mid horizontal line [part of box]
drawStraightLine(
    { x: 0, y: 15 },
    { x: 20, y: 15 },
    7
)

// 'R': mid to bottom right diagonal line
ctx.beginPath();
ctx.lineWidth = 8;
ctx.moveTo(0 + x, 15 + y);
ctx.lineTo(20 + x, 27 + y);
ctx.closePath();
ctx.stroke();

// 'L' in WORLD
x += 35
// left vertical line(thick)
drawStraightLine(
    { x: 0, y: 0 },
    { x: 0, y: 30 },
    9
)

// bottom horizontal line(thick)
drawStraightLine(
    { x: 0, y: 25 },
    { x: 20, y: 25 },
    9
)

// 'D' in WORLD
x += 35

// left vertical line(thick)
drawStraightLine(
    { x: 0, y: 0 },
    { x: 0, y: 30 },
    9
)

// top left to mid right diagonal
drawStraightLine(
    { x: 0, y: 0 },
    { x: 20, y: 15 },
    8
)

// bottom left to mid right diagonal
drawStraightLine(
    { x: 0, y: 30 },
    { x: 20, y: 15 },
    8
)

// '!' in WORLD!

