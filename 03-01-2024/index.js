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