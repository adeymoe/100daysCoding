const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// this was my attempt to solve this challenge. After several attempt, i thought of a simpler approach and it worked.



// function findOdd(A) {
//     //happy coding!
//     const counter = 0;
//     const loopTest = A.forEach(item => {
//       A.forEach(item2 =>{
//         if(item == item2){
//           counter += 1 
//         }
//         if(counter % 2 != 0){
//           return item
//         }
//       } )
//     }
//    )
//   }