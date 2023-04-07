// Assignment Code
// Query selectors
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// variables for all lower and uppercase letters, numbers, and characters
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = " !\"#$%&\'()*+,-./:;<=>?@[]^_\`{|}~";
var optionsVariable = "";

// Write password to the #password input
function writePassword(event) {

  event.preventDefault();

  password.value === "";
  var randomString = "";

  // password criteria
  
  var passwordLength = prompt("Choose a password length of at least 8-128 characters.");    

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password is not between 8-128 characters. Please try again.");
    return ""
  } else {

    var lowercaseLetter = confirm("Do you want your password to include lowercase letters?");
    var uppercaseLetter = confirm("Do you want your password to include uppercase letters?");
    var num = confirm("Do you want your password to include numbers?");
    var special = confirm("Do you want your password to include special characters?");
    
    if (lowercaseLetter === false && uppercaseLetter === false && num === false && special === false) {
      alert("error");
      return ""
    }
    if (lowercaseLetter) {
      optionsVariable += lowercaseAlphabet;
    }

    if (uppercaseLetter) {
      optionsVariable += uppercaseAlphabet;
    }

    if (num) {
      optionsVariable += numbers;
    }

    if (special) {
      optionsVariable += specialCharacters;
    }
console.log(optionsVariable)
    for (var i = 0; i < passwordLength; i++) {
      randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
    }
    password.value = randomString;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
