/*
let a = 10;
let b = 20;
let add = a + b;
add += a + b;
console.log(add);



 let c = 40;
 let d = 40;
 add = c + d;
 add+= c + d;
console.log(add);

result = '';
let i = 0;
while(i <= 10){
    if(i <= 9){
        result += `${i} , `;
    }
    else{
        result += `${i}`;
    }
    i++;
}
    console.log(result);


result = '';
i = 50;
while(i >= 0){
  if(i > 0){
      result += `${i} , `;
  }
  else{
      result += `${i}`;
  }
  i-=5;
}
console.log(result);


let number = 9;
result = '';
i = 5  ;
while(i >= 1 ){
    let j = 1;
        while(j <= i){
            result += `${i}  `;
            j++;
        }
        result += `\n`;
        i--;
}
console.log(result); 


result = '';
i = 0 ;
do{
    if(i <= 9){
        result += `${i} , `;
    }
    else{
        result += `${i}`;
    }
    i++;
    
}
while(i <= 10);
console.log(result);


let mobile = {
    brand : 'Vivo',
    modal : 'Y81',
    color : 'Gold',
    ram : '3GB'
};
console.log(mobile);
console.log(mobile.brand);
console.log(mobile.modal);
console.log(mobile.color);
console.log(mobile.ram);


console.log(mobile.brand);
console.log(mobile.megePixel);  
console.log(mobile['brand']);


let prop = 'ram';
console.log(mobile.prop);
console.log(mobile[prop]);



let student = {
    student : 'Saikumar',
    age : 22,
    course : 'BHM',
    address : {
        street : 'L.B Nagar',
        city : 'Hydrabad',
        state : 'TS'
    }
};

console.log(student);
console.log(student.address);
console.log(student.address.city);

let laptop = {};
laptop.brand = 'Lenovo';
laptop.price = 35000;
laptop.ram = '16GB';

console.log(laptop);
console.log(laptop.price);


console.log(laptop.price);
laptop.price = 45000;
console.log(laptop.price);
console.log(laptop);


delete laptop.ram;
console.log(laptop);


let numbers = [10 , 20 , 30];
console.log(numbers);

console.log(numbers[1]);
console.log(numbers[3]);


let colors = ['white', 'black', 'red', 'blue'];

for(let i = 0 ; i <= colors.length-1; i++){
    console.log(colors[i]);
}

let result ='';
for(let i = 0; i <= colors.length-1; i++){
    result += `${colors[i]} `;
}
console.log(result);


result = '';
for(let index in colors){
    result += `${colors[index]} ` ;
}
console.log(result);

result = '';
for(let index of colors){
    result += `${index} `; 
}
console.log(result);   


result = '';
colors .forEach(function(color){
    result += `${color} `;
});
console.log(result);


result = '';
colors .forEach(color => result += `${color} `);
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
console.log(employees);

result = '';
for(let employee of employees){
    result += `${employee.name} `;
}
console.log(result);


console.log(employees);
let jrEmployees = [];
for(let employee of employees){
    if(employee.age <= 23){ 
        jrEmployees.push(employee);
    }
}
console.log(jrEmployees);

console.log(employees);
let activeEmployees = [];
for(let employee of employees){
    if(employee.isActive){ 
         activeEmployees.push(employee);
    }
}
console.log(activeEmployees);


function printNumbers(startNumber, endNumber, increment){
    let result = '';
    for(let i = startNumber; i <= endNumber; i += increment){
        result += `${i} `;
    }
    console.log(result);
}
printNumbers(10,500,10);

function greet(){
    console.log('Good Morning');
}
greet();



let greetMe = function(){
    console.log('Good Evening');
};
greetMe();

let wishMe = function(name,age){
    let message = `Hello ${name} you are ${age} years old`;
    console.log(message);
}
wishMe('sai','22');

let sum = function(a ,b){
    let result = 2 *(a + b);
    return result;
};
let output = sum(10, 10);
console.log(output);x

let printObject = function(obj){
    console.log(obj);
};
printObject('Sai');

let mobile = {
    brand : 'Vivo',
    color : 'Gold',
    price : 12000
};
printObject(mobile);

printArray = function(array){
    let result ='';
    for(let index in array){
        result += `INDEX : ${index} => VALUE : ${array[index]} \n`;
    }
    console.log(result);
};
printArray([10,0,30,40]);

let colors = ['white', 'black', 'red', 'green'];
printArray(colors);

let student = {
    firstName : 'Saikumar',
    lastName : 'Chittipolu',
    fullName : function(){
        return `${this.firstName} ${this.lastName}`;

    }
};
console.log(student.fullName());


let outerFn = function(){
    console.log('i am an Outer Function');
    let innerFn = function(){
        console.log('I am an Inner Function');
    };
    innerFn();
};
outerFn();

let twistedFn = function(){
    let name = 'Skumar';
    let printStudent = function(){
        let student = {
            name : 'Shiva',
            age : 26,
            course : 'BHM'
        };
        return student;
    };
    return printStudent;
};
let innerFn = twistedFn();
let studentObj = innerFn();
console.log(studentObj['course']);



// Chicken Curry With Functions
let glassBowl = function(rawChicken, masala){
    // marinating Chicken
    let marinatedChicken = `MIXING : (${rawChicken}+${masala})`;
    return marinatedChicken;
};
let cookingBowl = function(marinatedChicken,water){
    //cooking Chicken
    let cookedChicken = `COOKING : (${marinatedChicken}+${water})`;
    return cookedChicken;
};
let eatingPlate = function(cookedChicken,rice){
    //Eating Plate
    let eating = `EATING : (${cookedChicken}+ ${rice})`;
    console.log(eating);
};

let rawChicken = '3KG Chicken';
let masala = 'Garlick , Pepper , Salt';
let marinatedChicken = glassBowl(rawChicken,masala);
let water = '1 liter Water';
let cookedChicken = cookingBowl(marinatedChicken,water);
let rice = '1 Kg Rice';


eatingPlate (cookedChicken , rice);

let date =new Date();
console.log(date);

let currentDate = new Date().toLocaleDateString();
console.log(currentDate);


let currentTime = new Date().toLocaleTimeString();
console.log(currentTime);

let today = new Date().getDay();
console.log(today); 

let currentMonth = new Date().getMonth();
console.log(currentMonth); 

let c_day = new Date().getDay();
let c_month = new Date().getMonth()+1;
let c_year = new Date().getFullYear();
console.log(`${c_day}-${c_month}-${c_year}`);
*/
/*
let e_day = new Date().getMonth()+1;
console.log(e_day);


let sqrt = Math.sqrt(625);
console.log(`Square root of 144 is : ${sqrt}`);

let pow =  Math.pow(2,5);
console.log(`2 ^ of 5 is :${pow}`);

let min = Math.min(1,25,5,52,66,33);
console.log(`Min Num is : ${min}`);

let max = Math.max(1,25,5,52,66,33);
console.log(`Max Num is : ${max}`);

let random =Math.round(Math.random() * 1000000);
console.log(`Random is: ${random}`);

console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

let str =  console.log(Number.POSITIVE_INFINITY);

let str1 = '300';
let num1 = Number.parseInt(str1);
console.log(`${typeof str1} => ${typeof num1}`);


let str2 = '300.9865';
let num2 = Number.parseFloat(str2);
console.log(`${typeof str2} => ${typeof num2}`);

let num3 = 100;
let numberStr = num3.toString();
console.log(`${typeof num3} => ${typeof numberStr}`);

let amount = 520;
console.log(amount.toFixed(2));

let msg = String('Good Morning');
console.log(msg.length);
console.log(msg.toUpperCase());  
console.log(msg.toLowerCase());

//Substr (Start Index,No of chars)
console.log(msg.substr(0,5));
console.log(msg.substr(5,7));
console.log(msg.substr(2));

//charAt
console.log(msg.charAt(3));
//charCodeAt (ASSCII)
console.log(msg.charCodeAt(5));

let student = {
    name : 'saikumar',
    age  : 22,
    group : 'BHM'
};
console.log(student);

let studentStr = JSON.stringify(student);
console.log(studentStr);

let newStudent = JSON.parse(studentStr);
console.log(newStudent);

let technologies = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'ANGULAR'];
console.log(technologies);
technologies.shift();
console.log(technologies);


technologies = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'ANGULAR'];
console.log(technologies);
technologies.unshift('NODE.JS');
console.log(technologies);

technologies = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'ANGULAR'];
console.log(technologies);
technologies.pop();
console.log(technologies);

technologies = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'ANGULAR'];
console.log(technologies);
technologies.push('EXPRESS.JS');
console.log(technologies);

technologies = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'ANGULAR'];
console.log(technologies);
technologies.sort();
console.log(technologies);

technologies = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'ANGULAR'];
console.log(technologies);
technologies.reverse();
console.log(technologies);

technologies = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'ANGULAR'];
console.log(technologies);
technologies.sort().reverse();
console.log(technologies);

technologies = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'ANGULAR'];
console.log(technologies);
technologies.splice(2);
console.log(technologies);

technologies = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'ANGULAR'];
console.log(technologies);
technologies.splice(2,1);
console.log(technologies);

technologies = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'ANGULAR'];
console.log(technologies);
technologies.splice(2,1,'NODE.JS');
console.log(technologies);

technologies = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'ANGULAR'];
console.log(technologies);
let techStr = technologies.join(' - ');
console.log(techStr);


let newTechStr = techStr.split(' - ');
console.log(newTechStr);


msg = 'Good Morning';
let findZeros = (str) => {
    let count = 0;
    for (let i=0; i <= str.length-1 ; i++){
        let char = str.charAt(i);
        if(char === 'o' || char === 'O'){
            count++;
        }
    }
    return count;
};
console.log(`The Zeros in String is : ${findZeros(msg)}`);

msg = 'Good Morning';
let reverseString =  (str) => {
    let tempString = '';
    for(let i = str.length-1; i >= 0; i--){
        let char = str.charAt(i);
        tempString += char;
    }
    return tempString;
};
console.log(`${msg} => ${reverseString(msg)}`);

msg = 'ABA';
let isPalindrome = (str) => {
  return(str === reverseString(str));
};
console.log(`${msg} is Palindrome ? ${isPalindrome}`);

*/

