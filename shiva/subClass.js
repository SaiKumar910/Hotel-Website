class Person {
    constructor(firstName , lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFirstName(){
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
    }
    greet(){
        let msg = `Welcome Mr ${this.getFirstName()} ${this.getLastName ()} `;
        console.log(msg);
    }
}
class Employee extends Person{
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
}
let employee = new Employee('Saikumar' , 'Chittipolu' , 22 , 'React Developer');
employee.greet();

class Customer extends Person{
    constructor(firstName, lastName,  age, designation){
        super(firstName, lastName);
        this.age = age;
        this.location = location;
} 
        getAge(){
            return this.age;
        }
        getLocation(){
            return this.location;
        }

        greet(){
            let msg = ` Hello Mr. ${this.getFirstName()} ${this.getLastName()}
                         AGE : ${this.getAge()}
                         Location : ${this.getLocation()}`;
              console.log(msg);       
        }
}

let customer = new Customer('Saikumar', 'Chittipolu' , 22 , 'USA');
customer.greet();