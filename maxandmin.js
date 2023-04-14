function highAndLow(numbers){
    // ...
    const numArr = numbers.split(' ')
    console.log(numArr)
    const formatArr = numArr.map(n => Number(n))
    let newArr = []
    newArr.push(Math.max(...formatArr))
    newArr.push(Math.min(...formatArr))
    console.log(newArr.join(' '))
  }