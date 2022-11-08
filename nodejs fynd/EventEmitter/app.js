const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayNyName", ()=>{
    console.log("Your Name is Kratik");
});

event.emit("sayNyName");