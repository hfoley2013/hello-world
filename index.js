// Functions to be used on webpage

// Asks users for their name and returns appropriate greeting
function greetUser() {
  let userName = prompt('Hello! What is your name?');
  //If user does not enter a name, code executes without allocated space for name
  if(userName.length < 1) {
    let greeting = "Hello! Welcome to my website!"  
    document.write(greeting)
  }
  // If user enters a name, code will display greeting with their name
  else {
    let greeting = "Hello " + userName + "! Welcome to my website!"
    document.write(greeting)
  }
}

// Asks user to confirm that they want to leave the site
function confirmExit(name){
  if(name == "external"){
    if(!confirm("Go to external site?")){
      return false;
   }
  }
}

// Asks user to confirm they want to close or refresh the window
function confirmClose() {
window.addEventListener('beforeunload', function (e) {
  e.preventDefault;
  e.returnValue = "";
});
}

// User Validation Loop
function guessingGame() {
  let attemptsAllowed = 3;
  let correctAnswer = 5;
  let userGuess = prompt('How many jumps do soldiers jump at Airborne training in Ft. Benning, GA? (Hint: <10)');
  let correctMessage = "That's right! Trainees conduct 5 jumps at Airborne school. 2 daytime jumps and 1 nighttime jump with no equipment, and 1 daytime and nighttime jump with full combat equipment. Not a lot of jumps, right?";
  let incorrectMessage = "Trainees conduct 5 jumps at Airborne school. 2 daytime jumps and 1 nighttime jump with no equipment, and 1 daytime and nighttime jump with full combat equipment. Not a lot of jumps, right?";

  while (userGuess != correctAnswer && attemptsAllowed > 1) {
    attemptsAllowed--;
    prompt(`Wrong! Guess again. ${attemptsAllowed} remaining.`)
  }
  if (userGuess == correctAnswer) {
    alert(correctMessage);
  } else {
    alert(incorrectMessage);
  }
}

// Image Loop

function printImages() {
  let numImages = prompt("How many skydives do you want to make?");
  let count = 0;
  
  while (count < numImages){
    const aside = document.getElementById("suggestion-box");
    count++;
    let image = document.createElement("img");
    image.setAttribute("src", "102/combat-exit.jpg");
    image.setAttribute("class", "userImage")
    aside.appendChild(image)
    }
}