// 1. Find the Maximum of Three Numbers

// Input: 10 20 5
// Output: 20
// ✨ Teaches nested or chained conditional logic and comparative reasoning.

/*
function findMax(num1, num2, num3) {
    let maxNum = num1

    maxNum = num2 > maxNum ? num2 > num3 ? num2 : num3 : maxNum
    console.log(maxNum) 
}

findMax(100, 20, 50)
*/

// 2. Check if a Number is Positive, Negative, or Zero

// Input: -9
// Output: Negative
// ✨ Practices multi-branch conditions and comparison operators.

function isNumPositiveNegativeOrZero(num) {
    if (num > 0) return console.log("positive")
    if (num === 0) return console.log("zero")
    if (num < 0) return console.log("negative")
}

isNumPositiveNegativeOrZero(0)