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