// Template String ES6
/*
let mobile = {
    brand : 'Vivo',
    color : 'silver',
    cost : 12000
};

let msg = "BRAND : " + mobile.brand +  " COLOR : " + mobile.color + " COST : " + mobile.cost ;
console.log(msg);

let msg1 = `Brand : ${mobile.brand} Color : ${mobile.color} Cost : ${mobile.cost}` ;
console.log(msg1);

let template = "<ul>"
                    "<li>" +  mobile.brand + "</li>" + 
                    "<li>" +  mobile.color + "</li>" +
                    "<li>" +  mobile.cost + "</li>" +
               "</ul>";
               
               console.log(template);

let template2 =`<ul>
                  <li> ${mobile.brand} </li>
                  <li> ${mobile.color} </li>
                  <li> ${mobile.cost} </li>
                </ul>`;
                console.log(template2);

//Optional Parameter
let greet = function( name , age=22 ){
    let msg = `Good Morning ${name} Your are ${age} Years old` ;
                console.log(msg);
};
greet('Sai', 77);

let printNumbers = function(start , end = 40){
    let result = '';
    for(let i = start; i <= end ; i++){
    result += `${i} `;
    }
    console.log(result);
};
printNumbers(1);
*/
//Normal Function
let result = '';
function printNumberNF (){
    let msg = '';
    for (let i = 0; i <= 20 ; i++){
        msg += `${i} `;
    }
    return msg;
};
result = printNumberNF();
console.log(result);

// Functional Expression
let printNumberFE = function(){
    let msg = '';
    for (let i = 0; i <= 30 ; i++){
        msg += `${i} `;
    }
    return msg;
};
result = printNumberFE();
console.log(result);

//Arrow Function
let printNumberAF = () => {
    let msg = '';
    for (let i = 0; i <= 40 ; i++){
        msg += `${i} `;
    }
    return msg;
}
result = printNumberAF();
console.log(result);


let employees = [
    {
        id : 1,
        name : 'Sai',
        age : 22,
        isActive : true
    },
    {
        id : 2,
        name : 'Shiva',
        age : 24,
        isActive : false
    },
    {
        id : 3,
        name : 'Ganesh',
        age : 19,
        isActive : true
    }
];

//Normal For Loop
 result = '';
for(let i = 0; i <= employees.length-1 ; i++){
    let employee = employees[i];
    result += `${employee.name.toUpperCase()} `;
};
console.log(result);

// For in Loop
result = '';
for(let index in employees){
    let employee = employees[index];
    result += `${employee.name.toUpperCase()} `;
};
console.log(result);

// Fpor of loop
result = '';
for(let employee of employees){
    result += `${employee.name.toUpperCase()} `;
};
console.log(result);

//ForEach Function Es 5
result = '';
employees.forEach(function(employee){
    result += `${employee.name.toUpperCase()} `;
});
console.log(result);

//ForEach with Arrow Function
result = '';
employees.forEach(employee => {
    result += `${employee.name.toUpperCase()} `;
});
console.log(result);

let student = {
    name : 'Sai Kumar',
    age : 22,
    course : 'BHM',
    address : {
        street : 'L.B Nagar',
        city : 'Hydrabad',
        state : 'Telangana'
    },
    hobiess : {
        regular : {
            regHobies : ['Eating' , 'Drinking' , 'Sleeping']
        },
        occHobies : {
            iregHobies : ['Playing Cricket' , 'Meet Friends']
        }
    }
};

//Destructing 
let {street , city , state} = student.address;
console.log(`STREET : ${street.toUpperCase()} 
             CITY : ${city}  
             STATE : ${state}`);

//ReG Hobiess
let {regHobies} = student.hobiess.regular;
console.log(regHobies);


let {iregHobies} = student.hobiess.occHobies;
console.log(iregHobies);


//Spered Operaters
let numbers = [1,55,787,45,77654,594,434];
let min = Math.min(...numbers);
console.log(min);

let array1 = ['red' ,'green', 'yellow'];
let array2 = ['white', 'blue', 'orange'];
let colors = [...array1 , ...array2];
console.log(colors);
