let count = 0;
let interval = 0;
let greet  = () => {
    count ++;
    console.log(`Hello Welcome to My World : ${count}`);
  //  console.log(new Date().toLocalTimeString());
};
interval = setInterval(greet,1000);

 //console.log(new Date().toLocalTimeString());
setTimeout( () => {
    clearInterval(interval);
}, 5000);