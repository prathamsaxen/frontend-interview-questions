// About var keyword

var a = 5;
var a = 10;
a = "Hello World";
if (a === "Hello World") {
  var b = "Pratham";
}
console.log(a);
console.log(b);
// Global Scope
// Reassign possible, Redeclaration possible


// About let keyword
let c = 10;
    c = 20;
    console.log(c);
    if(c===20)
    {
        let d=20;
    }
// console.log(d);
// BlocK Scope
// // Reassign possible but Redeclaration not possible


// About const keyword
const abc = 'Hello World';
// abc = 5;
// const abc = 10;
console.log(abc);
// BloCk Scope
// Reassign not possible Redeclaration not possible