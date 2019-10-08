
var gameZone = document.createElement("section")

var birdElement = document.createElement("div")
birdElement.id =  "object"

document.body.appendChild(gameZone);
gameZone.appendChild(birdElement)



for (let i = 1 ; i<100; i++) {
    var temp = 1
    
    setInterval(function(){
       birdElement.style.top = temp + "px";
       birdElement.style.left = temp + "px";
       temp++
    },1000)
    

}

