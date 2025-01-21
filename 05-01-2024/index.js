function sayHi() {
    console.log(name);
    // console.log(age);
    var name = 'Lydia';
    let age = 21;
  }
  
  sayHi();


//   Expected Output = Refference Error
// Reason = var is declared with global scope and hoisting hoist it at the top so that is assigned with undefined keyword
// Whereas in let it also hoist the variable but in this case the variable is in Temporal Dead Zone wher we can not access the variable
// Temporal Dead Zone = The Time span variable hoist but not declared , in this time we can not access the variable.

// console.log(data);
// let data = 'Pratham Saxena';


for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }
  
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }