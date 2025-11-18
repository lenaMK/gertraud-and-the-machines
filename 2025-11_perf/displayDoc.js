function displayDoc(){
    fetch('liveConductor.js')
        .then(response => response.text())
        .then(text =>{
            var start = text.indexOf("keyPressed()")
            var end = text.indexOf("draw()")
            var diff = "function ".length
            console.log()
            console.log(text.substring(start-diff, end-diff))
        })
        // outputs the content of the text file

}