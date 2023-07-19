////////// 168. Excel Sheet Column Title
 //////////

 var getChar = function (num) {
    var start = 'A'.charCodeAt(0);
    return String.fromCharCode(start + num - 1);
  };
  
  var convertToTitle = function(columnNumber) {
    let res = '';
    let i = columnNumber;
    let rem = 0;
    while (i > 0) {
      rem = i % 26;
      if (rem === 0) rem = 26;
      res = getChar(rem) + res;
      i = (i - rem) / 26;
    }
    return res;
  };

console.log(convertToTitle(2147483647))












