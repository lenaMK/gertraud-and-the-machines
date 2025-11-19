var centralFocus 
var focusX, focusY

function setupSpectrumLines(){
    background(0o0)
    stroke(1)
    frameRate(60)

    focusX = 50
    focusY = 50
    centralFocus = false
}


function drawSpectrumLines(spectrum, nbBands, moveLineFocus){
    background(0o0)
    var selection = 4
    var margin = 10

    var stepX = (windowWidth/2 - focusX) / 400 + 1
    var stepY = (windowHeight/2 - focusY) / 400 +1

    if (moveLineFocus){
        if (!centralFocus){
            console.log("LineFocus reaching for center")
            focusX += stepX
            focusY += stepY
            
        } else {
            console.log("LineFocus moving randomly")
            focusX += random (-12, 12)
            focusY += random (-12, 12)
        }

        if (focusX >= windowWidth/2 && focusY >= windowHeight/3) {
            centralFocus = true
        }

    }

    for (var s = 1; s < nbBands / selection; s++){
        var dist = 3        
        var size = (windowWidth - pageMargin*2) / nbBands * selection
        
        var y = map(spectrum[s*selection/2 - 2], 0, 255, pageMargin, windowHeight - pageMargin)

        stroke(0, 0, 100, 120)        

        line((s-1) * size + pageMargin + (size-margin*2) /2, windowHeight - y - pageMargin, focusX, focusY + s*dist)


        //circle((s-1) * size + pageMargin, windowHeight - y - pageMargin, size - margin*2)
            
        
    }
}
