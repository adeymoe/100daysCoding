function minMax(arr){
    const highestNum = Math.max(...arr)
    const lowestNum = Math.min(...arr)
    return [lowestNum, highestNum]
  }