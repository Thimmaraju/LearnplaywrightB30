

// raju = [] // empty Array - No elements 

// arr = [2,3,4,5,6,7,9]  // Homogenious 

// arr1 = ["Raju", "Blr", "Trainer", "Arun", "Chris", "Kavitha", 4, 2, 9] //Homogenious 

// //Index of the Elements always starts from 0

// //for first element index 0 

// arr2 = [1,,3, true, "Raju"] // Hetiro


// console.log(arr.length)

// console.log(arr)

// console.log(arr1[0])

// //concat 

// //join two arrays 

// arr3 = arr.concat(arr1)

// console.log(arr3)

// console.log("Raju" + "g")

// // reverse()

// //this method will reverse the array

// arr4 = arr3.reverse()
// console.log(arr4)

// //sort ()

// //will sort the elements in acending order 
// console.log(arr1)
// arr5 = arr1.sort()
// console.log(arr5)

// //split()

// // converts string to array 

// str = "This is Javascript class"

// arr6 = str.split(" ")

// console.log(arr6)

// //join()

// // converts array to string 

// // arr6 = ["Raju", "blr"]

// // Rajublr


// // str = "Sheena"

// // Output  = "aneehS"

// // str = "Sheena"

// // revstr = str.split("").reverse().join("")

// // console.log(revstr)


// //Push()

// activities = ["Eat", "sleep"]

// activities.push("Exersize")

// activities.push("work")

// activities.push("read")



// //unshift()

// activities.unshift("Sing")


// activities.unshift("Abc", "xyz")

// activities.pop()

// activities.pop()

// activities.shift()

// activities.shift()

// console.log(activities)

// activities[2] = 'drink'
// console.log(activities)

// array2 = ["eat", "sleep"]

// // or 

// // const array2 = new Array("eat", "sleep");

// Indexvalue  = activities.indexOf("Exersize")

// console.log(Indexvalue)

// menuitems = ["Admin", "PIM", "Leave"]

// // menuitems.includes("Raju")  //false

// // menuitems.includes("PIM")  //True

// if(menuitems.includes("PIM")){

//     console.log("Element is Present")
// }

// menuitems.forEach(element => {

//     console.log("Loop Starts")

//     console.log(element)

//     console.log("Loop Ends ")
    
// });


menus = ["Admin", "PIM", "Leave", "Buzz", "Recruitment", "Abc"]

// arr8 = menus.slice(2)

// console.log(arr8)

// console.log(menus[menus.length-1])


// for(let element of menus){

//      console.log("Loop Starts")

//     console.log(element)

//     console.log("Loop Ends ")

// }


for(let i=0; i<=menus.length-1; i++){

       console.log("Loop Starts")

    console.log(menus[i])

    console.log("Loop Ends ")

}