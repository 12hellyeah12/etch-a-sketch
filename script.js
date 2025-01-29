/* TASK DESCRIPTION

1. Create a 16 x 16 grid of divs each representing a pixel using FLEXBOX
    1.1 Color each pixel when hovering over it with your mouse
    1.2 Prompt the user for input: Number of pixels between 1 and 100 after clicking
        a button

2. Change each pixels color randomly when hovering over them
    2.1 Change between modes with button

3. Change opacity of each pixel. example: Pixel gets 10% darker each time the mouse 
   hovers over it. 
    3.1 Change between modes with button
*/ 

/* PSEUDO CODE

8. Create a 16 x 16 grid with inner.HTML
9. Add each element to the DOM
10. 
*/

const frame = document.getElementById("frame");
const promptUserBtn = document.getElementById("prompt-user-btn");
const resetBtn = document.getElementById("reset-btn");
let pixels;

//Create Pixel Grid 
const createPixelGrid = () => {
    for(let i = 0; i < (16 * 16); i++){
        const pixel = document.createElement("div");
        frame.appendChild(pixel);
        pixel.classList = "pixels";
    };

    pixels = document.querySelectorAll(".pixels");
    pixels.forEach(pixel => {
        pixel.setAttribute("onmouseover", "style.backgroundColor='black'");
    });    
}

const resetSketch = () => {
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = "transparent";
        });
}

resetBtn.addEventListener("click", resetSketch);
promptUserBtn.addEventListener("click", createPixelGrid);