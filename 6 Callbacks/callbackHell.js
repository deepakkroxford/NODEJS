const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'example.txt');

fs.readFile(filepath,'utf8',(err,data)=>{
    if(err){
        console.log("Error reading file", err);
        return;
    }
    const modifyFileData = data.toUpperCase();
    fs.writeFile(filepath, modifyFileData, (err) => {
        if(err){
            console.log("Error writing file", err);
            return;
        }
        console.log("File content modified");

        fs.readFile(filepath, 'utf8', (err, data) => {
            if(err){
                console.log("Error reading file", err);
                return;
            }
            console.log("Modified File content :-> ", data);
        })
    });
})