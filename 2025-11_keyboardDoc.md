# Keyboard inputs for nov 2025

```js

    if (key === '0') {
        //close curtains to black
        setupToBlack()
        scene = 0
        console.log("Screen to black, " + new Date(Date.now()))
        
    }   
    else if (key === '1'){
        setupPerforatedDisc()
        console.log(" Perforated disc, " + new Date(Date.now()))
        scene = 1
    }    
    else if (key === '2'){

        setupMovingPaperCrumbles()
        console.log("Moving paper crumbles, " + new Date(Date.now()))
        scene = 2
    }   
    else if (key === '3'){     
        // view
        // m for moving line focus
        // n for static line focus
       
        setupSpectrumLines()
        scene = 3 

        console.log("Spectrum lines, " + new Date(Date.now()))
    } 
    else if (key === '4'){
        setupPerforatedScore()
        console.log(" VM wild perforated Score, " + new Date(Date.now()))
        scene = 4
    }
    else if (key === '5'){     
        // view
       
        setupJumpyPunchCard()
        scene = 5 

        console.log("Jummpy punch cards," + new Date(Date.now()))
    }
    else if (key === '6'){     
        // view
       
        setupPaperCrumbles()
        scene = 6

        console.log("Paper crumbles, " + new Date(Date.now()))
    }
   

    if (key === 'm'){
        console.log("Spectrum lines, move line focus")
        moveLineFocus = true
    } else if (key === 'n'){
        moveLineFocus = false 
        console.log("Spectrum lines, static line focus")       
    }


    if (key === 's'){
        console.log("Début de la fin, fade out pour scene 4, ", + new Date(Date.now()))
        debutDeLaFin = frameCount

        console.log("remember to save console output :) ")
    }

    if (key === 'd'){
        
        displayDoc()
        console.log("display documentation of keyboard actions")
    }

    ```