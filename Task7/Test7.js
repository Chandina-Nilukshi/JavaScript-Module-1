'use strict'

var turns = parseInt(prompt("Enter the number of turns: "))
let total = 0

while (turns != 0){
    total += Math.floor(Math.random()*7)
    turns -= 1
}

document.querySelector("#total").innerHTML = `The total is ${total}`