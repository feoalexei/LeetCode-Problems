////////// 1450. Number of Students Doing Homework at a Given Time //////////

const busyStudent = function(startTime, endTime, queryTime) {
  let counter = 0;
  for (let i = 0; i < startTime.length; i++) {
      if (queryTime >= startTime[i] && queryTime <= endTime[i] 
          || endTime[i] === queryTime && startTime[i] === queryTime) 
          counter++;
  }
  return counter;
};

console.log(busyStudent([1,2,3], [3,2,7], 4));











