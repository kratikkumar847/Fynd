// const {data} = require('./index.mjs')
// console.log('mjs file data' , data);



// file system modules
const fs = require('fs')
// fs.writeFileSync('file1.txt', 'we are using file system');
// fs.writeFileSync('file1.txt', 'we ');
// fs.appendFileSync('file1.txt', 'we are the one who are genius');

// const read_buf_data = fs.readFileSync('file1.txt')
// console.log(read_buf_data.toString());

fs.renameSync("file1.txt", "rename.txt");