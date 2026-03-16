// 1. Print Right-Angled Star Triangle

// Input: Rows = 5

// Output:

// *
// **
// ***
// ****
// *****
// ✨ Teaches nested loops and increasing sequence printing.

// for (let i = 1; i <= 5; i++) {
//     let str = ""
//     for (let j = 1; j <= i; j++) {
//         str += "*"
//     }
//     console.log(str)
// }

// 2. Print Inverted Right-Angled Triangle

// Input: Rows = 5

// Output:

// *****
// ****
// ***
// **
// *
// ✨ Reinforces decreasing nested loop structure.

// for (let i = 5; i >= 0; i--) {
//     let str = ""
//     for (let j = 1; j <= i; j++) {
//         str += "*"
//     }
//     console.log(str)
// }

// 3. Print Pyramid Pattern

// Input: Rows = 5

// Output:

//     *
//    ***
//   *****
//  *******
// *********
// ✨ Teaches alignment using spaces and nested loops.

// for (let i = 1; i <= 9; i += 2) {
//     let str = ""
//     for (let j = 1; j <= 9; j++) {
//         if (j <= (9 - i) / 2 || j > ((9 - i) / 2) + i) str += " "
//         else str += "*"
//     }
//     console.log(str)
// }

// 4. Input: Rows = 5

// Output:

// *********
//  *******
//   *****
//    ***
//     *
// ✨ Teaches reverse space-star pattern alignment.

// for (let i = 9; i >= 1; i -= 2) {
//     let str = ""
//     for (let j = 1; j <= 9; j++) {
//         if (j <= (9 - i) / 2 || j > ((9 - i) / 2) + i) str += " "
//         else str += "*"
//     }
//     console.log(str)
// }

// 5. Print Hollow Square Pattern

// Input: Rows = 5

// Output:

// *****
// *   *
// *   *
// *   *
// *****
// ✨ Practices conditional printing within nested loops.

// for (let i = 1; i <= 5; i++) {
//     let str = ""
//     for (let j = 1; j <= 5; j++) {
//         if (i > 1 && i < 5) {
//             if (j > 1 && j < 5) {
//                 str += " "
//             } else {
//                 str += "*"
//             }
//         } else {
//             str += "*"
//         }
//     }
//     console.log(str)
// }

// 6. Print Hollow Pyramid Pattern

// Input: Rows = 5

// Output:

//     *
//    * *
//   *   *
//  *     *
// *********
// ✨ Combines conditionals and symmetrical logic in loops.

// for (let i = 1; i <= 9; i += 2) {
//     let str = ""
//     for (let j = 1; j <= 9; j++) {
//         let start = ((9 - i) / 2) + 1
//         let end = ((9 - i) / 2) + i
//         if (j < start || j > end) str += " "
//         else if (i === 9 || j === start || j === end) str += "*"
//         else str += " "
//     }
//     console.log(str)
// }

// 7. Print Alternating Binary Triangle

// Input: Rows = 5

// Output:

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1
// ✨ Combines parity logic with nested loops.

// let start = 1
// for (let i = 1; i <= 5; i++) {
//     let currentNum = start
//     let str = ""
//     for (let j = 1; j <= i; j++) {
//         str += currentNum
//         currentNum = currentNum === 1 ? 0 : 1
//     }
//     console.log(str)
//     start = start === 1 ? 0 : 1
// }

// 8. Print Hollow Inverted Pyramid

// Input: Rows = 5

// Output:

// *********
//  *     *
//   *   *
//    * *
//     *
// ✨ Focuses on conditionally printing edges and spaces.

// for (let i = 9; i >= 1; i -= 2) {
//     let str = ""
//     for (let j = 1; j <= 9; j++) {
//         let start = ((9 - i) / 2) + 1
//         let end = ((9 - i) / 2) + i
//         if (j < start || j > end) str += " "
//         else if (i === 9 || j === start || j === end) str += "*"
//         else str += " "
//     }
//     console.log(str)
// }