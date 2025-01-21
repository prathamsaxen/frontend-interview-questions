function sum(){
    let sum = 0;
    for(let i in arguments){
        sum+=arguments[i];
    }
    console.log(sum);
}

sum(2,3,4,5,6,2,34,3);

// With Rest Operator
function PrintSumWithYourContent(content,...args)
{
    let sum = 0;
    for (let index in args)
    {
        sum+=args[index];
    }
    console.log(`${content} => ${sum}`);
}

PrintSumWithYourContent("Sum of your array is - ",2,3,4,5,6);