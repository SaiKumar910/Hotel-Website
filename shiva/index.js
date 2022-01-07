/*

console.log("iam a log message")

console.info('Iam an information Message')

console.warn('iam an warn Message')

console.error('iam an error messege')

let student={
    name: 'sai',
    age: 22,
    course: 'CSE'
};
console.table(student);



let a=10;
let b=20;
let sum= a + b;
console.log(sum);

console.log('The Sum of a , b is :'+sum);

console.log('The Sum of'+a+','+b+'is :'+sum);

console.log(`The Sum of ${a},${b} is :${sum}`);

let employeeName;
console.log(`value : ${employeeName} - Type : ${typeof employeeName}`);


let age= 10;
console.log(age);


let num1 = 20;
let num2 = 10;
console.log(`sum : ${num1 + num2}`);
console.log(`sub : ${num1 - num2}`);
console.log(`mul : ${num1 * num2}`);
console.log(`div : ${num1 / num2}`);



let number = 54;
if(number % 2 === 0){
    console.log('${number} is an Even Number');
}
else{
    console.log('${number} is an Odd Number');
}
let d = 10;
let e = 20;
let add = e + d ;
add = add + d + e ;
add += e + d ;
console.log(add);

let marks = 9;
if(marks <=35){
    console.log(`You Failed in Exam`);
}
else{
    console.log(`You Clear the Exam`);
}
let x = 10;
x = x+1;
x += 1;
x++;
console.log(x);

let inRelation = true;
let parentsAgreed = false;
if(inRelation ^ parentsAgreed){
    console.log('Get marry Soon');
}
else{
    console.log('wait Untill They Agree');
}

 marks = 99;
let message = '';
(marks <=35)? message =`You Failed in Exam`:
              message =`You Cleared in Exam`;

       console.log(message);


a = 11;
b = 11;
if(a === b){
    console.log('Both are Equal');
}       
else{
    console.log('Both Not Equal');
}


let time = 19;
let wishMessage = '';
if(time >0 && time <= 12){
    wishMessage = 'good Morning';
}
else if(time >12 && time <= 17){
    wishMessage = 'Good Afternoon';
}
else if(time >17 && time <=23){
    wishMessage = 'Good Evening';
}
else{
    wishMessage = 'Enter a proper Time';
}
console.log(wishMessage);




let day = new Date(). getDate();
let today = '   ';
switch(day){
    case 0:
        today = 'Sunday';
        break;
    case 1:
        today = 'Monday';
        break;
    case 2:
        today = 'Thesday';    
        break;
    case 3:
        today = 'Wednesday';    
        break;    
    case 4:
        today = 'Thrusday';
        break;
    case 5:
        today = 'Friday';
        break;
    case 6:
        today = 'Satarday';    
        break;
    default:
        today = 'Enter Proper Day';    
        break;        
}
    
    console.log(`Today is : ${today}`);


let result ='';
for(let i=0; i<=10; i++)
{
    if(i <= 9){
        result +=`${i} ,`;
    }
 else{
     result += `${i}`;
 }   
}
  console.log(result);

  result = '';
  for(i=20; i>=0; i-=2){
      if(i>0){
          result += `${i} ,`;
      }
      else{
          result += `${i}`;
      }
  }
  console.log(result);

  let numbers = '5';
  result = '';
  for(let i=1; i<=numbers; i++){
      for(let j=1; j<=i; j++){
          result += '* ';
      }
      result += '\n';
  }
  console.log(result);

   numbers = '5';
  result = '';
  for(let i=1; i<=numbers; i++){
      for(let j=1; j<=i; j++){
          result += `${j} `;
      }
      result += '\n';
  }
  console.log(result);

  numbers = '5';
  result = '';
  for(let i=1; i<=numbers; i++){
      for(let j=1; j<=i; j++){
          result += `${i} `;
      }
      result += '\n';
  }
  console.log(result);
  */

  let numbers = '5';
  result = '';
  for(let i=5; i<=numbers; i--){
      for(let j=1; j<=i; j++){
          result += `${j}`;
      }
      result += '\n';
  }
  console.log(result);