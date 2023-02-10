var topLeft = document.getElementById("top-left")
var topMiddle = document.getElementById("top-middle")
var topRight = document.getElementById("top-right")
var middleLeft = document.getElementById('middle-left')
var middleMiddle = document.getElementById('middle-middle')
var middleRight = document.getElementById('middle-right')
var bottomLeft = document.getElementById("bottom-left")
var bottomMiddle = document.getElementById('bottom-middle')
var bottomRight = document.getElementById('bottom-right')


var innerGrid = document.querySelectorAll('inner-grid')



function changeTopLeft(){
    game()
    topLeft.innerHTML = newAdd
    gameBoard()
}
function changeTopMiddle(){
    game()
    topMiddle.innerHTML = newAdd
    gameBoard()
}
function changeTopRight(){
    game()
    topRight.innerHTML = newAdd
    gameBoard()
}
function changeMiddleLeft(){
    game()
    middleLeft.innerHTML = newAdd
    gameBoard()
}
function changeMiddleMiddle(){
    game()
    middleMiddle.innerHTML = newAdd
    gameBoard()
}
function changeMiddleRight(){
    game()
    middleRight.innerHTML = newAdd
    gameBoard()
}
function changeBottomLeft(){
    game()
    bottomLeft.innerHTML = newAdd
    gameBoard()
}
function changeBottomMiddle(){
    game()
    bottomMiddle.innerHTML = newAdd
    gameBoard()
}
function changeBottomRight(){
    game()
    bottomRight.innerHTML = newAdd
    gameBoard()
}

topLeft.addEventListener('click', changeTopLeft)
topMiddle.addEventListener('click', changeTopMiddle)
topRight.addEventListener('click', changeTopRight)
middleLeft.addEventListener('click', changeMiddleLeft)
middleMiddle.addEventListener('click', changeMiddleMiddle)
middleRight.addEventListener('click', changeMiddleRight)
bottomLeft.addEventListener('click', changeBottomLeft)
bottomMiddle.addEventListener('click', changeBottomMiddle)
bottomRight.addEventListener('click', changeBottomRight)

// add a selector, choose to play x's or O's


var chosen = document.getElementById('chosen')
var oButton = document.getElementById('oButton')
var xButton = document.getElementById('xButton')


oButton.addEventListener("click", setTrueO)
xButton.addEventListener("click", setTrueX)


function setTrueO(){
    xBool = false
    oBool = true
    if(oBool === true){
        chosen.innerHTML = o
    }
    
}

function setTrueX(){
    oBool = false
    xBool = true
    if(xBool === true){
        chosen.innerHTML = xlm
    }


}

//funky work around - if xbool is true, but obool is also true. Set xbool to false and ignore request. only work if obool is not true.


function game(){
    if(oBool === true){
        newAdd = 'O'
    }
    else if(xBool === true){
        newAdd = 'X'
    }
}

var newAdd = ""
var o = "Chosen: O"
var xlm = "Chosen: X"

function gameBoard(){
    if(topLeft.innerHTML && topMiddle.innerHTML && topRight.innerHTML === "X"){ // across the top
        console.log("You win!")
    }
     else if(topLeft.innerHTML && middleLeft.innerHTML && bottomLeft.innerHTML === "X"){ // straight down 
        console.log("You win!")
    } else if(topLeft.innerHTML && middleMiddle.innerHTML && bottomRight.innerHTML === "X"){ // across the middle 
        console.log("You win.")
    } else if(topMiddle.innerHTML && middleMiddle.innerHTML && bottomMiddle.innerHTML === "X"){ // striaght down the middle
        console.log("You win")
    } else if(topRight.innerHTML && middleRight.innerHTML && bottomRight.innerHTML  === "X"){// accross the middle from the right
        console.log("You win!")
    } else if(topRight.innerHTML && middleMiddle.innerHTML && bottomLeft.innerHTML  === "X"){ // straight down the right
        console.log("Winner!")
    } else if(middleRight.innerHTML && middleMiddle.innerHTML && middleLeft.innerHTML === "X"){  // middle to middle
        console.log("You win!")
    } else if(bottomLeft.innerHTML && bottomMiddle.innerHTML && bottomRight.innerHTML === "X"){ // across the bottom. 
        console.log("You win.")
    } else if(topLeft.innerHTML && topMiddle.innerHTML && topRight.innerHTML === "O"){ // across the top
        console.log("You win!")
    } else if(topLeft.innerHTML && middleLeft.innerHTML && bottomLeft.innerHTML === "O"){ // straight down 
        console.log("You win!")
    } else if(topLeft.innerHTML && middleMiddle.innerHTML && bottomRight.innerHTML === "O"){ // across the middle 
        console.log("You win.")
    } else if(topMiddle.innerHTML && middleMiddle.innerHTML && bottomMiddle.innerHTML === "O"){ // striaght down the middle
        console.log("You win")
    } else if(topRight.innerHTML && middleRight.innerHTML && bottomRight.innerHTML  === "O"){// accross the middle from the right
        console.log("You win!")
    } else if(topRight.innerHTML && middleMiddle.innerHTML && bottomLeft.innerHTML  === "O"){ // straight down the right
        console.log("Winner!")
    } else if(middleRight.innerHTML && middleMiddle.innerHTML && middleLeft.innerHTML === "O"){  // middle to middle
        console.log("You win!")
    } else if(bottomLeft.innerHTML && bottomMiddle.innerHTML && bottomRight.innerHTML === "O"){ // across the bottom. 
        console.log("You win.")
    }



    else {
        console.log('Playing');
      }
}

//GAME
//CLEAR BOARD
//COMPUTER

