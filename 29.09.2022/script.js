// Demo

// let text = "Hello Students";
// let pattern = /students/i;
// let result = text.match(pattern);
// document.getElementById('demo').innerHTML = result;


// let text = "Hello Students";
// let pattern = /students/g;
// let result = text.match(pattern);
// document.getElementById('demo').innerHTML = result;


// let text = "Hello Students";
// let pattern = /students/m;
// let result = text.match(pattern);
// document.getElementById('demo').innerHTML = result;




// Modifiers

let text = "how are everyone and what is this ? "
let pattern = /is/g;
// let result = text.match(pattern);
// let result = text.exec(text);
let result = text.test(text);
console.log(result); 
document.getElementById('demo').innerHTML = result;