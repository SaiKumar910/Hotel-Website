let empName = 'sai';
      //set 
localStorage.setItem('name',empName);

//get

console.log(localStorage.getItem('name'));

//Delete Item
localStorage.removeItem('name');

//Clear
localStorage.clear();


let students = [{id : 1, Name : 'SAI'},
              {id : 2, Name : 'KUMAR'},
              {id : 3, Name : 'NANI'},
              {id : 4, Name : 'VAMSHI'},
              {id : 5, Name : 'KIRAN'}];
       
      localStorage.setItem('students', JSON.stringify(students));     
      
      let theStudents = JSON.parse(localStorage.getItem(students));
      console.log(theStudents);

      localStorage.removeItem('students');
      localStorage.clear();

 
 // Session Storage
 let studentName = 'vineel';
 
 sessionStorage.setItem('Name' , studentName);
 
 sessionStorage.removeItem('Name');
 
 console.log(sessionStorage.getItem('Name'));
 
 //sessionStorage.removeItem('Name');
 //sessionStorage.clear();
 
 
 students = [ {id : 1, Name : 'SAI'},
              {id : 2, Name : 'KUMAR'},
              {id : 3, Name : 'NANI'},
              {id : 4, Name : 'VAMSHI'},
              {id : 5, Name : 'KIRAN'}];
       
      sessionStorage.setItem('students', JSON.stringify(students));     
      
         theStudents = JSON.parse(sessionStorage.getItem(students));
           console.log(theStudents);
      
        //  sessionStorage.clear(); 
     