let set = document.getElementById("set")
let alarmSet = document.getElementById('alarmSet')
let stop = document.getElementById("stop")
let audio = new Audio("alarmsound.mp3");
let timeRemaining = document.getElementById('timeRemaining')
let second,minute = 0
let timer = ''
function setup() {
  set.onclick = function () {
    console.log(alarmSet.value); 
    setAlarm(alarmSet.value);
  };
  stop.onclick =  function() {
    pauseAlarm();
  };
}
function setAlarm(time) {
   if(time < 60 ) second = time 
   else{
    minute = Math.trunc(time / 60)
    second = time % 60
    }
    timeRemaining.innerHTML = `Time Remaining: ${minute.toString().padStart(2,"0")}:${second.toString().padStart(2,"0")}`
    timer = setInterval(time_down,1000)
}
function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
  clearInterval(timer)
}
function time_down(){
  if(second < 60 && second > 0) {
    second--
  }
  else if(second <= 0 && minute > 0){
    second = 59
    minute-=1
  }
  else{
    playAlarm()
  }
  timeRemaining.innerHTML = `Time Remaining: ${minute.toString().padStart(2,"0")}:${second.toString().padStart(2,"0")}`
}
window.onload = setup;
