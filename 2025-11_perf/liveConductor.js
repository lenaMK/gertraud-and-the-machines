
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

var tapisser, debutDeLaFin 

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
    effacer = false
    scene = 1
    setupPerforatedDisc()
    debutDeLaFin = 0
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
        setupPerforatedDisc()
        console.log(" Perforated disc, " + new Date(Date.now()))
        scene = 1
    }    
    else if (key === '2'){

        setupMovingPaperCrumbles()
        console.log("Moving paper crumbles, " + new Date(Date.now()))
        scene = 2
    }   
    else if (key === '3'){     
        // view
        // m for moving line focus
        // n for static line focus
       
        setupSpectrumLines()
        scene = 3 

        console.log("Spectrum lines, " + new Date(Date.now()))
    } 
    else if (key === '4'){
        setupPerforatedScore()
        console.log(" VM wild perforated Score, " + new Date(Date.now()))
        scene = 4
    }
    else if (key === '5'){     
        // view
       
        setupJumpyPunchCard()
        scene = 5 

        console.log("Jummpy punch cards," + new Date(Date.now()))
    }
    else if (key === '6'){     
        // view
       
        setupPaperCrumbles()
        scene = 6

        console.log("Paper crumbles, " + new Date(Date.now()))
    }
   

    if (key === 'm'){
        console.log("Spectrum lines, move line focus")
        moveLineFocus = true
    } else if (key === 'n'){
        moveLineFocus = false 
        console.log("Spectrum lines, static line focus")       
    }


    if (key === 's'){
        console.log("Début de la fin, fade out pour scene 4")
        debutDeLaFin = frameCount

        console.log("remember to save console output :) ")
    }

    if (key === 'd'){
        
        displayDoc()
        console.log("display documentation of keyboard actions")
    }

}

function mouseClicked() {
  console.log(spectrum)
}

function draw() {
    
    

    spectrum = fft.analyze();
    
    if (scene == 0){
        drawToBlack()
        
    }else if (scene == 1){
        drawPerforatedDisc(spectrum)
        
    }
    else if (scene == 2){
        drawMovingPaperCrumbles(spectrum, nbBands)
       
    }
  else if (scene == 3){
        drawSpectrumLines(spectrum, nbBands, moveLineFocus)
        
    }
    else if (scene == 4){
        drawVMPerforatedScore(spectrum, debutDeLaFin)
        
    }
    else if (scene == 5){
        drawJumpyPunchCard(spectrum, nbBands)
       
    }
    else if (scene == 6){
         drawPaperCrumbles(spectrum, nbBands, tapisser) 
    }
    

}


