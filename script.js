// // Assignment code here


// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); P





//----------------------------------------- added code starts------------------------------------

function generatePassword() {

  // turn the userInputLength to a number
  let userInputLength = parseInt(prompt('Enter a number for password length (between 8 to 128)'))

  //  filter out if the userInputLength is not a number
  if (isNaN(userInputLength)) {
    alert('Password must be a number!')
    return '';
  }

  //  filter out the invalid password length
  if (userInputLength < 8 || userInputLength > 128) {
    alert('Password length must be between 8 to 128!');
    return '';
  }

  
  let includeNum = confirm('Would you like to include numbers? (OK means Yes, cancel means No)');
  let includeLower = confirm('Would you like to include lowercase letters?');
  let includeUpper = confirm('Would you like to include uppercase letters?');
  let includeSymbol = confirm('Would you like to include special characters?');

  //  alert when no character type is selected
  if(!includeNum && !includeLower && !includeUpper && !includeSymbol){
    alert('You must select at least one character type!');
  }


 //loop the functions to add different types of characters.
  let passwordBuffer=[];

  /* loop the functions when the passwordBuffer.length is shorter than the userInputLength, 
  and push the character into the passwordBuffer array.*/
  while(passwordBuffer.length < userInputLength){

    /* each if condition below has passwordBuffer.length < userInputLength, 
    in case the passwordBuffer.length is less than userInputLength before the loop starts, 
    but running the whole loop may let passwordBuffer.length exceed userInputLength.*/
    if (includeNum && passwordBuffer.length < userInputLength){
      passwordBuffer.push(getRandomNum())
    };

    if (includeLower && passwordBuffer.length < userInputLength){
      passwordBuffer.push(getRandomLower())
    };

    if (includeUpper && passwordBuffer.length < userInputLength){
      passwordBuffer.push(getRandomUpper())
    };

    if (includeSymbol && passwordBuffer.length < userInputLength){
      passwordBuffer.push(getRandomSymbol())
    };
  }

  // join the items in the array a string
  return passwordBuffer.join('');
};



//generate random number
function getRandomNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

//generate random lowercase letter
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

//generate random uppercase letter
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

//generate random special character
function getRandomSymbol() {
  const symbol = '!"#$%&\'()*+,-./:;<=>?@[\]^_{|}~';
  return symbol[Math.floor(Math.random() * symbol.length)]
}

//-------------------------------added code ends---------------------------------------