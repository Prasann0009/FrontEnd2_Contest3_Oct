const undo = document.getElementById("undo");
const redo = document.getElementById("redo");

function onUndo()
{
   console.log("undo");
}
function onRedo()
{
  console.log("redo");
}

undo.addEventListener("click",onUndo);
redo.addEventListener("click",onRedo);