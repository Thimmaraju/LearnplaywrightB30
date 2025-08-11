

// // function displaynames(){

// //     console.log("Raju")
// // console.log("Vijay")
// // console.log("Yamuna")
// // }


// // // function  name_of_the_function{

// // //     //block of code 
// // // }


// // function add(num1, num2){

// //     console.log(num1)
// //     console.log(num2)
// //     console.log(num1+num2)
// // }


// // add(4,8)

// // add(45,67)

// function Raju(){

//     console.log("Message")
// }

// Raju()


// // var 
// // let 
// // const
// // function
// // for 
// // while
// // do 
// // while 

// function print_Message( name ){

//    console.log("My name is "+ name)

// }

// print_Message()

// print_Message("Narayan")

// function without Params / Arguments

// function with Params / Arguments 

// function add(num1, num2){

//     return num1+num2
// }

// x = add(4,8)

// console.log(x)

// //console.log(add(4,8))



//   let randomchars = (Math.random() + 1).toString(36).substring(7);

//   console.log(randomchars)

//   function generateRandomEMail(){
//      let randomchars = (Math.random() + 1).toString(36).substring(7);

//      return "rajutester"+randomchars+"@gmail.com"
     
//   }

  //x = generateRandomEMail()

//   const  email = generateRandomEMail()

//   console.log(x)

//   //await page.locator(xpath).fill(email)

//   textvalue = await pageXOffset.locator(xpath).textcontext()

//   await expect(text).to.equal("rajutester2673@gmail.com")


// function substarct(n1, n2){

//     return n1-n2
// }

//es6 version function are simplified 

//arrow functions 


//   function generateRandomEMail(){
//      let randomchars = (Math.random() + 1).toString(36).substring(7);

//      return "rajutester"+randomchars+"@gmail.com"
     
//   }


  generateRandomEMail = () => {
     let randomchars = (Math.random() + 1).toString(36).substring(7);

     return "rajutester"+randomchars+"@gmail.com"
     
  }

  console.log(generateRandomEMail())

  function display(){

    // block of code
  }

//   functionname = () => {
//     //block of code 
//   }


// function add(num1, num2){

//     return num1+num2
// }

// add = (num1, num2) => num1+num2


// console.log(add(23,34))


// function squarrotofNum(num){
//     console.log(num*num)
// }


squareofNum = num=>console.log(num*num)

squareofNum(8)