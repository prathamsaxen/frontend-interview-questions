// Question - 1
let count = 0;
const arr = [0,1,2,3];

arr.forEach(num=>{
    if(num)
    {
        count++;
    }
})

console.log(count);
// Expected Output = 3
// Reason = Conditional statement will assume zero as false and in that particular iteration code will not go inside that.



// Question - 2
const newArr = [1,2,4,5,6,7];
console.log(newArr.slice(0,4));
// Expected Output = [ 1, 2, 4, 5 ]
// Reason = It never modifies the original array it returns the copy of array and first is the starting index and last parameter is the end index
//          If you give the negative parameters then it will take the index from the end of array.

