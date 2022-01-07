
let rangeEl = document.querySelector('#text-area');
let amountEl = document.querySelector('#char-count');
rangeEl.addEventListener('keyup' , function(){
   let textLength = rangeEl.value.length;
   amountEl.innerText = textLength;
});