function fizzBuzz(num){
    for(let i= 0; i <= num; i++){
        //don't start from 0 when you are using fizzBuzz cos its from 1
        if(i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz")
            
        }else if(i % 3 == 0){
            console.log("Fizz")
        }else if(i % 5 == 0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
        }

} 

fizzBuzz(15)