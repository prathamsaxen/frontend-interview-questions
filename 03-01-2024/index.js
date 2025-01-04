// Question - 1
console.log("" > -1);
console.log('' === true)
//Expected Output = true
                    // false
                    // Reason = Empty strings considered as false.




// Question - 2
console.log('greater'>'elephant');
// Expected Output = true
//  Reason = It compares the first letter of string according to alphabeticall reason.




// Question - 3
// Difference between forEach and map method?
// Key Difference Summary
// Feature	forEach	map
// Return Value	undefined	New transformed array
// Purpose	Side effects	Transformation
// Mutability	Can modify original array	Does not modify original array
// Chainability	Not chainable	Chainable
// Choose forEach for side effects and map for transformations!
const arr = [2,34,5,67,8];
const arr2 = arr.map((item,index)=> arr[index]=item*2);
console.log(arr);
arr.forEach((item,index)=>arr[index]=item*4);
console.log(arr);

// Simple Difference map returns you want where forEach does not returns



// Question - 4
console.log(![] + []);
// Expected Output = false
// Reason = Empty array is considered as true
// When we concatenate an false + empty array which as empty string 
// then resultant output will false



// Question - 5
{
    var a = -5;
}

let b = a;

{
    let b = -20;
}

console.log(b);

// Expected Output = -5;
// Reason = Var = Global Scope;
//          Let = Block Scope;



// Question - 6
// What is npm?
// Node Package Manager?

// Entry Point File of React App and role of index.js?



// What is the difference between frameworks and Library for UI side?


// How to Optimize React JS Apps?


// Void Elements?

// cellspadding vs cellspacing?


// What is Marquee tag?