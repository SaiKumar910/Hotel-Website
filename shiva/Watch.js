//Indian Watch
let IndainWatch = () => {
let options = { timeZone : 'Asia/Kolkata'};
let currentDate = new Date().toLocaleDateString('en-US',options);
let currentTime = new Date().toLocaleTimeString('en-US',options);
document.querySelector('#indian-date').innerText =  currentDate;
document.querySelector('#indian-time').innerText = currentTime;
};
setInterval(IndainWatch, 1000);

//Usa Watch
let usaWatch = () => {
    let options = { timeZone : 'America/New_York'};
    let currentDate = new Date().toLocaleDateString('en-US',options);
    let currentTime = new Date().toLocaleTimeString('en-US',options);
    document.querySelector('#usa-date').innerText =  currentDate;
    document.querySelector('#usa-time').innerText = currentTime;
    };
    setInterval(usaWatch, 1000);

//Dubai Watch
let DubaiWatch = () => {
    let options = { timeZone : 'Asia/Dubai'};
    let currentDate = new Date().toLocaleDateString('en-US',options);
    let currentTime = new Date().toLocaleTimeString('en-US',options);
    document.querySelector('#dubai-date').innerText =  currentDate;
    document.querySelector('#dubai-time').innerText = currentTime;
    };
    setInterval(DubaiWatch, 1000);
    

    //Indian Watch
let singaporeWatch = () => {
    let options = { timeZone : 'Asia/Singapore'};
    let currentDate = new Date().toLocaleDateString('en-US',options);
    let currentTime = new Date().toLocaleTimeString('en-US',options);
    document.querySelector('#singapore-date').innerText =  currentDate;
    document.querySelector('#singapore-time').innerText = currentTime;
    };
    setInterval(singaporeWatch, 1000);

    //AfghanistanWatch
let AfghanistanWatch = () => {
    let options = { timeZone : 'Asia/Kabul'};
    let currentDate = new Date().toLocaleDateString('en-US',options);
    let currentTime = new Date().toLocaleTimeString('en-US',options);
    document.querySelector('#Afghanistan-date').innerText =  currentDate;
    document.querySelector('#Afghanistan-time').innerText = currentTime;
    };
    setInterval(AfghanistanWatch, 1000);

        //China Watch
let chinaWatch = () => {
    let options = { timeZone : 'Asia/Dubai'};
    let currentDate = new Date().toLocaleDateString('en-US',options);
    let currentTime = new Date().toLocaleTimeString('en-US',options);
    document.querySelector('#China-date').innerText =  currentDate;
    document.querySelector('#China-time').innerText = currentTime;
    };
    setInterval(chinaWatch, 1000);
