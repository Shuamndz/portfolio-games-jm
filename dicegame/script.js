var randomNumber1 = Math.random() * 6;
var randomNumber2 = Math.random() * 6;

var playerOne = Math.floor(randomNumber1) + 1;
var playerTwo = Math.floor(randomNumber2) + 1;

var diceRandomImage1 = "images/" + "dice" + playerOne + ".png";
var diceRandomImage2 = "images/" + "dice" + playerTwo + ".png";


var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

var player1 = image1.setAttribute("src", diceRandomImage1);
var player2 = image2.setAttribute("src", diceRandomImage2);

console.log(player1);
console.log(player2);

if (playerOne > playerTwo) {
    document.querySelector("h1").textContent = "Player One Wins!";
} else if (playerOne < playerTwo) {
    document.querySelector("h1").textContent = "Player Two Wins!";
} 
else {
    document.querySelector("h1").textContent = "Draw";
}

