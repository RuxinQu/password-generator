/*====================================================================================================================
                                         Description
This code takes a input number as password length, and four booleans for whether or not to include nums, lowercase letters
uppercase letters and special characters. 

If one character type is selected, all the array elements in the selected types will be added to passwordBuffer; one 
random element from this type will be added to passwordResult; then the rest of the password characters will be chosen 
randomly from passwordBuffer.

PasswordResult will be shuffled before being returned, so the order is not pre-determined.
====================================================================================================================*/

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*----------------------------------------- added code starts------------------------------------*/

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


  //four booleans from user input
  let includeNum = confirm('Would you like to include numbers? (OK means Yes, cancel means No)');
  let includeLower = confirm('Would you like to include lowercase letters?');
  let includeUpper = confirm('Would you like to include uppercase letters?');
  let includeSymbol = confirm('Would you like to include special characters?');

  let passwordBuffer = [];
  let passwordResult = [];
  let types = [includeNum, includeLower, includeUpper, includeSymbol];
  let typeLists = [numList, lowerList, upperList, symbolList]
  let countTypes = 0;


  // alert when no character type is selected
  if (!includeNum && !includeLower && !includeUpper && !includeSymbol) {
    alert('You must select at least one character type!');
  }

  //loop through the types the user selected
  for (let x = 0; x < types.length; x++) {
    /*if the type is selected, push the corresponding type list to the passwordBuffer, and push one character from the type list to passwordResult
    so at least one character from the selected type will be included.*/
    if (types[x]) {
      let selection = [];
      countTypes++
      passwordBuffer = passwordBuffer.concat(typeLists[x]);
      selection.push(typeLists[x][Math.floor(Math.random() * (typeLists[x].length))]);
      passwordResult.push(selection);
    };
  };


  //loop throught the passwordBuffer to push the rest characters
  let numNeeded = userInputLength - countTypes;
  for (let x = 0; x < numNeeded; x++) {
    let random = Math.floor(Math.random() * (passwordBuffer.length))
    passwordResult.push(passwordBuffer[random]);
  };

  //shuffle the result so the order is not pre-determined
  let shuffledPassword = passwordResult.sort(function () {
    return Math.random() - 0.5;
  });

  // join the items in the array a string
  return shuffledPassword.join('')
};



//-------get number list-------
let numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


//-------get lowercase letter list-------
let lowerList = [];
for (let x = 0; x < 26; x++) {
  lowerList.push(String.fromCharCode(x + 97));
}

//-------get uppercase letter list--------
let upperList = [];
for (let x = 0; x < lowerList.length; x++) {
  upperList[x] = lowerList[x].toUpperCase();
}

//-----------special character------------
let symbolList = [];
for (let x = 0; x < 15; x++) {
  symbolList.push(String.fromCharCode(x + 33));
}

/*-------------------------------added code ends---------------------------------------*/