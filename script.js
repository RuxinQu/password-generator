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
  let passwordResult = [];
  let types = [includeNum, includeLower, includeUpper, includeSymbol];
  let typeLists = [numList, lowerList, upperList, symbolList]
  let countTypes = 0;

  // if the types[x] is true, push the corresponding list array to passwordBuffer
  for (let x = 0; x < types.length; x++) {
    if (types[x]) {
      let selection = [];
        countTypes++
        passwordBuffer = passwordBuffer.concat(typeLists[x]);
        selection = typeLists[x][Math.floor(Math.random() * (numList.length))];
        passwordResult.push(selection);
    };
  };


  // if (types[0]) {
  //   var numSelection = numList[Math.floor(Math.random() * (numList.length))];
  //   passwordResult.push(numSelection);
  // }
  // if (types[1]) {
  //   var lowerSelection = lowerList[Math.floor(Math.random() * (lowerList.length))];
  //   passwordResult.push(lowerSelection);
  // }
  // if (types[2]) {
  //   var upperSelection = upperList[Math.floor(Math.random() * (upperList.length))];
  //   passwordResult.push(upperSelection);
  // }
  // if (types[3]) {
  //   var symbolSelection = symbolList[Math.floor(Math.random() * (symbolList.length))];
  //   passwordResult.push(symbolSelection);
  // }

  //   var numSelection = numList[Math.floor(Math.random()* (numList.length))];
  //  passwordResult.push(numSelection);

  //choose random index in passwordBuffer, and return the item to passwordResult
  let numNeeded = userInputLength - countTypes;
  for (let x = 0; x < numNeeded; x++) {
    let random = Math.floor(Math.random() * (passwordBuffer.length - 1))
    passwordResult.push(passwordBuffer[random]);
  };


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
let symbol = '!"#$%&\'()*+,-./:;<=>?@[\]^_{|}~';
let symbolList = symbol.split('');


//-------------------------------added code ends---------------------------------------