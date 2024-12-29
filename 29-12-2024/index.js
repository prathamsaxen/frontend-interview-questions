// Question - 1
let count = 0;
const arr = [0, 1, 2, 3];

arr.forEach((num) => {
  if (num) {
    count++;
  }
});

console.log(count);
// Expected Output = 3
// Reason = Conditional statement will assume zero as false and in that particular iteration code will not go inside that.

// Question - 2
const newArr = [1, 2, 4, 5, 6, 7];
console.log(newArr.slice(0, 4));
// Expected Output = [ 1, 2, 4, 5 ]
// Reason = It never modifies the original array it returns the copy of array and first is the starting index and last parameter is the end index
//          If you give the negative parameters then it will take the index from the end of array.

// Question - 3
// unshift operator.
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2);
arr2.unshift(0);
console.log(arr2);
// Expected Output = [ 0, 1, 2, 3, 4, 5 ]
// Reason = Unshift method adds the element at the starting of the array.

//Question - 3
// Splice Method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Pratham", "Saxena");
console.log(fruits);
// Expected Output = [ 'Banana', 'Orange', 'Pratham', 'Saxena', 'Mango' ]
// Reason = Splice method removes and add elements in the original array
//  First Parameter = Index To perform addition or removal
// Second Parameter = Number of elements wants to remove
// Third and So one Parameters are the elements you wanted to add.

// Question - 4
const Obj = {
  a: 1,
  b: 2,
  c: 3,
  'a': 5,
  c: 5,
};

console.log(Obj);
// Expected Output = { a: 5, b: 2, c: 5 }
// Reason = When an object is created, if it contains duplicate keys, the last occurrence of the key in the object literal will ov erwrite the previous value. This is because JavaScript objects treat keys as unique.
// Reason behind a = In JavaScript object literals, property keys are treated uniformly, regardless of how they are written—whether as identifiers (like a) or string literals (like "a"). Internally, JavaScript converts both to strings, as object keys can only be strings or symbols.


// Question - 5
console.log(!"hello");
console.log(+false);
// Expection Output = false
//                    0
// Explanation:
// The ! operator (logical NOT) converts its operand to a boolean and then negates it.
// "hello" is a non-empty string, and in JavaScript, any non-empty string is treated as truthy.
// The coercion process:
// "hello" → truthy → true.
// Applying the ! operator negates it: !true → false.
// Explanation:
// The + operator (unary plus) tries to convert its operand to a number.
// The false boolean is coerced to a numeric value:
// false → 0.


// Question - 6
console.log(''==false);
console.log(''===false);
// Expected Output = true
//                   false
// console.log('' == false); → Output: true because == allows type coercion, and an empty string ('') is coerced to false.
// console.log('' === false); → Output: false because === checks for strict equality without type coercion, and '' (string) is not the same type as false (boolean).

// Question - 7
console.log(NaN === NaN);
console.log(NaN == NaN);
// Expected Output = false
//                   false
// Reason = In JavaScript, NaN is never equal to itself (NaN === NaN and NaN == NaN both return false) due to the IEEE 754 floating-point standard.




// Question - 8
console.log(typeof 1000);
console.log(typeof typeof 1000)
// Expeceted Output = number
//                    string
// Reason = As the type of number is given in the string format thats why the type of type of is an string.




// Question - 9
let arr3= [14,5,6,7];
arr3[10]=100;
console.log(arr3);
// Expected Output = [ 14, 5, 6, 7, <6 empty items>, 100 ]
// Reason = Till the last index all the middle index will be empty indexes automatically.




// Question - 10
function myFunction(){
    xyz=100;
    console.log(xyz);
}

function myFunction2(){
    // "use strict";
     abc=100;
    console.log(abc);
}
myFunction();
myFunction2();
// Expected Output = 100
//                   Reference Error
// n myFunction(), the variable xyz is implicitly created as a global variable (without use strict), so it logs 100, but in myFunction2(), "use strict" enforces strict mode, and the assignment to abc without declaration throws a ReferenceError.






// Question - 11
var xyz = 1 + abc;
abc = 100;
console.log(xyz);
// Expected Output = Reference Error because abc we accessed it before initialization


// Question - 11
var pqr = 1 + stu;
var stu = 100;
console.log(stu);



// Question - 12
const data={
    name:"Pratham Saxena"
}
console.log(data);
console.log(delete data.name);
console.log(data);