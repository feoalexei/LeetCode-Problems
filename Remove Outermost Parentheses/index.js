////////// 1021. Remove Outermost Parentheses //////////

/**
 * @param {string} S
 * @return {string}
 */
const removeOuterParentheses = function(S) {
  let output = '';
  let open = 0;

  for (const parent of S) {
    if (parent === '(') {
      if (open) {
        output += parent;
      }
      open++;
    } else {
      open--;
      if (open) {
        output += parent;
      }
    }
  }
  return output;
};


console.log(removeOuterParentheses("(()())(())(()(()))"));
















