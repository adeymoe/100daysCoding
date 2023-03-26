function findAverage(array) {
    const sumArr = array.reduce((a, c) => a + c , 0)
    const averageArr = sumArr / array.length
    if(array === []){
      return 0;
    }
    return averageArr
  }