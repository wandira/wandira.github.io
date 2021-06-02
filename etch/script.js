//Default BG color
const _mainBGColor = ['BISQUE'];

//The canvas
const canvas = document.getElementById('canvas');

//Ink color palettes
const _BLACK = ['BLACK'];
const _WHITE = ['WHITE'];
const _FOREST = ['green','#07693a','#4d8b26','#54ab28','#74d47b','#6f5c5c'];
const _EARTH = ['#ba7e63','#b78766','#b69e86','#e5ceb6','#ecac22','#e8a81f'];
const _TWILIGHT = ['#c07180','#b14e61','#a93e73','#8b3d7b','#603986'];
const _STONE = ['gray','#615a4a','#746f61','#969387','#cbcbc3','#848073'];

//Current Palette: default black
let currPalette = _BLACK ;

function setPalette(input){
    //can use switch or
    //normalize the input , make palette an object and immediately set currPalette(palette[input])
    input.setAttribute('style','border: 5px');
    const value = input.value;
    switch(value){
        case 'black':
            currPalette = _BLACK;
            break;
        
        case 'white':
            currPalette = _WHITE;
            break;
        
        case 'forest':
            currPalette = _FOREST;
            break;

        case 'earth':
            currPalette = _EARTH;
            break;

        case 'twilight':
            currPalette = _TWILIGHT;
            break;
        
        case 'stone':
            currPalette = _STONE;
            break;
        case 'delete':
            currPalette = _mainBGColor;
            break;
    }
}

function colorPicker(currPalette){
    const randomIndex = Math.floor(Math.random() * currPalette.length);
    return currPalette[randomIndex];
}

function divColorChanger(div){
    div.setAttribute('style', `background: ${colorPicker(currPalette)}`);  
}

function clearCanvas(){
    let allPixels = [...canvas.children];
    let len = allPixels.length;
    for( i=0; i<len; i++ )
    {
        const childDiv = allPixels[i];
        childDiv.style.cssText = `background-color:  ${_mainBGColor}`
        // childDiv.setAttribute('style', `background: ${_mainBGColor}`);  
    }
}

//To populate canvas with pixels
function populateCanvas(input=9){
    let density = input*input;
    while(density>0){
        const pixel = document.createElement("div");
        pixel.setAttribute('class','pixel');
        pixel.setAttribute('onmouseover','divColorChanger(this)');
        canvas.appendChild(pixel);
        density--;
    }
}

function removeAllCanvasPixels(){
    canvas.textContent = ''
}

function changeCanvasColumnsAndRows(input){
    canvas.setAttribute('style',`grid-template-columns: repeat(${input},1fr);grid-template-rows: repeat(${input},1fr);`);
}

function changeCanvasDensity(){
    let input = prompt('Input density (1-100)' , '2');
    if(input<1){
        input=1;
    }
    if(input>100){
        input=100
    }
    removeAllCanvasPixels();
    changeCanvasColumnsAndRows(input);
    populateCanvas(input);
}