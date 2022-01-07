// Indain Time
let IndainWatch = () => {
    let options = { timeZone : 'Asia/Kolkata'};
    let currentDate = new Date().toLocaleDateString('en-US' , options);
    let currentTime = new Date().toLocaleTimeString('en-US' , options);
    document.querySelector('#india-date').innerText = currentDate;
    document.querySelector('#india-time').innerText = currentTime;
    };
    setInterval(IndainWatch,1000);
    
 // Sign Up Section
 let registration = document.querySelector('#registrationForm');
 registration.addEventListener('submit' , function(event){
     event.preventDefault();
     if(formValidate()){
         alert('Thank You.... We generate your account very soon');
     }
     else{
         alert('Please fill form correctly');
     }
 });


 let formValidate = () => {
     return (checkFirstName() & checkLastName() & checkEmail() & checkPassword() & checkConfirmPassword());
 };

 let checkFirstName = () => {
 let inputEl = document.querySelector('#firstName');
 let inputFeedbackEl = document.querySelector('#firstNameFeedback');
 let regExp  = /^[a-zA-Z0-9]{6,12}/;
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,inputFeedbackEl);
        return true;
    } 
    else{
        makeInvalid(inputEl,inputFeedbackEl);
        return false;
    }
 };
 
let checkLastName = () => {
let inputEl = document.querySelector('#lastName');
let inputFeedbackEl = document.querySelector('#lastNameFeedback');
let regExp  = /^[a-zA-Z0-9]{6,12}/;
   if(regExp.test(inputEl.value)){
       makeValid(inputEl,inputFeedbackEl);
       return true;
   }
   else{
       makeInvalid(inputEl,inputFeedbackEl);
       return false;        
   }
};

let checkEmail = () => {
   let inputEl = document.querySelector('#email');
   let inputFeedbackEl = document.querySelector('#emailFeedback');
   let regExp  = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(regExp.test(inputEl.value)){
       makeValid(inputEl,inputFeedbackEl);
       return true;
   }
   else{
       makeInvalid(inputEl,inputFeedbackEl);
       return false;
   }
};


let checkPassword = () => {
  let inputEl = document.querySelector('#password');
  let inputFeedbackEl = document.querySelector('#passwordFeedback');
  let regExp  =  /^[A-Za-z0-9]\w{7,14}$/;
  if(regExp.test(inputEl.value)){
      makeValid(inputEl,inputFeedbackEl);
      return true;
  }
  else{
      makeInvalid(inputEl,inputFeedbackEl);
      return false;
  }
};

let checkConfirmPassword = () => {
  let inputEl = document.querySelector('#confirmPassword');
  let inputFeedbackEl = document.querySelector('#confirmPasswordFeedback');
  let regExp  =  /^[A-Za-z0-9]\w{7,14}$/;
  if(regExp.test(inputEl.value) && inputEl.value === passwordEl.value){
      makeValid(inputEl,inputFeedbackEl);
      return true;
  }
  else{
      makeInvalid(inputEl,inputFeedbackEl);
      return false;
  }
};


let makeValid = (inputEl,inputFeedbackEl) => {
  inputEl.classList.add('is-form-valid');
  inputEl.classList.remove('is-form-invalid');
  inputFeedbackEl.classList.add('text-success');
  inputFeedbackEl.classList.remove('text-danger');
  inputFeedbackEl.innerText = 'Looks Good';
};

let makeInvalid = (inputEl,inputFeedbackEl) => {
     inputEl.classList.remove('is-form-valid');
     inputEl.classList.add('is-form-invalid');
     inputFeedbackEl.classList.remove('text-success');
     inputFeedbackEl.classList.add('text-danger');
     inputFeedbackEl.innerText = `Please Enter a valid ${inputEl.placeholder}`;
};


//FirstName With Keyup Event
let firstNameEl = document.querySelector('#firstName');
firstNameEl.addEventListener('keyup' , function(){
   checkFirstName();
});

//LasName with KeyUp Event
let lastNameEl = document.querySelector('#lastName');
lastNameEl.addEventListener('keyup' , function(){
    checkLastName();
});

//Email with KeyUp Event
let emailEl = document.querySelector('#email');
emailEl.addEventListener('keyup' , function(){
    checkEmail();
});

//Password with Keyup Event
let passwordEl = document.querySelector('#password');
passwordEl.addEventListener('keyup' , function(){
    checkPassword();
}); 

//Confirm Password with Keyup event
let confirmPasswordEl = document.querySelector('#confirmPassword');
confirmPasswordEl.addEventListener('keyup' , function(){
    checkConfirmPassword();
});

//Password in Sign check Box
let passwordBox = document.querySelector('#password');
let checkBox = document.querySelector('#checkbox');
checkBox.addEventListener('change' , function(){
    let typeAttribute = passwordBox.getAttribute('type');
    if(typeAttribute === 'password'){
        passwordBox.setAttribute('type','text');
    }
    else{
        passwordBox.setAttribute('type' , 'password');
    }
});

//Password Checker in logIn
let passwordLog = document.querySelector('#logIn-password');
let checkLog = document.querySelector('#checkboxLog');
 checkLog.addEventListener('change' , function(){
     let typeAttribute = passwordLog.getAttribute('type');
     if(typeAttribute === 'password'){
         passwordLog.setAttribute('type', 'text');
     }
     else{
         passwordLog.setAttribute('type' , 'password');
     }
 });
//=======Subscription=========
let subscription = document.querySelector('#sub');
let substring = JSON.stringify(subscription);
localStorage.setItem("Sub", substring);
let SubObj = JSON.parse(localStorage.getItem("Sub"))
console.log(SubObj);

//=======End Subscription=========
///Log In Form
function saveData(){
    let EMAIl , PASSWORD;
    EMAIl = document.getElementById("logIn-email").value;
    PASSWORD = document.getElementById("logIn-password").value;
    localStorage.setItem("Email", EMAIl);
    localStorage.setItem("Password" , PASSWORD);
};

