function strCount(str, letter){  
    //code here
    let count = 0
    let arrStr = str.split('')
    for(let i = 0; i < arrStr.length; i++){
      if(arrStr[i].toLowerCase() === letter){
        count ++
      }
    }
    return count
  }