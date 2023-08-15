// var player1="Player1";

// var player2="Player2";

// var randomNumber1=Math.floor(Math.random()*6)+1;    //1-6

// var randomDiceImage="dice"+randomNumber1+".png";    //dice1-dice6.png

// var randomImageSource="images/"+randomDiceImage;    //images/dice1.png-images/dice6.png

// var image1=document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);

// var randomNumber2=math.floor(math.random()*6)+1;

// // var randomDiceImage="dice"+randomNumber2+".png";
// var randomImageSource2="images/dice"+randomNumber2+".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// if(randomNumber1>randomNumber2){
//     document.querySelector("h1").innerHTML=(`player1 wins`);
// }
// else if(randomNumber1<randomNumber2){
//     document.querySelector("h1").innerHTML=(`player2 wins`);
// }
// else{
//     document.querySelector("h1").innerHTML=("draw!!");
// }

// // image2.setAttribute("src",randomImageSource);

// // function editname(){
// //     player1=prompt('Enter name of first player!!!!')
// //     player2=prompt('Enter name of second player!!!!')
    
// //     if(player1.length<1 || player2.length<1){
// //         alert('invalid name');
// //         retrurn;
// //     }
// //     document.querySelector("p.player1")
// //         .innerHTML=plater1;
// //     document.querySelector("p.player2")
// //         .innerHTML=player2;
// // }


var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "oops!!Draw!";
}