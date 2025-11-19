var hist
var scoreLength = 30
var randomIntensity
var countDown = 120

function setupPerforatedScore(){
    frameRate(10)
    background(0,0,0)
    fill(0, 0, 100, 150)
    angleMode(DEGREES);
    hist = []
    strokeWeight(2)
    stroke(0, 0, 100)
    fill(0, 0, 0)
}

function getHighValues(spectrum, step){
    var highs = []

    for (var j = 0; j < spectrum.length; j+=step){
        if (spectrum[j] > 30)
            highs.push([spectrum[j], j])

    }
    return highs
}


function drawVMPerforatedScore(spectrum){
    background(0o0)
    var highestValues = getHighValues(spectrum, 5)
    randomIntensity = 50

    if (hist.length >= scoreLength) 
        hist.splice(0, 1)
    
    hist.push(highestValues)



    for (var i = 0; i < hist.length; i++){
        var xStep = windowWidth / scoreLength
        
        

        var x = xStep * (hist.length - i)
        

        hist[i].forEach(h => {
            var rectWidth = windowWidth/scoreLength - 30 + random(0, 100)
            var rectHeight = map(h[0], 0, 255, 0, 500) + random(0, 10)
            
            var y = map(h[1], 0, 128, 10,windowHeight)
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

   if (debutDeLaFin > 0){

       var diff = (debutDeLaFin + countDown) - frameCount
       var alph = map(diff, countDown, 0, 255, 0)

       stroke(0, 0, 100, alph)


   }

}
