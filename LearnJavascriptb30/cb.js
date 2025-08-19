// function greet(){

//    console.log("Hey Hi")
// }

// function greet1(){

//      console.log("Namaste " )
// }


// function printMessage(value){

//    greet()
//   console.log(value)

 
// }
// function printMessage(value, value1, callback){

//   let x = value1
//   callback()
//   console.log(value)

 
// }

// //printMessage("Raju", greet )

// printMessage("Raju","guru", greet1 )

//closure 

// higher order  - the main function which accepting callback
// callback - function we will send as argument to another function 
// closure function 

// //anonimous function without name

//function( function1 ( function2 ( function3 )))



// const p = new Promise((resolve, reject) => {
//     let x =2+1;
  
//     if (x === 2) {
//       resolve("Success");
//     } else {
//       reject("Fail");
//     }
//   });


// console.log(p)   // Reject { 'Fail' }
 
// p.then( message => console.log(message))
//  .catch(message => console.log(message))



//p.then(message => console.log(message), message => console.log(message))


p = Promise.resolve("Success")

//p = Promise.reject("Raju")

console.log(p)

p.then(message => console.log(message))
// .finally(console.log("Promises finally"))

//3 state of promises 

// 1. Pending 

// 2. resolved

// 3. rejected

//.finally()

// .any()
// .race()
// .