const fs = require('fs');
const path = require('path');

const fileName = document.getElementById('fileName');
const fileContents = document.getElementById('fileContents');
const btnCreate = document.getElementById('btnCreate');
const btnRead = document.getElementById('btnRead');
const btnDelete = document.getElementById('btnDelete');

let pathname = path.join(__dirname,'Files');

btnCreate.addEventListener('click',function(){
    let file = path.join(pathname,fileName.value);
    let contents = fileContents.value;
    fs.writeFile(file, contents, function(err){
        if(err) {
            return console.log(err);
        }

        console.log('the file was saved')
    })
});
btnRead.addEventListener('click',function(){
    let file = path.join(pathname,fileName.value);
    fs.readFile(file, function(err, data){
        if(err) {
            return console.log(err);
        }
        fileContents.value = data
        console.log('the file was read')
    })
});

btnDelete.addEventListener('click',function(){
    let file = path.join(pathname,fileName.value);
    fs.unlink(file, function(err){
        if(err) {
            return console.log(err);
        }
        fileName.value = ''
        fileContents.value = ''
        console.log('the file was deleted')
    })
});