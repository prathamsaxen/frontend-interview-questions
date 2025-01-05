// Closures

function closuresInit() {
  let data = "Pratham Saxena";
  function closureFunction() {
    console.log(data);
  }
  return closureFunction;
}

let innerFunction = closuresInit();
innerFunction();

// Expected Output = Pratham Saxena
// Reason: When we execute this code snippet, we might assume that the parent function has already completed and executed properly.
// However, in this case, the inner function will use the elements from the parent function that are bound to it, rather than making copies of the variables.
// This behavior binds the required variables by reference. This concept is known as a closure.

// Currying Process

function currying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const response = currying(5);
const data = response(2);
const finalOutput = data(19);
console.log(finalOutput);
console.log(currying(2)(5)(8));
// Curryin works over closure if your function returns nested function which are taking arguments then instead of calling them again you can directly call them in same line with currying,
