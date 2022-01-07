import {Person} from '../Module/person.js';

export class Employee extends Person{
    constructor(firstName, lastName,  age, designation){
        super(firstName, lastName);
        this.age = age;
        this.designation = designation;
    }
    getAge(){
        return this.age;
    }
    getDesignation(){
        return this.designation;
    }
    greet(){
        let msg = ` Hello Mr. ${this.getFirstName()} ${this.getLastName()}
                    AGE : ${this.getAge()}
                    Designation : ${this.getDesignation()}`
                    console.log(msg);
    }
};