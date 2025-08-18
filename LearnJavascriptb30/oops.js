// class student {

//      studentdetails(name, place , course){

//         this.studentname = name
//         this.studentplace = place
//         this.studentcourse = course

//      }

//      displaystudetails(){

//         console.log(this.studentname, this.studentplace, this.studentcourse)
//      }

// }

// const stu1 = new student()

// stu1.studentdetails("Raju", "Blr", "Playwright")

// stu1.displaystudetails()


// class A {

//     m1() {

//         console.log(" This method is simple one  M1 ")
//     }

//     m2() {

//         console.log(" This method is simple one  M2 ")
//     }



//     m3() {

//         console.log(" This method is simple one  M3 ")
//     }


//     m4() {

//         console.log(" This method is simple one  M4 ")
//     }


// }



// class B extends A {

//     m5() {

//         console.log(" This method is simple one  M5 ")
//     }

//     m6() {

//         console.log(" This method is simple one  M6 ")
//     }



//     m7() {

//         console.log(" This method is simple one  M7 ")
//     }


// }

// class C extends B{


//         m8() {

//         console.log(" This method is simple one  M8 ")
//     }

//     m9() {

//         console.log(" This method is simple one  M9 ")
//     }

// }

// const objc = new C()

// objc.m5() // from B

// objc.m1()  // from A

// objc.m9()  // from C

// Polymorphism 

// class A {


//     display() {

//         console.log("This Method is from Parent")
//     }

//     add(num1, num2) {

//         console.log(num1)
//         console.log(num2)
//         console.log(num1 + num2)
//     }

// }


// class B extends A {


//     display() {

//         console.log("This Method is from Child")
//     }

//     add(num1, num2, num3) {

//         console.log(num1)
//         console.log(num2)
//         console.log(num3)
//         console.log(num1 + num2 + num3)
//     }

// }

// const raju =  new A()

// raju.display()  // Method Overriding 

// raju.add(3,7, 5)  // Method Overloading 


//Prototype 


// class employee {

//     x = 20
//     m1() {

//         console.log("Simple M1 Method")
//     }

//     m2() {

//         console.log("Simple M2 Method")
//     }
// }

// employee.prototype.y = 50


//   function m3(){

//         console.log("Simple M3 Method")
//     }


// employee.prototype.m3 = function () {

//     console.log("Simple M3 Method")
// }

// const emp1 = new employee()

// emp1.m1()
// emp1.m2()

// emp1.m3()

// console.log(emp1.x)

// console.log(emp1.y)


// const emp2 = new employee()


// emp2.m1()
// emp2.m2()

// emp2.m3()


// class A {

//     m1() {

//         console.log("Simple M1 Method")
//     }
// }


// class B extends A {

//     m2() {

//         console.log("Simple M2 Method")
//     }
// }

// class C extends A {

//     m3() {

//         console.log("Simple M3 Method")
//     }
// }

// const  obj = new B()

// obj.m1() // A

// obj.m2() // B



// const  obj2 = new C()

// obj2.m1() // A

// obj2.m3() // C


function add(n1, n2,n3){

    console.log(n1)
    console.log(n2)
    console.log(n3)
    console.log(n1+n2 +n3)
}


add(4,7,8)