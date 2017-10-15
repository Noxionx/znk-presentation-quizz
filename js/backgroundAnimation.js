/**
 * @author Florent Gadé
 */
var width = window.innerWidth,
    height = window.innerHeight;

var canvas = document.createElement("canvas");
canvas.width = width;
canvas.height = height;
canvas.style.position = "absolute";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = -1;

var ctx = canvas.getContext('2d');
ctx.canvas.width = width;
ctx.canvas.height = height;

//Resize handler
function resize() {
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    ctx.canvas.width = width;
    ctx.canvas.height = height;
}

var lastmousex=-1;
var lastmousey=-1;
var mousetravel = 0;
var timer = null;
function refreshMoveValue(e){
    var mousex = e.pageX;
    var mousey = e.pageY;
    if (lastmousex > -1)
        mousetravel = Math.round(Math.sqrt( Math.pow(Math.abs(mousex-lastmousex), 2) + Math.pow(Math.abs(mousey-lastmousey), 2) ));
    lastmousex = mousex;
    lastmousey = mousey;
    timer && clearTimeout(timer);
    timer = setTimeout(function(){
        refreshMoveValue({pageX: lastmousex, pageY: lastmousey})
    }, 200);
}

function drawPath(delay, range_step) {
    var t = 5;
    var offset = height/2;

    ctx.beginPath();
    var range = getRange(range_step);
    for(var i=0; i<=width; i=i+10){
        var p = 2 * Math.PI * (1/t);
        var y = (range * Math.sin(((i+delay)/360)*p))+offset;
        if(mousetravel){
            y += (Math.random()-0.5)*mousetravel;
        }
        if(i==0){
            ctx.moveTo(0, y);
        }
        ctx.lineTo(i+1, y);
    }
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#888888";
    ctx.stroke();
}

function getRange(range_step) {
    return 100+(30*Math.sin((range_step/360)*2*Math.PI));
}

var i = 0;
var amount = 0.5;
var step = 2;
var range_step = 0;
function animate() {
    i = (i+step)%3600;
    range_step = (range_step+amount)%3600;
    ctx.clearRect(0,0,width,height);
    drawPath(i, range_step);
    drawPath((i+214), (range_step+89));
    drawPath((i+410), (range_step+243));
    requestAnimationFrame(animate);
}

document.addEventListener("DOMContentLoaded", function() {

    if(document.body.firstChild)
        document.body.insertBefore(canvas, document.body.firstChild);
    else
        document.body.appendChild(canvas);

    animate();

    window.addEventListener('resize', resize);

    window.addEventListener('mousemove', refreshMoveValue);
});
