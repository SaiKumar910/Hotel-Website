let count = 0;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let interval = 0;
let timerRunning = false;
//  start Timer
let startTimer = () => {
    count++;
    
     minutes = Math.floor((count / 100) /60);
     seconds = Math.floor((count / 100) - (minutes * 60));
     milliSeconds = Math.floor(count - (seconds * 100) - (minutes * 6000));
    
     document.querySelector('#min').innerText = leadingZero(minutes);
     document.querySelector('#sec').innerText = leadingZero(seconds);
     document.querySelector('#m-sec').innerText = leadingZero(milliSeconds);
};

//Click On Start Button
let startButton = document.querySelector('#start-btn');
startButton.addEventListener('click', function(){
   if(!timerRunning){
    interval = setInterval(startTimer,10); 
    timerRunning = true;  
   }
});


//Click On Stop Button
let stopButton = document.querySelector('#stop-btn');
stopButton.addEventListener('click' , function(){
   clearInterval(interval);
});
//Click On Reset Button
let resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener('click' , function(){
   clearInterval(interval);
    count = 0;
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    interval = 0;
    timerRunning = false;  
    document.querySelector('#min').innerText = '00';
    document.querySelector('#sec').innerText = '00';
    document.querySelector('#m-sec').innerText = '00';
});
//Leading Zero
let leadingZero = (time) => {
  if( time <= 9){
      return "0" + time;
  }
  else{
      return time;
  }
};