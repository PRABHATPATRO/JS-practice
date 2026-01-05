const person = require("./Person")

// console.log("hello world");

let arr = [1,2,3,4,5];


// var arr1 = new Array(6,7,8,9,10);
// arr1[2] = 100;
// arr1.push(11);
// arr.unshift(-1);

// arr.forEach( num => {
//     console.log(num);
// })
// for(let i = 0; i < arr1.length; i++){
//     console.log(arr1[i]);
// }
// arr1.pop();
// arr.forEach( num => {
//     console.log(num);
// })
// for(let i = 0; i < arr1.length; i++){
//     console.log(arr1[i]);
// }

// let marks = [1,2,3,4];
// let addedmarks = marks.reduce((sum, mark) => sum * mark, 1);
// console.log(addedmarks);

// var obj = [2,4,5,7,8,10];
// var arr2 = [];

//  arr2 = obj.filter(num => num % 2 == 0)
//  arr2.forEach( num => {
//     console.log(num);
//  });

//  let arr3 = arr2.map(sum => sum * 3);
//  arr3.forEach(num => console.log(num));
//  let total = arr3.reduce((sum, num) => sum + num, 0);
// console.log(total);

//  let  multiplyAllElements = [1,2,3,4,5,6,7];
// let total = multiplyAllElements.filter(num => num>3).map(num => num + 2).reduce((sum, num) => sum + num, 0);
// console.log(total);

// //sorting of array

// //ascending order
// let sortArray = [5,3,8,1,4];
// sortArray.sort((a,b) => a-b);
// console.log(sortArray);
// //descending order
// sortArray.sort((a,b) => b-a);
// console.log(sortArray);

// let fruits = ['Banana', 'Apple', 'Mango', 'Pineapple', 'Orange'];
// fruits.sort();
// console.log(fruits);
// fruits.reverse();
// console.log(fruits);


// function 

// function sum(a,b) {

//     return a + b;
// }
// console.log(sum(1,2));

// let multiple = function(a,b) {
//     return a * b;
// }
// console.log(multiple(2,3))

// let multiply = (a,b) => a*b;
// console.log(multiply(4,3));

// // var - global level/function level
// // let -  global/block level
// // const - block level and constant value



// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     fullname : function()  {
//         return this.firstName + " " + this.lastName;}
// }

// console.log(person.fullname());
// console.log(person.firstName);
// console.log(person['lastName']);
// person.age = 31;
// person.firstName = 'Jane';
// console.log(person.firstName);
// console.log(person.age);

// for (let key in person) {
//     console.log(`${key} : ${person[key]}`)
// }


// let per = new Person("prabhat1", "kumar1");
// console.log(per.personDetails());


function greet(name: string): string {
    return `hello ${name}` ;
}
console.log(greet("prabhat"))