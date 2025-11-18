var hist

function setupPerforatedScore(){
    frameRate(60)
    background(0,0,0)
    fill(0, 0, 100, 150)

    hist = []
}

function getHighValues(spectrum){
    var highs = []

    for (var j = 0; j < spectrum.length; j++){
        if (spectrum[j] > 30)
            highs.push([spectrum[j], j])

    }
    return highs
}

function drawPerforatedScore(spectrum, nbBands){
    background(0o0)
    var highestValues = getHighValues(spectrum)
    
    console.log(highestValues)

    if (hist.length >= nbBands) 
        hist.splice(0, 1)
    
    hist.push(highestValues)

    console.log(hist)


    for (var i = 0; i < hist.length; i++){
        //console.log("height", windowHeight/spectrum.length * i)
        //console.log("width", windowWidth/nbBands)
        var xStep = windowWidth/nbBands
        
 
        var rectWidth = windowWidth/spectrum.length/2
        var rectHeight = windowHeight/nbBands/2
        var x = windowWidth - (xStep * (hist.length - i))
        

        hist[i].forEach(h => {
            var color = map(h[0], 0, 255, 0, 100)
            fill(0, 0, color)

                            
            var y = map(h[1], 0, 128, 10, windowHeight-10)
            rect(x, y, rectWidth, rectHeight )

        });


        //console.log(`${x}, ${y}, ${rectWidth}, ${            rectHeight}`)
       


        
    }
        
        

}

