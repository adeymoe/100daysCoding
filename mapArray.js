//practice array map method with currying functions
function multiplyAll(arr) {
  
    return function intMultiplier(int){
     const mappedArr = arr.map(item => item * int)
     return mappedArr
    }
  } 