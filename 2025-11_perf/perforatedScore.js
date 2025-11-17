var hist

function setupPerforatedScore(){

    background(0,0,0)
    fill(0, 0, 100, 150)

    hist = []
}

function drawPerforatedScore(spectrum, nbBands){
    var highestValue = Math.max()
    var indexOfHV = spectrum.indexOf(highestValue)
    console.log(highestValue)

    if (hist.length > nbBands) 
        hist.splice(0, 1)
    
    hist.push(highestValue)

    console.log(hist)


    for (var i = 0; i < hist.length; i++){
        //console.log("height", windowHeight/spectrum.length * i)
        //console.log("width", windowWidth/nbBands)
        var xStep = windowWidth/nbBands
        var yStep = windowHeight/spectrum.length
        
        var x = windowWidth - (xStep * i)
        var y = windowHeight - ( yStep * hist[i])

        var rectWidth = windowWidth/spectrum.length/2
        var rectHeight = windowHeight/nbBands/2

        //console.log(`${x}, ${y}, ${rectWidth}, ${            rectHeight}`)
        fill(0, 0, 20, 150)


        rect(x, y, rectWidth, rectHeight )
    }
        
        

}

