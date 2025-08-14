
// function add(){


//     console.log(4+5)
// }

// add()


// class calculator {

//     stuname = "Shashi"

//     constructor(value1, value2){

//         console.log(value1)

//          console.log(value2)
//     }

//     add(num1, num2) {

//         console.log(num1 + num2)
//     }

//     substract(num1, num2) {

//         console.log(num1 - num2)
//     }

//     multiply(num1, num2) {

//         console.log(num1 * num2)
//     }

//     devide(num1, num2) {

//         console.log(num1 / num2)
//     }
// }

// const cal = new calculator("Lingaraj", "Vijay")

// cal.add(2,7)



//const cal1 = new calculator()

// cal1.add(5,8)

// cal1.multiply(4,8)


// console.log(cal1.stuname)


//const cal2 = new calculator()

// cal2.add(3,7)

// console.log(cal2.stuname)



// class  classname{
//      //variables 
//     // methods 
// }

// constructor - simply its a method 

//constructor is a name of the method 

// it automatically invoked when u create object of the class




// class employee {


//     empname = "Sheena"

//     displayempDetails() {

//         console.log(this.empname)
//     }

//     m1() {

//         console.log("this is m1 method")
//     }

//     m2() {

//         console.log("this is m2 method")

//         this.m1()
//     }

// }

// const emp1 = new employee()

// emp1.displayempDetails()

// emp1.m2()



class student {

    static stuname = "Yamuna"

    stuplace = "Bangalore"

    constructor(){

       
        console.log("this is constructor") 
    }

    m1() {

        console.log("this is m1 method")
    }


    static m2() {

        console.log("this is m2 method")
    }



    m3() {

        console.log("this is m3 method")

    }


    static m4() {

        console.log("this is m4 method")

        this.m2()
    }



}

// variables with static we call static variables 

// methods with static we call that methods as static methods

//console.log(student.stuplace)

//student.m2()

// How to declare the class 

// variables 

// methods 

// constructor 

// ------------------
// static  - no need create .. With help of clasds we can access 
// Non static   - Object is required to access 

// constructor(value)

// const obj = new classanme(value)

// this - to call a varibale or a mthod within the same class other methods 


const stu1 = new student()

stu1.m3()

student.m4()