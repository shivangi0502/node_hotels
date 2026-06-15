// var a = 5;
// var b = 10;
// var ans = a+b;
// console.log(ans);

// let c = 13;
// let d = 12;
// let res = c+d;
// console.log(res,typeof res);
// const name = 'Shivangi';  //const when used has to be given some initial value and it cannot be changed later on it is constant
// console.log(name,typeof name); //typeof function used to check the data type


// //-------------------------------------------------------------------------------------------------------------------

// //array create
// const arr1 = ['cars','bikes','truck',12];
// console.log(arr1,typeof arr1);

// //array functions
// const cars = ["BMW","Audi","Volvo"];
// console.log(cars);
// //push() function is used to add values
// cars.push("Tesla");
// //indexing
// console.log(cars[2]);


// //----------------------------------------------------------------------------------------------------------------

// //if else block
// var hour = 10;
// if(hour<5){
//     console.log("you are on time");
// }else{
//     console.log("you are late");
// }

// //-----------------------------------------------------------------------------------------------------------------

// //for loop
// var count =10;
// for(var i = 1; i<=count;i++){
//     console.log(i);
// }

// //---------------------------------------------------------------------------------------------------------------

// //object creation -- stored as key value pair

// const person = {
//     name: "John Doe",
//     age: 30,
//     is_student: false,
//     hobbies: ["reading","singing","travelling"]

// };
// console.log(person);
// //access particular field
// console.log(person.hobbies);

// //---------------------------------------------------------------------------------------------------------------

// //function creation
// //-----filter function
// const age = [12,34,56,78,18,16];
// const result = age.filter(check_age);
// function check_age(age){
//     return age>=18;
// }
// console.log(result);

// //--------------------------------------------------------------------------------------------------------------

// //prompt----to take user input
// var prompt = require('prompt-sync')();
// const ages = prompt("Enter your age \n");
// if(ages<18){
//     console.log("you get 20% discount")
// }else{
//     console.log("you get 40% senior discount");
// };


// //ASIGNMENT----------------------------------------------------------------------------------------------------

// // question-1  if else
// var prompt = require('prompt-sync')();
// const cust_age = prompt("Enter your age");
// if(cust_age<18){
//     console.log("you get 20% discount");
// }else if (cust_age>=18 && cust_age<65) {
//     console.log("Normal ticket price");
// }else {
//     console.log("you get 30% senior citizen discount ");
// };


// //question - 2 var and const

// var prompt = require('prompt-sync')();
// const length = prompt("enter the length of rectangle: ");
// const width = prompt("enter the width of rectangle: ");
// const res = length*width;
// console.log("area of rectangle is: ",res);


// //question - 3 objects and properties

// const product = [
//     {
//         product_name: "eye liner",
//         price: 200,
//         in_stock: true
//     },
//     {
//         product_name: "lipstick",
//         price: 300,
//         in_stock: false
//     },
//     {
//         product_name: "blush",
//         price: 250,
//         in_stock: true
//     }
// ];
// console.log(product);


// //question - 4 arrays
// var guest_list = ["Priya Singh","Amit Trivedi","Shivangi Verma","Anisha Sharma","Rajeev Kumar"];
// var prompt = require('prompt-sync')();

// function check_invitation(name,list){
//     if(list.includes(name)){
//         console.log("Welcome to the party ", name);
//         return true;
//     }
//     else{
//         console.log("sorry. you are not on the guest list");
//         return false;
//     }
// }
// var guest_name = prompt("enter your name: ");
// check_invitation(guest_name,guest_list);


//question - 5 json 