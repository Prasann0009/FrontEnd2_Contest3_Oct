const canvas = document.getElementById('canvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const c = canvas.getContext("2d");

let draw_color = "black";
let previousPosition = null;

function onMouseDown(e)
{
    previousPosition = [e.clientX, e.clientY];
    c.strokeStyle= draw_color;
    c.lineWidth = 2;
    console.log("mousedown");
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mouseup",onMouseUp);
}

function onMouseMove(e)
{
  let currentPosition = [e.clientX, e.clientY];

   c.beginPath();
   c.moveTo(...previousPosition);
   c.lineTo(...currentPosition);
   c.stroke();
   c.closePath();
   previousPosition = currentPosition;
}

function onMouseUp(e)
{
  canvas.removeEventListener("mousemove",onMouseMove);
}





// c.beginPath();
// c.moveTo(200,300);
// c.lineTo(400,100);
// c.strokeStyle="red";
// c.lineWidth=4;
// c.stroke();
// c.closePath();

