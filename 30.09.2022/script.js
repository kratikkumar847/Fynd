let hour=0;
let minute=0;
let second=0;

setInterval(()=>{
     hour = new Date().getHours();
     minute = new Date().getMinutes();
     second = new Date().getSeconds();
    document.getElementById('display').innerHTML = fullTime;
}, 0)

let fullTime = `${hour}:${minute}:${second} `;
