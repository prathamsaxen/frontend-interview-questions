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
// b. Arguments





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




// Arguments 
// Traditional Function
function TraditionalFunction()
{
    console.log(arguments);
    console.log(typeof arguments);
}


const ArrowFunction=(...arguments)=>{
    console.log(...arguments)
    console.log(typeof arguments);
}


// Call
TraditionalFunction(1234,4321);
ArrowFunction(1234,4321);

// Summary Table
// Feature	Function Declaration	Arrow Function
// Syntax	function add(a, b) {}	const add = (a, b) => {}
// this Context	Dynamic binding	Lexical (inherited)
// arguments Object	Available	Not available
// Constructor	Can be used as a constructor	Cannot be used as a constructor
// Method Definition	Suitable	Not recommended
// Readability	Verbose for simple functions	Concise

