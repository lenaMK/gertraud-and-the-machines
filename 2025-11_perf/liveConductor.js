
/*
    title: live conductor script for Gertraud & the machines
    author: Lena MK et William Diakite
    date: 2025-11
    description:
        - set up p5 and p5.sound
        - VJing style conductor based on MAPP 2024 experience: standard keyboard inputs

*/

var backgroundAlpha

var mic, vol, spectrum, fft, bandW, sound, scene
var nbBands = 128

var xoff = 0
var yoff

var focusX, focusY
var centralFocus

var spectrumHistoryMax
var spectrumHistory = []
var shapes = []
var playing

var tapisser 

var pageMargin = 100


function setup() { 
    
    console.log("Gertraud & the machines, " + new Date(Date.now()))

    colorMode(HSB, 360, 100, 100, 250);
    createCanvas(windowWidth, windowHeight); 
    angleMode(DEGREES)
   
    mic = new p5.AudioIn()
    mic.start()
    playing = true
 
    fft = new p5.FFT(0.9, nbBands)  
    fft.setInput(mic)

    bandW = windowWidth / nbBands
    backgroundAlpha = 100
    background(0, 0, 0, backgroundAlpha);   

    off = 0.0
    xoff = 0.0
    incx = 0.2
    incy = 0.2
    incz = 0.001

    focusX = pageMargin
    focusY = pageMargin
    centralFocus = false
    moveLineFocus = false
    tapisser = false

    scene = 1
} 


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



function keyPressed() {

    if (key === '0') {
        //close curtains to black
        setupToBlack()
        scene = 0
        console.log("Screen to black, " + new Date(Date.now()))
        
    }
    else if (key === '1'){     
        // view
       
        setupJumpyPunchCard()
        scene = 1 

        console.log("Jummpy punch cards," + new Date(Date.now()))
    }
    else if (key === '2'){     
        // view
        // m for moving line focus
        // n for static line focus
       
        setupSpectrumLines()
        scene = 2 

        console.log("Spectrum lines, " + new Date(Date.now()))
    }
    else if (key === '3'){     
        // view
       
        setupPaperCrumbles()
        scene = 3

        console.log("Paper crumbles, " + new Date(Date.now()))
    }
    else if (key === '4'){

        setupMovingPaperCrumbles()
        scene = 4
    }
   

    if (key === 'm'){
        console.log("Spectrum lines, move line focus")
        moveLineFocus = true
    } else if (key === 'n'){
        moveLineFocus = false 
        console.log("Spectrum lines, static line focus")       
    }


    if (key === 't'){
        tapisser = true
        console.log("Paper crumbles, piling up")
    }
    else if (key === 'r'){
          tapisser = false
        console.log("Paper crumbles, fading")
    }

}



function draw() {
    
    

    spectrum = fft.analyze();
    
    if (scene == 0){
        drawToBlack()
        
    }else if (scene == 1){
        
        drawJumpyPunchCard(spectrum, nbBands)
    }
    else if (scene == 2){
        
        drawSpectrumLines(spectrum, nbBands, moveLineFocus)
    }
  else if (scene == 3){
        drawPaperCrumbles(spectrum, nbBands, tapisser)  
    }
    else if (scene == 4){
        drawMovingPaperCrumbles(spectrum, nbBands)
    }
    

}


