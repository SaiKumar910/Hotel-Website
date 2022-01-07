/*
let sayGoodMorning = () => {
    let h1Tag = document.querySelector('#msg-1');
    h1Tag.innerText = 'Good Morning';
    h1Tag.style.backgroundColor = 'limegreen';
    h1Tag.style.padding = '15px';
    h1Tag.style.boxShadow = '0 0 10px black';
};
let sayGoodAfternoon = () => {
    let h1Tag = document.querySelector('#msg-1');
    h1Tag.innerText = 'Good Afternoon';
    h1Tag.style.backgroundColor = 'orangered';
    h1Tag.style.padding = '15px';
    h1Tag.style.boxShadow = '0 0 10px black';
};
let sayGoodEvening = () => {
    let h1Tag = document.querySelector('#msg-1');
    h1Tag.innerText = 'Good Evening';
    h1Tag.style.backgroundColor = 'green';
    h1Tag.style.padding = '15px';
    h1Tag.style.boxShadow = '0 0 10px black';
};
let sayGoodNight = () => {
    let h1Tag = document.querySelector('#msg-1');
    h1Tag.innerText = 'Good Night';
    h1Tag.style.backgroundColor = 'yellow';
    h1Tag.style.padding = '15px';
    h1Tag.style.boxShadow = '0 0 10px black';
};
*/


let printWishMessage = (message , color) => {
    let h1Tag = document.querySelector('#msg-1');
    h1Tag.innerText = message;
    h1Tag.style.backgroundColor = color;
    h1Tag.style.padding = '15px';
    h1Tag.style.boxShadow =  '0 0 10px black';
    h1Tag.style.color = 'white';
};
 //GoodMOrning Function Access
let gmButton = document.querySelector('#gm-1');
gmButton.addEventListener('click' , function(){
        printWishMessage('Good Morning', 'limegreen');
 });

let gfButton = document.querySelector('#gf-1');
gfButton.addEventListener('click' , function(){
     printWishMessage('Good Afternoon' , 'red');
});

let geButton = document.querySelector('#ge-1');
geButton.addEventListener('click' , function(){
   printWishMessage('Good Evening' , 'green');
});

let gnButton = document.querySelector('#gn-1');
gnButton.addEventListener('click' , function(){
    printWishMessage('Good Night' , 'orange');
});

    let textBox = document.querySelector('#username');
    textBox.addEventListener('keyup' , function(){
        let textEntered = textBox.value;
       let messageElement = document.querySelector('#msg');
       messageElement.innerText = textEntered;    
    });

    let selectBox = document.querySelector('#select-lang');
    selectBox.addEventListener('change' , function(){
        let selectOption = selectBox.value;
        let langOptionElm = document.querySelector('#lang-option');
        langOptionElm.innerText = selectOption;
    });

    let passwordBox = document.querySelector('#password');
    let checkBox = document.querySelector('#checkbox');
    checkBox.addEventListener('change' , function(){
       let typeAttribute = passwordBox.getAttribute('type');
       if(typeAttribute === 'password'){
           passwordBox.setAttribute('type', 'text');
       }
       else{
           passwordBox.setAttribute('type' , 'password');
       }; 
    });


  

    let formatNumber = (number) => {
        let result = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number);
        return result;
    };

    let rangeEl = document.querySelector('#range');
    let amountEl = document.querySelector('#amount');
    rangeEl.addEventListener('input' , function(){
        let selectedAmounut = rangeEl.value;
        amountEl.innerText = formatNumber(selectedAmounut);
    });


    let rangeElm = document.querySelector('#text-area');
    let amountElm = document.querySelector('#char-count');
      rangeElm.addEventListener('keyup' , function(){
        let textLength = rangeElm.value.length;
         amountElm.innerText = textLength;
    });