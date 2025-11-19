

var hist
var scoreLength = 30
var randomIntensity

var startTime
var reveal = 60*30

function setupPerforatedDisc(){
    frameRate(10)
    background(0,0,0)
    fill(0, 0, 100, 150)
    angleMode(DEGREES);
    hist = []
    startTime = frameCount
}

function getHighValues(spectrum, step){
    var highs = []

    for (var j = 0; j < spectrum.length; j+=step){
        if (spectrum[j] > 60)
            highs.push([spectrum[j], j])

    }
    return highs
}


function drawPerforatedDisc(spectrum){
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

    

    // for each element in the history (ex 360 / discDensity = 90)
    for (var i = 0; i < 360/discDensity ; i++){
        noStroke()
        //for each high value amongst the 32 "notes"
        if (hist[hist.length - i]){
            hist[hist.length - i].forEach(h => {
                
                if (random(0, 100) > 3){
                     //var color = map(h[0], 0, 255, 0, 100)
                //strokeWeight(1)
                //stroke(0, 0, 100)
                fill(0, 0, 70)
                
                var x = discMargins + (perforation + 50) * h[1] + discInnerMargin
                var y = 0
                

                beginShape()
                    
                    vertex(x + random(-randomIntensity, randomIntensity), y + random(-randomIntensity, randomIntensity))

                    vertex(x + perforation + random(-randomIntensity, randomIntensity), y + random(-randomIntensity, randomIntensity))
                    
                    vertex(x +perforation + random(-randomIntensity, randomIntensity), y + perforation + random(-randomIntensity, randomIntensity))

                    vertex(x + random(-randomIntensity, randomIntensity), y + perforation + random(-randomIntensity, randomIntensity))
                    
                    vertex(x + random(-randomIntensity, randomIntensity), y + random(-randomIntensity, randomIntensity))
                    

                endShape()
                }
               
                
            })

            rotate(discDensity)
        }
        
    }

    var count = frameCount - startTime

    if (count < reveal){
        // reset to top left
         

        var alphalevel = map(count, 0, reveal, 255, 0)
        console.log(alphalevel)
        fill(0, 0, 0, alphalevel)
        rect(-windowWidth/2, - windowHeight/2, windowWidth*2, windowHeight*2)

        console.log("fading")

    }
    else if (count == reveal){
        console.log("done fading")
    }

}