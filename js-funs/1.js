// Write a function below that accepts a number as the only argument.
// The function should determine whether the number is divisible by 3,
// and return either true or false.
// Choose names that make the code easy to understand.
//
// Note:  None of the review # problems have tests included, but feel free to write your own.

// Input: number
// Output: boolean
// True if nnnumber is divisible by 3, else false

function divByThree(num) {
    return num % 3 === 0? true : false;
}

console.log(divByThree(0));
console.log(divByThree(3));
console.log(divByThree(44));
console.log(divByThree(39));
console.log(divByThree(512));