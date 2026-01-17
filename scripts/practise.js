// let accountname = 'prabhat'
// var accountpassword = 'patro'
// email = 'prabhat2@gmail.com'

// email = 'prabhat@gmail.com'
// accountname = 'prabhat1'

// console.table([accountname,accountpassword,email]);

// let obj = {
//     name : "init"
// }
// obj.name = "sdfsdfd";
// console.log(typeof obj);

const obj = {
 name : "prabhat",
 skills: ["java", "java script"]
}

// const shallowcopy = {... obj};
// shallowcopy.skills.push("c");

// if(shallowcopy.skills === obj.skills)
// {
//     console.log(obj.skills);
// }

// const deepcopy = structuredClone(obj);

// deepcopy.skills.push("python");

// if(!(deepcopy.skills === obj.skills))
// {
//     console.log(deepcopy.skills);
//     console.log(obj.skills);
// }

//unshift -> to add number in begininng of array
//shift -> removes 1st element of the array

const myarr = [0,1,2,3,4,5];

// const myarr1 = myarr.slice(1,3);
// console.log("A ", myarr);
// console.log(myarr1);// slice doesn't update the original array, just returns a substring

// const myarr2 = myarr.splice(1,3);
// console.log("B ", myarr);
// console.log(myarr2);// splice updates the original array


// const marvel_heroes = ["thor", "ironman", "spider man"];
// const dc_heroes = ["batman", "superman"];

// //marvel_heroes.push(dc_heroes);
// //console.log(marvel_heroes);
// const all_heroes = marvel_heroes.concat(dc_heroes);
// console.log(all_heroes)

// const spread_heroes = [... marvel_heroes, ... dc_heroes];
// console.log(spread_heroes); //[ 'thor', 'ironman', 'spider man', 'batman', 'superman' ]

// console.log(Array.from("prabhat")); // ['p','r','a','b','h','a','t']
// console.log(Array.of(23,43,54)); // [ 23, 43, 54 ]


// const greeting = function() {
//     console.log("how are you");
// }

// console.log(greeting);
// const jsuser = {
//     name : "prabhat",
//     age : 18,
//     skills : ["java", "javascript", "c"]
// }

// jsuser.func = function() {
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(jsuser.func())

// console.log(Object.values(jsuser));
// console.log(jsuser.hasOwnProperty('cow'));


// function addTwoNumber(num1, num2) {
//     console.log(`addtion of ${num1} and ${num2} `, num1 + num2)
//     return num1 + num2;
// }

// addTwoNumber(2,3)
// console.log(`number sum is `, addTwoNumber(3,4) )

// function printAllNumbers(... num) {
//     console.log(`All numbers ${num}`);
// }

// printAllNumbers(1,2,3,4,5)

// function printObjects(...obj) {
//     console.log(`name of first user ${obj[0].name}`);
//     console.log(`age of second user ${obj[1].age}`)
// }

// printObjects({
//     name : "prabhat",
//     age: 18
// },
// {
//     name:"rajesh",
//     age: 20
// })



let x = ["apple", "orange", "mango", "guava"];
x.forEach(x => {
    if(x === "Guava".toLowerCase())
    {
        console.log(x)
    }
}) 