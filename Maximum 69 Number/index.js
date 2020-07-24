////////// 1323. Maximum 69 Number //////////

/**
 * @param {number} num
 * @return {number}
 */
// const maximum69Number = function(num) {
//     const arr = [...num.toString()];
//     let max = num;

//     for (let i = 0; i < arr.length; i++) {
//       let temp = arr[i];

//       arr[i] == 9 ? arr[i] = 6 : arr[i] = 9;
      
//       let res = arr.join('');
      
//       if (res > max) max = res;

//       arr[i] = temp; 

//     }
  
//     return +max;
// };
const maximum69Number = num => +num.toString().replace('6','9');

console.log(maximum69Number(9669));


// const num = 96609;

// const str = num.toString();
// const arr = [...num.toString()];

// let max = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   let temp = arr[i];
//   arr[i] = '7';
//   let res = +arr.join('');

  
//   console.log(arr);
//   console.log(res);
//   if (res > max) max = res;
  
//   console.log('max: ' + max);
//   arr[i] = temp;
// }



// console.log('num: ' + num);
// console.log('str: '+ str);
// console.log('arr: ' + arr);
// console.log('max: ' + max);















