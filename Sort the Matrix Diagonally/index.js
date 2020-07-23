////////// 1329. Sort the Matrix Diagonally //////////

const diagonalSort = function(mat) {
  let diagonalMap = new Map();

  for (let m = 0; m < mat.length; m++) {
    for (let n = 0; n < mat[m].length; n++) {
      if (diagonalMap.has(m - n)) {
        diagonalMap.get(m - n).push(mat[m][n])
      } else {
        diagonalMap.set(m - n, []);
        diagonalMap.get(m - n).push(mat[m][n])
      } 
    }
  }

  diagonalMap.forEach(e => e = e.sort((a, b) => a - b));

  for (let m = 0; m < mat.length; m++) {
    for (let n = 0; n < mat[m].length; n++) {
     mat[m][n] = diagonalMap.get(m - n).shift();
    }
  }
  
  return mat;

};

console.log(diagonalSort([
                          [3,3,1,1], 
                          [2,2,1,2],
                          [1,1,1,2]
                        ]));















