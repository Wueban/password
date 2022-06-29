// Assignment code here
const capitalLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const arrayNumeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const arraySpecialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function() {
  var results = "";
  var userprompt = window.prompt("this is a password generator, how many characters would you like to be ");

  var numberOfCharacters = parseInt(userprompt)
  if (numberOfCharacters >= 8 && numberOfCharacters <= 128) {
    var uppercase = window.confirm("press ok to add upper case to your password");
    var lowerCase = window.confirm("press ok to add lower case to your password");
    var number = window.confirm("pres ok to add numbers to your passwrod");
    var specialCharacters = window.confirm("pres ok to add special characters to your password");
  


  //if statements for the question

  var question = [];
  if (uppercase === true) question.push(capitalLetter);
  if (lowerCase === true) question.push(letter);
  if (number === true) question.push(arrayNumeric);
  if (specialCharacters === true) question.push(arraySpecialCharacters);

  //looping thourhg arrays 
  for (var i = 0; i < numberOfCharacters; i++) {
    //save the user password info
    var saveButton = Math.floor(Math.random() * question.length)
    var selectedArray = question[saveButton];
    results += selectedArray[Math.floor(Math.random() * selectedArray.lenght)];

  } 
} else {
    window.alert("you have to select between 8 to 124 characters")
    return generatePassword();
}
return results;
  



  // if statements for the user prompt

//   if (userprompt === "yes" || userprompt === "YES") {
//     window.prompt("how many characters would you like to have in your password")
//   } else if (userprompt === "no" || userprompt === "NO") {
//     window.prompt("have a nice day")
//   } else {
//     window.alert("enter a valid option")
//   }


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
