const bioData = {
    name : 'Kratik',
    age : 21,
    college: "sati"
};

const fs = require('fs');

// Object to JSON 
// const jsonData = JSON.stringify(bioData);
// console.log(jsonData)


// JSON to Object
// const objData = JSON.parse(jsonData);
// console.log(objData.name);



// 1: convert to JSON
// 2: dusre file me add kardena
// 3: readfile
// 4: again convert back to object

const jsonData = JSON.stringify(bioData);
// fs.writeFile("json1.json" , jsonData, (err)=>{
//     console.log("data");
// });

fs.readFile("json1.json" , "utf-8", (err,data) =>{
    const oridata = JSON.parse(data)
    console.log(oridata.name);
})