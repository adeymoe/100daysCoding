function findAverage(array) {
    if(array.length === 0){
    return 0;
  }
  const sumArr = array.reduce((a, c) => a + c , 0)
  const averageArr = sumArr / array.length
  return averageArr
}