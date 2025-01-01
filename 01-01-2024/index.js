// Template Literals
// Template Literals are the feature of ES6 which avoids the string concatenation

const name = 'Pratham Saxena';
const str = 'Hello ' + name;
console.log(str);

const str2 = `Hello ${name}`;
console.log(str2);


// Functions 
// 1. Traditional Functions
// 2. Arrow Functions 
// Difference Between Them -
// a. Syntax





// Syntax - 
// Traditional Function
function tempFunction(){
    console.log("Traditional Function Callled");
}


// Arrow Function 
const tempArrowFunction=()=>{
    console.log("Arrow Function Callled");
}

// Call
tempFunction();
tempArrowFunction();





console.log(`Type of Temp Function ----------> ${typeof tempFunction}`)
console.log(`Type of Temp Arrow Function ----------> ${typeof tempArrowFunction}`)