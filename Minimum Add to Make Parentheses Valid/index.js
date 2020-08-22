////////// 921. Minimum Add to Make Parentheses Valid //////////


/**
 * @param {string} S
 * @return {number}
 */
const minAddToMakeValid = function(S) {
    const arr = [];
    let count = 0;

   for (const char of S) {
       char === '(' 
        ? arr.push(char) 
        : count+= arr.pop() ? 0 : 1
   }

   return count + arr.length;
 
};

console.log(minAddToMakeValid("()))(("));




















