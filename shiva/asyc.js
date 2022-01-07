/*
console.log(`car : 1`);
console.log(`car : 2`);
setTimeout( () => {
    console.log(`car : 3`);
}, 3000)
console.log(`car : 4`);
console.log(`car : 5`);
setTimeout( () => {
    console.log(`car : 0`);
}, 5000)
*/
/*
let sum = (a ,b) => {
    return a + b;
};

let mul = (a , b) => {
    return a * b;
};

let calculate = (a , b , callback) => {
    let result = '';
    return callback (a , b);
};
let output = calculate(10 , 20, sum);
console.log(output);

output = calculate(10 , 20, mul);
console.log(output);

output = calculate(15 , 10 , (a ,b) => {
    return a - b;
}); 
console.log(output);

*/

//Real Time Use CAllBACK

let employees = [{id : 1 ,  name : 'Sai' , age : 22},,
                {id : 1 ,  name : 'Kumar' , age : 28}];

  let createEmployee = (employee, callback) =>{
      setTimeout( () => {
          employees.push(employee);
          callback();
      } , 2000);
  };              

  
  let getEmployees = () => {
      setTimeout( () => {
          let employeeRows = '';
          employees.forEach( (employee) => {
              employeeRows += `<tr>
                                     <td>${employee.id}</td>
                                     <td>${employee.name}</td>
                                     <td>${employee.age}</td>
                                </tr>`
          });
          document.querySelector('#table-body').innerHTML = employeeRows;
      }, 1000);
  };

  createEmployee({id : 3 , name : 'Upender', age : 24} , getEmployees);
  














