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