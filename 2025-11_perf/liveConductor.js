
/*
    title: live conductor script
    author: LenaMK 
    date: 2025-11
    description:
        - VJ conductor based on MAPP 2024 experience
        - standard keyboard

*/

var backgroundAlpha

var mic, vol, spectrum, fft, bandW, sound
var nbBands = 128

var xoff = 0
var yoff

var focusX, focusY
var centralFocus

var spectrumHistoryMax
var spectrumHistory = []
var shapes = []
var playing

var pageMargin = 100


function setup() { 
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
} 


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



function keyPressed() {

    if (key === '0') {
        //close curtains to black
        setupToBlack()
        scene = 0
    }
    else if (key === '1'){     
        //float circle
        // c for color change
        // p for speed+
        // m for speed-
        setupCircleFloat()
        scene = 1 
    }
    else if (key === '2'){   
        //float trailing circle
        // c for color change
        // p for speed+ (jumpy trail or r to refresh)
        // m for speed- (jumpy trail or r to refresh)
        stroke(99, 200, 100) 
        background('black')
        scene = 2 
    }
    else if (key === '3') {
        // boucy color 16 lines
        // arrows
        // ← twist to right
        // → rotate on axis
        // ↓ reverse horizontally
        setupLines(spectrum);
        scene = 3 
    }
    else if (key === '4') {
        // vertical strips
        // arrows 
        // ← sharp diagonal (parallelogram)
        // → bottom left corner
        // ↓
        setUpVStrips(spectrum)
        
        scene = 4 
    }
    else if (key === '5') {
        // building stairs
        // arrows 
        // ← toward top left coner
        // → 90° from left to right
        // ↓ reverse (top down)
        setupStairs()
        scene = 5 
    }
    else if (key === '6') {
        //setupRoom()
        background('black')
        scene = 6 
    }
    else if (key === '7') {
        //setupCredits()
        scene = 7 
    }
    else if (key === '8') {
        //setup ()
        scene = 8
    } 
    else if (key === '9') {
        //Credits in color
        setupCredits()
        scene = 10
    }  
    else if (key === 's') {
        //(start) credits in black and white 
        setupCredits()
        scene = 9 
    }

    if (key === 'b') {
        bisou = !bisou
        if (bisou == false){
            background(0o0);
            
        } else {
            bisouFontSize = 500
            bisouFrame = frameCount
        }
    }



    if (key === 'r') {
        background(0o0);
    }


    if (key === 'p') {
        if (speed < maxSpeed)
            speed = speed + 0.001
        else 
            speed = maxSpeed
        console.log(speed)
    }
    if (key === 'm') {
        if (speed > minSpeed)
            speed = speed - 0.001
        else   
            speed = minSpeed

        console.log(speed)
    }
        
}



function draw() {

    spectrum = fft.analyze();
    
    if (scene == 0){
        drawToBlack()
    }else if (scene == 1){
        alpha = false
        drawCircleFloat(spectrum, alpha, speed)
        
    } else if (scene == 2){
        alpha = true        
        drawCircleFloat(spectrum, alpha, speed)
    } else if (scene == 3){
        drawLines(spectrum);
    } else if (scene == 4){
        drawVStrips(spectrum)  
    } else if (scene == 5){
        drawStairs() 
    } else if (scene == 6){
        //drawRoom(spectrum)  
    } else if (scene == 9){
        var colorful = false
        drawCredits(spectrum, colorful)
    } 
    else if (scene == 10){
        var colorful = true
        drawCredits(spectrum, colorful)
        
    }

    if (bisou == true){
        var time = frameCount-bisouFrame
        bisouFontSize -= time*3
        
        if (bisouFontSize < 5){
            bisou = false
            background(0o0);
        }else
         faitBisou()
    }
  
}


