function isPalindrome(x) {
    // your code here
   const revStr = x.split('').reverse().join('')
   if(x.toLowerCase() === revStr.toLowerCase()){
     return true
   }else{
     return false
   }
  }