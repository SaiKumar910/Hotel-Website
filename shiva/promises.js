// Actuall Promise Creation
let cleanHouse = new Promise( (resolve , reject) => {
    //Cleaning House
    let isDone = true;
    if(isDone){
        resolve('Cleaninig is Done');
    }
    else{
        reject('Cleaning is Not Done');
    }
});

cleanHouse.then((message) => {
    console.log(message);
}).catch((err) =>{
    console.error(err);
});

//Dependent Promise in Java Script
let buildProject = new Promise ( (resolve , reject) => {
   setTimeout( () => {
    let isDone = true;
    if(isDone){
        resolve('Project is Finshed Succesfully...You have to wait for Next Round');
    }
    else{
        reject('You are Disqulified in 1st Round');
    }
   } , 1000)
});

let attendTechRound = new Promise ( (resolve , reject) => {
    setTimeout( () => {
        let isDone = true;
    if(isDone){
        resolve('TechRound is Finshed Succesfully...You have to wait for Next Round');
    }
    else{
        reject('Sorry .....You are Disqualified in 2nd Round');
    }
    }, 2000)
});

let managerRound = new Promise ( (resolve , reject) => {
    setTimeout(() => {
        let isDone = true;
    if(isDone){
        resolve('Manager Round is Finshed Succesfully...You have to wait for Next Round');
    }
    else{
        reject('Sorry .....You are Disqualified in 3rd Round');
    }
    }, 3000)
});

let HRRound = new Promise ( (resolve , reject) => {
    setTimeout(() => {
        let isDone = true;
    if(isDone){
        resolve('HR Round is Finshed Succesfully......Congratulations You Got the Job');
    }
    else{
        reject('Sorry .....You are Disqualified in Final Round');
    }
    } , 4000)
});

buildProject.then((message) => {
   // let result = `${message} -->`;
    console.log(message);
    attendTechRound.then((message) => {
     //    result += `${message} -->`;
         console.log(message);
        managerRound.then((message) => {
         //   result += `${message} -->`;
            console.log(message);
            HRRound.then((message) => {
             //   result += `${message} -->`;
                console.log(message);

            }).catch((err) => {
                console.error(err);
            })
        }).catch((err) => {
            console.error(err);
        })
    }).catch((err) => {
        console.error(err);
    })
}).catch((err) => {
    console.error(err);
});


//Real Time Use Promise

let employees = [{id : 1 ,  name : 'Sai' , age : 22},,
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
      } , 6000);
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
      }, 5000);
  };

  createEmployee({id : 3 , name : 'Upender', age : 24}).then( () => {
      getEmployees();
  }).catch( (err) => {
      console.error(err);
  });
  
