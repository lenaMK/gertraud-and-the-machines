
var backgroundAlpha
var selection = 4
var margin = 10
var pageMargin = 100

function setupPaperCrumbles(alpha){
    frameRate(3);
    background(0o0)
    
}

// potential improvements
/* 

- start with one, increment with each frame
- trail (location for each by noise?)


*/


function drawPaperCrumbles(spectrum, tapisser){

    if (tapisser == false)
        background(0,0, 0, 0)
    else 
        background(0, 0, 0, 85)


    for (var s = 1; s < nbBands; s++){
                    
        var startX = random(pageMargin, windowWidth-pageMargin)
        var startY = random(pageMargin, windowHeight-pageMargin)
        var nbSides = random(3,9)
        
        var color = map(spectrum[s-1], 0, 255, 0, 100)
        
        fill(0, 0, 80, 250)

        push()
            translate(startX, startY)

            beginShape()

                vertex(0, 0)

                for(var i = 0; i < nbSides; i++){
                    vertex(random(5,50),random(5,50) )
                }

            endShape()
        pop()
        
    }
}
