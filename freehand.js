const pencil = document.getElementById("pencil");

let isPencilActive = false;
let colorPicker = document.getElementById("color-picker");

colorPicker.addEventListener("change",() => {
    draw_color = colorPicker.value;
});
function onPencilClick()
{
    pencil.classList.toggle("active");
    isPencilActive = !isPencilActive;

    if(isPencilActive)
    { 
        canvas.style.cursor="crosshair";
      canvas.addEventListener("mousedown",onMouseDown);
    }
    else
    {
        canvas.style.cursor="auto";
        canvas.removeEventListener("mousedown",onMouseDown);
    }
}

pencil.addEventListener("click",onPencilClick);