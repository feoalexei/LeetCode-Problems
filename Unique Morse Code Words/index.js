////////// 804. Unique Morse Code Words //////////

/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = function(words) {
  const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

  const decodes = new Set();
  
  for (const word of words) {
    let decode = '';
    for (const letter of word) {
      let index = letter.charCodeAt() - 97;
      decode += morse[index];
    }
    decodes.add(decode);
  }
   return decodes.size; 
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));



















