/*13.Create a function that takes an array of numbers as an argument and returns the sum of the odd numbers in the array. 
(Use a loop, not a method that does this in one step.)*/
function addEven(x) {
    let evenNum = 0;
    for(let i = 0; i < x.length; i++)
        if(x[i] % 2){
            continue;
        } else {
            evenNum += x[i];
        };
    return evenNum;
};

let someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(addEven(someArray));