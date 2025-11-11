




function setupJumpyPunchCard(){
    background(0o0)
    
}


function drawJumpyPunchCard(spectrum, nbBands){

    var selection = 4
    var margin = 10
    background(0o0)

    for (var s = 1; s < nbBands / selection; s++){
        
        var size = (windowWidth - pageMargin*2) / nbBands * selection
        
        
        var y = map(spectrum[s*selection/2 - 2], 0, 255, pageMargin, windowHeight - pageMargin)

        stroke(0, 0, 20, 150)
        //1fill(0, 0, 100, 150)                

        rect((s-1) * size + pageMargin, windowHeight - y - pageMargin, size - margin*2, size/41-margin)
        //circle((s-1) * size + pageMargin, windowHeight - y - pageMargin, size - margin*2)
            
        
    }

    
}