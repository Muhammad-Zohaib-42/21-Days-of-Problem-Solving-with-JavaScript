// 1. Find the Maximum of Three Numbers

// Input: 10 20 5
// Output: 20
// ✨ Teaches nested or chained conditional logic and comparative reasoning.

function findMax(num1, num2, num3) {
    let maxNum = num1

    maxNum = num2 > maxNum ? num2 > num3 ? num2 : num3 : maxNum
    console.log(maxNum) 
}

findMax(100, 20, 50)