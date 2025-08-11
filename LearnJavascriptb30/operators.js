

// // Opetrators

// // Arthemetic operators 

// // + - addition
// // - - Substarction
// // * - multiplication
// // / -division
// // % - remainder 

// // Logical 
// // AND   &&
// // OR    ||
// // NOT    !

// // 1. Arthemetic operators 

//    x = 16
//    y = "raju"

//    console.log(x%y)



//    //NaN - not a number 

//    // Coersion in JS 

//    //fill(part1 + Part2)

// // 2. Logical 
// // 3. comparision 
// // 4. Assignment 
// // 5. ternary operator 

// console.log(45 +"Raju")


// console.log("4" == "Raju")

// console.log("4" === "54t")

console.log("4" === 4)  // true 

//== compare only values but not datatypes

// === compare not only value but also datatypes 

// > 
// <
// >=

// <=

console.log(5 >= 5)

console.log( 6 !=  6)

// AND 

// x   y   result 

// 1   1    1
// 1   0    0
// 0   1    0
// 0   1    0

marks = 70

console.log( marks <=90 && marks >75  ) 




// marks = 50

// if(marks > 90 ){

//    console.log("Grage A+")
// }
// else if (marks <=90 && marks >75 ){

//     console.log("Grage A")
// }


// OR 

// x    y    result 

// 0    1      1

// 1    0      1

// 1    1      1

// 0    0      0

console.log(true || false)

// NOT 

// x   y 

// 0   1 

// 1   0


console.log(!("4" == 4))

//  statusofCheckbox = await page.locator(checkbox).isChecked()  //false

// if(!statusofCheckbox){
//  await page.locator(checkbox).check()

// }

x = "Raju"

// +=
// -=
// /+
// *=

x = 6

x /=5  
console.log(x)

//conditional operator  or ternary 
//condition ? vlaue1 :  value2

value1  = "Lingaraju"
value2  = "Shashi"

finalvalue =  false ? value1 : value2

console.log(finalvalue)

Payment = true 

status1 = "SOLD"
status2 = "In Progress"

finalstatus  =    Payment ? status1 : status2

console.log(finalstatus)