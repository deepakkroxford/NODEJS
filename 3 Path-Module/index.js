const path = require('path');

// this is used to get the file directory name
console.log("Directory Name :-> ",path.dirname(__filename));
// this is used to get the file name
console.log("File Name :-> ",path.basename(__filename));
// this is used to get the file name without extension
console.log("File Extension :-> ",path.extname(__filename));


const joinpath = path.join('deepakkumarSingh', 'test', 'test.txt');
console.log("Join Path :-> ",joinpath);

const resolvepath = path.resolve("deepakkumarSingh", 'test', 'test.txt');
console.log("Resolve Path :-> ",resolvepath);

const normalizepath = path.normalize("deepakkumarSingh//test//test.txt");
console.log("Normalize Path :-> ",normalizepath);
