
var spectrumRandom 
var angle



function setupJumpyPunchCard(){
    background(0o0)
    frameRate(60)
    noStroke()
    fill(0, 0, 100)  

    spectrumRandom  = []

    for (var i= 0; i < 128; i++){
        spectrumRandom.push(random(-30, 123))
    }

    angle = 0
    
    
}


function drawJumpyPunchCard(spectrum, nbBands){

    var margin = 10
    background(0o0)
    rotate(-25)
    translate(-50, windowHeight/2)
    

    for (var s = 1; s < nbBands ; s++){
        
        var size = (windowWidth) / nbBands * 4
        
        
        var y = map(spectrum[s], 0, 255, pageMargin, windowHeight)

        stroke(0, 0, 20, 150)
                    
        if (spectrum[s] > 1){

            rect((s-1) * size *2 - 500, windowHeight-300 - y, + spectrumRandom[nbBands - s] /3*2 , size + spectrumRandom[s] * 3)
        }
        //circle((s-1) * size + pageMargin, windowHeight - y - pageMargin, size - margin*2)
            
        
    }

    push()
        rotate(angle)

        noStroke()
        rotate(30)
        fill(0, 0, 100)

        rect(windowWidth/7*3, -windowHeight/2, 150, windowHeight)

          

    pop()

    push()
        rotate(-angle)

        noStroke()
        fill(0, 0, 100)
        rotate(-90)

        rect(windowWidth/3, 110, 420, windowWidth)  
    pop()

    
    if (angle == 360){
        angle =0
    } else {
        angle+= 0.5
    }

}