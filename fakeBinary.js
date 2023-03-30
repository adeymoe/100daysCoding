function fakeBin(x){
    const binForm = []
    const bin = x.split('')
    bin.forEach(n=> {
      (n < 5) ? binForm.push(0) : binForm.push(1)
    }
                            )
    return binForm.join('')
  }