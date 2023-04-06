// Assignment Code
// Query selectors
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("password");

// variables for all lower and uppercase letters, numbers, and characters
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = " !\"#$%&\'()*+,-./:;<=>?@[]^_\`{|}~";
var optionsVariable = "";

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  event.preventDefault();

  password.value === "";
  var randomString = "";

  // password criteria
  var lowercaseLetter = confirm("Do you want your password to include lowercase letters?");
  var uppercaseLetter = confirm("Do you want your password to include uppercase letters?");
  var num = confirm("Do you want your password to include numbers?");
  var special = confirm("Do you want your password to include special characters?");
  var passwordLength = prompt("Choose a password length of at least 8-128 characters.");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password is not between 8-128 characters. Please try again.");
    var passwordLength = prompt("Choose a password length of 8-128 characters.");
  }

  else if (lowercaseLetter === false && uppercaseLetter === false && num === false && specialChar === false) {
    var lowercaseLetter = confirm("Do not want your password to contain lowercase letter?");
    var uppercaseLetter = confirm("Do not want your password to contain uppercase letter?");
    var num = confirm("Do not want your password to contain numbers?");
    var special = confirm("Do not want your password to contain special characters?");
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

  for (var i = 0; i < passwordLength; i++) {
    randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
  }
  password.value = randomString;
}
// writePassword();
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
