// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Arrays for letters, numbers, and special characters
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "'", "#", "$", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "~", "{", "}"];


// Assignment code here

var generatePassword = function () {
  
  // ask user for length of new password
  var confirmLength = prompt("Please enter the desired length of your new password. Passwords must be between 8-128 characters long.");
  
  // validate password length
  if (confirmLength < 8 || confirmLength > 128 || confirmLength === null || isNaN(confirmLength)) {
    
    // Alert user to re-enter length if input is invalid and return to confirmLength prompt
    alert("You need to enter a valid password length. PLEASE TRY AGAIN.");
    
    return generatePassword();
  
  } else {
    
    // Math.floor() in case user thinks they're funny and enters decimal
    confirmLength = Math.floor(Number(confirmLength));
    
    // Reassign confirmLength value to userLength
    var userLength = confirmLength;
    // console.log(userLength);
  }
  
  // Variable to hold confirmed character arrays
  var passwordCharacters = [];

  // Confirm inclusion of upper, lower, numbers, and or special characters
  var confirmUpper = confirm("Would you like your password to include Upper Case Letters?");
  if (confirmUpper) {
    passwordCharacters = passwordCharacters.concat(upperCaseLetters);
  }

  var confirmLower = confirm("Would you like your password to include Lower Case Letters?");
  if (confirmLower) {
    passwordCharacters = passwordCharacters.concat(lowerCaseLetters);
  }

  var confirmNumbers = confirm("Would you like your password to include Numbers?");
  if (confirmNumbers) {
    passwordCharacters = passwordCharacters.concat(numbers);
  }

  var confirmSpecial = confirm("Would you like your password to include Special Characters?");
  if (confirmSpecial) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
  }
    
  // console.log(passwordCharacters);
    
  // Conditional statement to alert user to select at least one character type and return to confirmLength prompt if no character types are chosen
  if (confirmLower === false && confirmUpper === false && confirmNumbers === false && confirmSpecial === false) {
    alert("You must select at least ONE character type for your password. PLEASE START OVER.");
    return generatePassword();
  }
  
  // Variable to hold password created in for loop
  var finalPassword = "";
  
  for (i = 0; i < userLength; i++) {
    finalPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  
  return finalPassword;
  // console.log(finalPassword);
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}






