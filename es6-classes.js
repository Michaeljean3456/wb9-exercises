"use strict";

class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
    }
    getFullName(){
        return this.firstName + " " + this.lastName;
    }
    promote(newJobTitle, newPayRate) {
        this.jobTitle = newJobTitle;
        this.payRate = newPayRate;
    }
    getIntro() {
        let intro = "Hi! I'm " + this.getFullName() + " and I am a " +
        this.jobTitle;
        return intro;
        }
    }

    let employee1 = new Employee(
        1, "Ian", "Auston", "Graphic Artist", 42.50);
        console.log(`Employee ${employee1.firstName} created`);
        console.log(`Employee ${employee1.getFullName()} created`);
        console.log(`Job title is ${employee1.jobTitle}`);
        console.log(`Pay rate is $${employee1.payRate}`);


        console.log("--------------------------------------------")
        console.log("after promotion");
        employee1.promote("Sr. Graphic Artist", 46.75);
        console.log(`Job title is ${employee1.jobTitle}`);
        console.log(`Pay rate is $${employee1.payRate}`);
        let intro = employee1.getIntro();
        console.log(intro);

        console.log("--------------------------------------------")

    let employee2 = new Employee(
        2, "Mike", "Jean", "App Developer", 44.85);
        console.log(`Employee ${employee2.getFullName()} created`);
        console.log(`Job title is ${employee2.jobTitle}`);
        console.log(`Pay rate is $${employee2.payRate}`);

        console.log("--------------------------------------------")
        console.log("after promotion")
    employee2.promote("Sr. App Developer", 56.30)
    console.log(`Job title is ${employee2.jobTitle}`);
    console.log(`Pay rate is $${employee2.payRate}`);
    let intro2 = employee2.getIntro();
    console.log(intro2);

 