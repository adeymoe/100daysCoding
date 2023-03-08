function removeEveryOther(arr){
    //your code here
    const elementLeft = arr.filter((item, i)=> {
      if(!(i % 2 !== 0)){
        return item
      }
    })
    
    return elementLeft
  }