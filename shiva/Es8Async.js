
let employees = [{id : 1 ,  name : 'Sai' , age : 22},
                {id : 1 ,  name : 'Kumar' , age : 28}];

   let createEmployee = (employee) =>{
     return new Promise ( (resolve , reject) => {
       setTimeout( () => {
          employees.push(employee); 
          let isDone = true;
          if(isDone){
        resolve();
       }
          else{
          reject('Employee Creation Is Failed')
       }
       } , 2000);
    })
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

 
  //Async , Await
  let init = async () => {
    let result = await createEmployee({id : 3 , name : 'Upender', age : 48 });
    getEmployees();
};
init();
