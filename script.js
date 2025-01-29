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
const randColorBtn = document.getElementById("rand-color-btn");
let pixels;
const root = document.documentElement;
let isGridAdded = false;

const promptUserForGridSize = () => 
    size = window.prompt("Chose a grid size between 1 and 100", "16");

const createPixelGrid = (size) => {
    root.style.setProperty("--grid-size", size);

    for(let i = 0; i < (size * size); i++){
        const pixel = document.createElement("div");
        frame.appendChild(pixel);
        pixel.classList = "pixels";
    };

    pixels = document.querySelectorAll(".pixels");
    pixels.forEach(pixel => {
        pixel.setAttribute("onmouseover", "style.backgroundColor='black'");
    });   
    
    isGridAdded = true;
}

const createRandPixelColor = () => {
    pixels.forEach(pixel => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        pixel.setAttribute("onmouseover", 
            `style.backgroundColor='rgb(${red}, ${green}, ${blue})'`);
    });
}

const resetSketch = () => {
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = "transparent";
        });
}

const resetGrid = () => {
    while(frame.hasChildNodes()){
        frame.removeChild(frame.firstChild);
    }
}

resetBtn.addEventListener("click", resetSketch);

promptUserBtn.addEventListener("click", () => {
    resetGrid();
    promptUserForGridSize();
    createPixelGrid(size);
});

randColorBtn.addEventListener("click", () => {
    if(!isGridAdded){
        alert("First create a grid with the 'Create Grid' button!");
    } else {
    createRandPixelColor();
    }
});
