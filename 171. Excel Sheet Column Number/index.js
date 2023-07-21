////////// 171. Excel Sheet Column Number

 //////////

 var titleToNumber = function(ct) {
  let sum = 0;
  for (let i = 0; i < ct.length; i++) {
    sum = sum * 26 + (ct[i].charCodeAt(0) - 64);
  }
  
return sum;
};

console.log(titleToNumber('ZY')) // 55













