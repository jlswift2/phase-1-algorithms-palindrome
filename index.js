function isPalindrome(word) {
  //take in a string, store the reverse in a variable. If they match, return true
  let reverse = word.split("").reverse().join("");

  if(word === reverse){
    return true
  } else {
    return false
  }
}

/* 
  //take in a string, store the reverse in a variable. If they match, return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
