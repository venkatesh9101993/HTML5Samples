


var sourceDivDragOver = function(e){
     e.preventDefault()
     console.log(e)
   

}

var dragImageNow = function(e){
    console.log("Dragging the image")
    console.log(e)
    console.log(e.target.id)
    e.dataTransfer.setData("sourceid", e.target.id)
}

var dropImageNow = function(e){
    e.preventDefault()
    console.log("Dropping to div 2")
    var idOfImage = e.dataTransfer.getData("sourceid")
    var tempImage = document.getElementById(idOfImage)
    e.target.innerHTML = ""
    e.target.appendChild(tempImage)

}

var targetDivDragOver = function(e){
    e.preventDefault()
}