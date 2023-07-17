////////// 125. Valid Palindrome //////////

var isPalindrome = function(s) {
    const regex = /[^a-z0-9]/gi;
    const cleanString = s.replace(regex, '').toLowerCase();
    return cleanString === [...cleanString].reverse().join('')
};

// var isPalindrome = function(s) {
//   s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
//   for (let i = 0; i < s.length; i += 1) {
//     if (s[i] !== s[s.length - 1 -i]) {
//       return false;
//     }
//   }
  
//   return true;
// };

console.log(isPalindrome("A man, a plant, a canal: Panama"));













