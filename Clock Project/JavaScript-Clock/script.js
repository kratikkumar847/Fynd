setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

function myFun(){
  var element = document.body;
   element.classList.toggle("dark-mode");
   let dark = document.getElementById('container');
    dark.style.background == 'black';
}

   

setInterval(()=>{
  temp = new Date();
  hour = temp.getHours();
  minute = temp.getMinutes();
  second = temp.getSeconds();
  let fullTime = `${hour}:${minute} `;
 document.getElementById('time').innerHTML = fullTime;
}, 500);

setClock();