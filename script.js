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
generateBtn.addEventListener("click", writePassword);





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
  if (!includeNum && !includeLower && !includeUpper && !includeSymbol) {
    alert('You must select at least one character type!');
  }

  
  let passwordBuffer = [];
  let types = [includeLower, includeUpper, includeNum, includeSymbol];
  let typeLists = [lowerList, upperList, numList, symbolList]


  // if the types[x] is true, push the corresponding list array to passwordBuffer
  for (let x = 0; x < types.length; x++) {
    if (types[x]) {
      passwordBuffer = passwordBuffer.concat(typeLists[x]);
    };
  };


  let passwordResult = [];


  //choose random index in passwordBuffer, and return the item to passwordResult
  for (let x = 0; x < userInputLength; x++) {
    let random = Math.floor(Math.random() * (passwordBuffer.length - 1))

    passwordResult.push(passwordBuffer[random]);
  };


  // join the items in the array a string
  return passwordResult.join('')
};



//-------get number list-------
// make each numbers appear twice, so the numList length(20) is close to the length of letter lists(26) and symbolList(30). 
// so the possibility of getting a random number is close to getting other character type.
let numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


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
let symbol = '!"#$%&\'()*+,-./:;<=>?@[\]^_{|}~';
let symbolList = symbol.split('');


//-------------------------------added code ends---------------------------------------