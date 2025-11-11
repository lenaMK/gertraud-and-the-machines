function setupSpectrumLines(){
    
}


function drawSpectrumLines(spectrum, nbBands, moveLineFocus){
    var selection = 4
    var margin = 10

    if (moveLineFocus){
        if (!centralFocus){
            focusX = windowWidth/2
            focusY = windowHeight/3
            centralFocus = true
        }
        focusX += random (-12, 12)
        focusY += random (-12, 12)
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
