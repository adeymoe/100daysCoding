function sumTwoSmallestNumbers(numbers) {  
    //Code here
    const sortedArr = numbers.sort((a,b)=> a-b)
    
    const final = sortedArr[0] + sortedArr[1]
    return final
    
  }