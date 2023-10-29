const canvas = document.getElementById('canvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const c = canvas.getContext("2d");

let draw_color = "black";
let previousPosition = null;
let drawingHistory = [];
let pathCount = 0;
let initialCount;

let options = 
{
  isFreeHandDrawing: true,
  isRectangleDrawing: false,
}

function enableRectDrawing()
{
  options = {
    isFreeHandDrawing: false,
    isRectangleDrawing: true,
  }
}
function onMouseDown(e)
{
    previousPosition = [e.clientX, e.clientY];
    c.strokeStyle= draw_color;
    c.lineWidth = 2;
    initialCount = pathCount;
    console.log("mousedown");
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mouseup",onMouseUp);
}

function onMouseMove(e)
{
  let currentPosition = [e.clientX, e.clientY];

   if(options.isFreeHandDrawing)
   {
    c.beginPath();
    c.moveTo(...previousPosition);
    c.lineTo(...currentPosition);
    c.stroke();
    c.closePath();
    previousPosition = currentPosition;
   }

   if(options. isRectangleDrawing)
   {
    drawRectangle(currentPosition);
   }
}

function drawRectangle(currentPosition)
{
  if(initialCount !== pathCount)
  {
     c.putImageData(drawingHistory[initialCount - 1],0,0);
     pathCount = initialCount;
  }
  let width = currentPosition[0]-previousPosition[0];
  let height = currentPosition[1] - previousPosition[1];

  c.strokeRect(previousPosition[0], previousPosition[1], width, height);

  drawingHistory.push(c.getImageData(0,0,canvas.width, canvas.height));
  pathCount++;
}
function onMouseUp(e)
{
  canvas.removeEventListener("mousemove",onMouseMove);
  canvas.removeEventListener("mouseup",onMouseUp);
  drawingHistory.push(c.getImageData( 0,0,canvas.width,canvas.height));
  pathCount++; 
}

