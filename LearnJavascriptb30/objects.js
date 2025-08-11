


// objectaname = {

//    propertyname : propertyvalue,
   

// }

student = {

    firstname : "Yamuna",
    lastname : "T",
    place : {
        
        nativeplace : "Bangalore",
        currentplace : 6

    },
    course : "Playwright",
    regular : true ,
    age : 25
}

console.log(student.place.currentplace)

console.log(typeof(student.place))



console.log(student['lastname'])



student['fathername'] = "Thippanna"


console.log(student.fathername)


console.log(student)

delete student.place

console.log(student)

student['course'] = "Cypress"


console.log(student)


//es6 - for in 

mentuitems = {

    menu1 : "Admin", 
    menu2 : "PIM",
    menu3 : "Leave"
}

//console.log(mentuitems.menu1)



for (let item in mentuitems){

    if(item == "menu1"){

      console.log(mentuitems[item])
    }

}


text ("Add employee ", {

    // 20 lines 
})