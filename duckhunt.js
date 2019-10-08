
var gameZone = document.createElement("section")

// var birdElement = document.createElement("div");
// birdElement.className =  "object";
for (let i = 0; i < 10; i++){
    var birdElement = document.createElement("div");
    birdElement.className =  "object";
    gameZone.appendChild(birdElement);

    birdElement.style.top = Math.random() * 696 + "px";
    birdElement.style.left = Math.random() * 1550 + "px";
}

document.body.appendChild(gameZone);
// gameZone.appendChild(birdElement);

birdElement.style.top = Math.random() * 450 + "px";
birdElement.style.left = Math.random() * 550 + "px";

var temp = 1;


setInterval(function(){
    
    birdElement.style.top = Math.random() * 696 + "px";
    birdElement.style.left = Math.random() * 1550 + "px";
    birdElement.style.transitionDuration = "1s";
    temp++
},1000)


function killDuck(){
    this.remove()

    birdElement = document.createElement("div");
    birdElement.className =  "object";
    gameZone.appendChild(birdElement);
    birdElement.style.top = Math.random() * 696 + "px";
    birdElement.style.left = Math.random() * 1550 + "px";

    birdElement.addEventListener("click", killDuck);
}

birdElement.addEventListener("click", killDuck);

