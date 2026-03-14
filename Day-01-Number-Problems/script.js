// 1. Print Numbers from 1 to N

// Input: 5
// Output: 1 2 3 4 5
// ✨ Teaches basic loop construction.

/*
const n = 10

for (let i = 1; i <= n; i++) {
    console.log(i)
}
*/

// 2. Print Numbers from N to 1 without changing the loop condition of above question

// Input: 5
// Output: 5 4 3 2 1
// ✨ Thinking creatively and manipulating logic within the loop

/*
const n = 10

for (let i = 1; i <= n; i++) {
    console.log(11 - i)
}
*/

// 3. Print All Even Numbers from 1 to N

// Input: 10
// Output: 2 4 6 8 10
// ✨ Introduces conditional checks inside loops.

/*
const n = 10

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) console.log(i)
}
*/

// 4. Sum of First N Natural Numbers

// Input: 5
// Output: 15
// ✨ Encourages cumulative addition and variable usage.

/*
const n = 5
let sum = 0

for (let i = 1; i <= n; i++) {
    sum += i
}

console.log(sum)
*/

// 5. Product (Factorial) of N

// Input: 5
// Output: 120
// ✨ Reinforces loop control with multiplication logic.

/*
const n = 5
let factorial = 1

for (let i = 1; i <= n; i++) {
    factorial *= i
}

console.log(factorial)
*/

// 6. Sum of All Even Numbers up to N

// Input: 10
// Output: 30 (2+4+6+8+10)
// ✨ Combines loops + condition + accumulation.

/*
const n = 10
let sum = 0

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) sum += i
}

console.log(sum)
*/

// 7. Print Squares of Numbers from 1 to N

// Input: 5
// Output: 1 4 9 16 25
// ✨ Introduces arithmetic pattern generation.

/*
const n = 5

for (let i = 1; i <= n; i++) console.log(i * i)
*/

// 8. Print all numbers divisible by 3 and 5 up to N

// Input: 30
// Output: 15 30
// ✨ Reinforces conditional checks inside loops.

/*
const n = 30

for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log(i)
}
*/

// 9. Find the sum of all odd numbers up to N

// Input: 10
// Output: 25 (1 + 3 + 5 + 7 + 9)
// ✨ Combines looping with conditional accumulation.

/*
const n = 10
let sum = 0

for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) sum += i
}

console.log(sum)
*/