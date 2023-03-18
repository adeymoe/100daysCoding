function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    const arrTotal = classPoints.reduce((a, c)=> a + c, 0)
    const ave = (arrTotal + yourPoints) / (classPoints.length + 1)
    if(yourPoints - ave > 0){
      return true
    }else{
      return false
    }
  }