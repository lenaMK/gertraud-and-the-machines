
var shapes = []

function setupMovingPaperCrumbles(){
    background(0,0,0)
    frameRate(60)
}


function buildShapes(nbBands){
    //as many shapes as there are bands in the frequency
    for (var b = 0; b < nbBands; b++){
        var nbSides = random(3, 9)
        var newShape = []

        //first value in shape array is nb of sides
        newShape.push(nbSides) 

        //init xy for the shape
        var initX = random(0, windowWidth)
        var initY = random(0, windowHeight)
        newShape.push(initX)
        newShape.push(initY)
        
        //create xy location for each side
        for(var i = 0; i <= nbSides; i++) {
            var x = random(5,50)
            var y = random(5,50)
            //following values are x, y for each side
            newShape.push(x)
            newShape.push(y)
            
        };

        shapes.push(newShape)
        
    }
}

function drawMovingPaperCrumbles(spectrum, nbBands){

    background(0o0)

    if (shapes.length == 0)
        buildShapes(nbBands);
    
    yoff = 0
    
    for (var s = 1; s < shapes.length; s++){
        
        var opacity = map(spectrum[s-1], 0, 255, 10, 100)
        

        //frameRate(20);
        
        fill(0, 0, opacity, 250)
        //fill(0, 0, 100, 250)
        push()
            translate(shapes[s][1], shapes[s][2])

            beginShape()

                vertex(0, 0)
                //for the number of sides
                for(var i = 0; i < shapes[s][0]; i++){
                    vertex(shapes[s][i+3], shapes[s][i+4])
                }

            endShape()
        pop()

        
        if (shapes[s][1] > windowWidth){
            shapes[s][1] = 0
        }else
            shapes[s][1] += noise(xoff, yoff)

        if (shapes[s][2] > windowHeight){
                shapes[s][2] = 0
        }else
            shapes[s][2] += noise(yoff, xoff)
        
        if(spectrum[s-1] > 180){
            //shapes[s][1] = map(spectrum[s-1], 150, 255, shapes[s][1], pageMargin)

            var removeX = random(5,20)
            var removeY = random(5,20)

            if (shapes[s][1]-removeX < 0){
                shapes[s][1] = windowWidth
                shapes[s][2] = random(0, windowHeight)
            }
            else
                shapes[s][1] -= removeX

            if (shapes[s][2]-removeY < 0){
                shapes[s][2] = windowHeight
                shapes[s][1] = random(0, windowWidth)
            }
            else
                shapes[s][2] -= removeX

        }


        yoff += 0.001
        
    }
    xoff+= 0.1

}