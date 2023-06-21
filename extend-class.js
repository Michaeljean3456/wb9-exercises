"use strict";
class person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return this.firstName + " " + this.lastName; 
    }
}

    let person1 = new person("Mike", "Jean")
    console.log(person1.getFullName())


class Employee extends person{
    constructor(firstName, lastName, id, jobTitle, payRate){
        super(firstName, lastName)

        this.id = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
    getGrossPay(hoursWorked){
      return  this.payRate * hoursWorked 
    }
}

let employee1 = new Employee("Johnny", "Test", 3, "VPO", 96.28)
console.log(employee1.getFullName());
console.log(employee1.getGrossPay(80));