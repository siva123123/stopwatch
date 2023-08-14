window.onload = function () {
  
    var seconds = "00"; 
    var tens = "00"; 
    var hour="00";
    var appendTens = document.querySelector(".milli-sec")
    var appendSeconds = document.querySelector(".seconds")
    var appendhour=document.querySelector(".hour")
   // var buttonstart = document.querySelector('.btn-start');
    var buttonStart=document.querySelector('.btn-start')
    var buttonStop = document.querySelector('.btn-stop');
    var buttonReset = document.querySelector('.btn-reset');
    var Interval ;
    buttonReset.onclick=
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 16);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
        hour="00"
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendhour.innerHTML=hour;
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 60) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
      if(seconds>60){
        hour++;
        appendhour.innerHTML="0"+hour;
        seconds=0;
        appendSeconds.innerHTML="0"+0
      }
    
    }  
  
  }