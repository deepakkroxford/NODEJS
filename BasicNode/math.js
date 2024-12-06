function addnumber(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

//this is way to do the export function so we can use in the other file 
module.exports = {
    addnumber,
    subtract
}