module.exports = class Person {
     age = 30;
     get address() {
        return "usa"
     }

        
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

         personDetails() {
            return this.firstName + " " + this.lastName + " " + this.age + " " + this.address;
        }  
}

// let person1 = new Person();
// console.log(person1.personDetails());

// let person2 = new Person("prabhat", "kumar");
// console.log(person2.personDetails());

// person2.age = 35;
// console.log(person2.personDetails());