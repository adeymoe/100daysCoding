function squareDigits(num){
    const numArr = String(num).split('')
    const sqrArr = numArr.map(n => n * n)
    return Number(sqrArr.join(''))
  }