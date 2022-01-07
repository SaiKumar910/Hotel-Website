//Math table

let numberEl = document.querySelector('#req-number');
numberEl.addEventListener('keyup', function(){
    let theNumber  = Number(numberEl.value);
    document.querySelector('#number-1').innerText = theNumber;
    calculate();
});

let rangeEl = document.querySelector('#multiplier');
rangeEl.addEventListener('input' , function(){
    let theSelectedMulti = Number(rangeEl.value);
    document.querySelector('#number-2').innerText = theSelectedMulti;
    calculate();
});


//Calculate

let calculate = () => {
    let theNumber = Number(document.querySelector('#number-1').innerText);
    let sai = Number(document.querySelector('#number-2').innerText);
    let mathResult = theNumber * sai;
    document.querySelector('#result').innerText = mathResult;
}

