
var canvas = document.getElementById("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var touchable = 'createTouch' in document;
if (touchable) {
    canvas.addEventListener('touchstart', onTouchStart, false);
    canvas.addEventListener('touchmove', onTouchMove, false);
}
else
{
      alert("touchable is false !");
}
var lastX;
var lastY;
var ctx =canvas.getContext("2d");
ctx.lineWidth=10;
ctx.strokeStyle="#000000";
function onTouchStart(event) {
    event.preventDefault();
    lastX=event.touches[0].clientX;
    lastY=event.touches[0].clientY;
    drawRound(lastX,lastY);
}

function onTouchMove(event) {
    try
    {
      event.preventDefault();
      drawLine(lastX,lastY,event.touches[0].clientX,event.touches[0].clientY);
      lastX=event.touches[0].clientX;
      lastY=event.touches[0].clientY;
    }
    catch(err){
        alert( err.description);
    }
}

function drawRound(x,y)
{
    ctx.fillStyle="#000000";
    ctx.beginPath();
    ctx.arc(x,y,5,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
}

function drawLine(startX,startY,endX,endY)
{
    ctx.beginPath();
    ctx.lineCap="round";
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
}
