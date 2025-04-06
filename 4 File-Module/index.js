const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'database');
console.log("Data folder path :-> ", dataFolder);
if(!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log("Directory created");
}

const filepath = path.join(dataFolder, 'example.txt');
console.log("File path :-> ", filepath);

fs.writeFileSync(filepath, 'Hello from node js');
console.log("File created");


const readContentFromFile = fs.readFileSync(filepath, 'utf-8');
console.log("File content :-> ", readContentFromFile);

const appendContentToFile = fs.appendFileSync(filepath, '  My name is deepak kumar singh');
console.log("File content appended");

const readContentFromFileAfterAppend = fs.readFileSync(filepath, 'utf-8');
console.log("File content after append :-> ", readContentFromFileAfterAppend);


/**
 * @async way of creatring the file 
 */


const asyncCreation = path.join(dataFolder, 'asyncFile.txt');

fs.writeFile(asyncCreation, 'Hello from async file', (err) => {
    if (err) {
        console.error("Error creating file", err);
    } else {
        console.log("Async file created");
    }
});

fs.appendFile(asyncCreation, 'My name is deepak kumar singh', (err) => {
    if (err) {
        console.error("Error appending file", err);
    } else {
        console.log("Async file content appended");
    }
});

fs.readFile(asyncCreation, 'utf-8', (err, data) => {

    if(err){
        throw err;
    }
    else{
        console.log("Async file content :-> ", data);
    }
})



/*
    async way to create a new folder name middleware previously we created using the sync method
*/

const newFolder = path.join(__dirname,'middleware');

if (!fs.existsSync(newFolder)) {
    fs.mkdir(newFolder, { recursive: true }, (err) => {
        if (err) {
            console.error("Error creating folder:", err);
        } else {
            console.log("New folder created");
        }
    });
} else {
    console.log("Folder already exists");
}


const newFile = path.join(newFolder, 'example.txt');
fs.writeFile(newFile, 'Hello from async file', (err) => {
    if (err) {
        console.error("Error creating file", err);
    } else {
        console.log("Async file created");
    }
});