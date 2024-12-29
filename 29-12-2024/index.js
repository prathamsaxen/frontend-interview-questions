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