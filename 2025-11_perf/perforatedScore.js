var hist
var scoreLength = 30
var randomIntensity = 2

function setupPerforatedScore(){
    frameRate(30)
    background(0,0,0)
    fill(0, 0, 100, 150)

    hist = []
}

function getHighValues(spectrum){
    var highs = []

    for (var j = 0; j < spectrum.length; j+=5){
        if (spectrum[j] > 30)
            highs.push([spectrum[j], j])

    }
    return highs
}

function drawPerforatedScore(spectrum, nbBands){
    background(0o0)
    var highestValues = getHighValues(spectrum)
    
    console.log(highestValues)

    if (hist.length >= scoreLength) 
        hist.splice(0, 1)
    
    hist.push(highestValues)

    console.log(hist)


    for (var i = 0; i < hist.length; i++){
        //console.log("height", windowHeight/spectrum.length * i)
        //console.log("width", windowWidth/nbBands)
        var xStep = windowWidth/scoreLength
        
        
        var rectWidth = windowWidth/scoreLength - 30
        var rectHeight = 30
        var x = xStep * (hist.length - i)
        

        hist[i].forEach(h => {
            var color = map(h[0], 0, 255, 20, 100)
            stroke(0, 0, color)
            fill(0, 0, 0)
            var y = map(h[1], 0, 128, windowHeight-50, 10)
            rect(x, y, rectWidth, rectHeight )

        })
    }

}



function drawVMPerforatedScore(spectrum, nbBands){
    background(0o0)
    var highestValues = getHighValues(spectrum)


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

