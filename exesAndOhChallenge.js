function XO(str) {
    //code here
  const toArr = str.toLowerCase().split('')
  let xNum = 0
  let oNum = 0
  for(let i=0; i<= toArr.length; i++){
    if(toArr[i] == 'x'){
      xNum += 1
    }
    if(toArr[i]== 'o'){
      oNum +=1
    }
  }
  if(xNum == oNum){
    return true
  }else{
    return false
  }
}