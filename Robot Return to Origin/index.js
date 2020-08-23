////////// 657. Robot Return to Origin //////////


/**
 * @param {string} moves
 * @return {boolean}
 */
// const judgeCircle = function(moves) {
//     const pos = {};
//     for (const move of moves) {
//        if (!pos[move]) pos[move] = 0;
//        pos[move]++    
//     }
//     return pos["U"] == pos["D"] && pos["L"] == pos["R"]
// };

// console.log(judgeCircle("UDLRLR"));


const judgeCircle = function(moves) {
    let UD = 0;
    let LR = 0;
    for (const move of moves) {
       move == "U" ? UD++ : move == "D" 
        ? UD-- : move == "L"
        ? LR++ : LR--   
    }
    return UD === 0 && LR === 0;
};

console.log(judgeCircle("LL"));




















