////////// 1309. Decrypt String from Alphabet to Integer Mapping //////////

/**
 * @param {string} s
 * @return {string}
 */

const freqAlphabets = function(s) {
    const arr = [];

    for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (s[i + 2] === "#") {
        char = s.slice(i, i + 2);
        i += 2;
      }
      arr.push(char);
    }
    return arr.map(char => String.fromCharCode(+char + 96)).join('');
};

console.log(freqAlphabets("10#11#12"));

// const str = "10#11#12";
// const arr = []

// for (let i = 0; i < str.length; i++) {
//   let char = str[i];
//   if (str[i + 2] === "#") {
//     char = str.slice(i, i+2)
//     i +=2;
//   }
//   arr.push(char);
// }

// const output

// console.log(arr);




















