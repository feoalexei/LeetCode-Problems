////////// 1134. Armstrong Number //////////

const armstrongNumber = function(num) {
  const result = [...`${num}`]
    .reduce((a,c) => a + Math.pow(c, `${num}`.length), 0);

  return result === num;
};

console.log(armstrongNumber(1634));











