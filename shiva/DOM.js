console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.querySelector('p'));
console.log(document.querySelector('h1'));
console.log(document.querySelector('nav'));
console.log(document.querySelector('head'));
console.log(document.querySelector('nav h1'));
let h1tag = document.querySelector('nav h1');
console.log(h1tag);

let TheText = h1tag.innerText;
console.log(TheText);

h1tag.innerText = 'SAIKUMAR';

document.title = 'SKUMAR2829';

let pTag = document.querySelector('p');
console.log(pTag);

pTag.innerText = 'Good Evening';

pTag.style.backgroundColor = 'limegreen';
pTag.style.color = 'white';
pTag.style.textAlign  = 'center';
pTag.style.padding = '15px';
pTag.style.fontSize = '45px';
pTag.style.boxShadow = '0 5px 10px black';
pTag.style.marginTop = '15px';
pTag.style.borderRadius = '50px';