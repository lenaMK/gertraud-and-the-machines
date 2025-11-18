var hist
var scoreLength = 30
var randomIntensity

function setupPerforatedScore(){
    frameRate(10)
    background(0,0,0)
    fill(0, 0, 100, 150)
    angleMode(DEGREES);
    hist = []
}

function getHighValues(spectrum, step){
    var highs = []

    for (var j = 0; j < spectrum.length; j+=step){
        if (spectrum[j] > 30)
            highs.push([spectrum[j], j])

    }
    return highs
}

function drawPerforatedScore(spectrum){
    background(0o0)
    var highestValues = getHighValues(spectrum, 5)
    
    

    if (hist.length >= scoreLength) 
        hist.splice(0, 1)
    
    hist.push(highestValues)



    for (var i = 0; i < hist.length; i++){
        //console.log("height", windowHeight/spectrum.length * i)
        //console.log("width", windowWidth/nbBands)
        var xStep = windowWidth/scoreLength
        
        
        var rectWidth = windowWidth/scoreLength - 30
        var rectHeight = 30
        var x = xStep * (hist.length - i)
        

        hist[i].forEach(h => {
            var color = map(h[0], 0, 255, 0, 100)
            stroke(0, 0, color)
            fill(0, 0, 0)
            var y = map(h[1], 0, 128, windowHeight-50, 10)
            rect(x, y, rectWidth, rectHeight )

        })
    }

}



function drawVMPerforatedScore(spectrum){
    background(0o0)
    var highestValues = getHighValues(spectrum, 5)
    randomIntensity = 2

    if (hist.length >= scoreLength) 
        hist.splice(0, 1)
    
    hist.push(highestValues)



    for (var i = 0; i < hist.length; i++){
        var xStep = windowWidth/scoreLength
        
        
        var rectWidth = windowWidth/scoreLength - 30
        var rectHeight = 30
        var x = xStep * (hist.length - i)
        

        hist[i].forEach(h => {
            var color = map(h[0], 0, 255, 0, 100)
            strokeWeight(3)
            stroke(0, 0, color)
            fill(0, 0, 0)
            var y = map(h[1], 0, 128, windowHeight-50, 10)
            //rect(x, y, rectWidth, rectHeight )

            beginShape()
                
                vertex(x + random(-randomIntensity, randomIntensity), y + random(-randomIntensity, randomIntensity))

                vertex(x +rectWidth + random(-randomIntensity, randomIntensity), y + random(-randomIntensity, randomIntensity))
                
                vertex(x +rectWidth + random(-randomIntensity, randomIntensity), y + rectHeight + random(-randomIntensity, randomIntensity))

                vertex(x + random(-randomIntensity, randomIntensity), y + rectHeight + random(-randomIntensity, randomIntensity))
                
                vertex(x + random(-randomIntensity, randomIntensity), y + random(-randomIntensity, randomIntensity))
                

            endShape()

        })
    }

}


function drawVMPerforatedDisc(spectrum){
    background(0o0)
    randomIntensity = 1
 
    var discDensity = 6
    var discMargins = windowHeight/10
    var discRadius = (windowHeight-discMargins) / 2 

    var discInnerMargin = 10
    var discWritingRadius = discRadius - discInnerMargin*2
    var notes = 32
    var perforation = discWritingRadius / notes - 6

    if (hist.length >= (360/discDensity)) 
        hist.splice(0, 1)

    var inscriptionStep = 4
    var currentSpectrum = []
    for (var i = 0; i < spectrum.length/inscriptionStep; i++){
        currentSpectrum.push(spectrum[i*inscriptionStep])
    }
    

    hist.push(getHighValues(currentSpectrum, 1))


    //start from the center of the screen
    translate(windowWidth/2, windowHeight/2)  

    fill(0, 0, 30)
    circle(0, 0, discRadius * 2 + 10)
    fill(0, 0, 0)
    circle(0, 0, discMargins * 2)

    stroke(0, 0, 20)
    strokeWeight(6)

    rotate(-1)
    line(discMargins + discInnerMargin, 0, discRadius, 0)
    rotate(1)

    // for each element in the history (ex 360 / discDensity = 90)
    for (var i = 0; i < 360/discDensity ; i++){
        noStroke()
        //for each high value amongst the 32 "notes"
        if (hist[hist.length - i]){
            hist[hist.length - i].forEach(h => {
            
                //var color = map(h[0], 0, 255, 0, 100)
                //strokeWeight(1)
                //stroke(0, 0, 100)
                fill(0, 0, 0)
                
                var x = discMargins + (perforation + 6) * h[1] + discInnerMargin
                var y = 0
                

                beginShape()
                    
                    vertex(x + random(-randomIntensity, randomIntensity), y + random(-randomIntensity, randomIntensity))

                    vertex(x + perforation + random(-randomIntensity, randomIntensity), y + random(-randomIntensity, randomIntensity))
                    
                    vertex(x +perforation + random(-randomIntensity, randomIntensity), y + perforation + random(-randomIntensity, randomIntensity))

                    vertex(x + random(-randomIntensity, randomIntensity), y + perforation + random(-randomIntensity, randomIntensity))
                    
                    vertex(x + random(-randomIntensity, randomIntensity), y + random(-randomIntensity, randomIntensity))
                    

                endShape()
                
            })

            rotate(discDensity)
        }
        
    }

}