//Traiangle One...............

msg = 'CHITTIPOLU SAIKUMAR';
let triangleOne =(str) => {
    let tempStr = '';
    for (let i = 1; i <= str.length; i++){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};
console.log(triangleOne(msg));  


let addSpace = (number) => {
    let tempspace = '';
    for(let i = 1; i <= number; i++){
        tempspace += ' ';
    }
    return tempspace;
};


msg = 'CHITTIPOLU SAIKUMAR';
let traiangleTwo = (str) => {
    tempStr = '';
    for(let i = str.length-1; i >= 0; i--){
        tempStr += `${addSpace(i)}${str.substr(i)}\n`;
    }
    return tempStr;
};
console.log(traiangleTwo(msg)); 

msg = 'CHITTIPOLU SAIKUMAR';
let traiangleThree = (str) => {
    tempStr = '';
    for(let i = str.length; i >= 1; i--){
        tempStr += `${str.substr(0,i)}\n`;
    }
    return tempStr;
};
console.log(traiangleThree(msg)); 

msg = 'CHITTIPOLU SAIKUMAR';
let traiangleFour = (str) => {
    tempStr = '';
    for(let i = 0; i <= str.lenght-1; i++){
        tempStr += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempStr;
};  
console.log(traiangleFour(msg)); 

 