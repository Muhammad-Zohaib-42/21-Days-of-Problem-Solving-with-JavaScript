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

/*
function isNumPositiveNegativeOrZero(num) {
    if (num > 0) return console.log("positive")
    if (num === 0) return console.log("zero")
    if (num < 0) return console.log("negative")
}

isNumPositiveNegativeOrZero(0)
*/

// 3. Calculate Electricity Bill
// Input: Units = 230

// Output: Total Bill = ₹1500

// ✨ Applies multiple ranges using chained else if and cumulative logic.

// Example Logic:

// 0–100 units → ₹5 per unit
// 101–200 units → ₹7 per unit
// 201–300 units → ₹10 per unit
// Above 300 units → ₹12 per unit
// 🔍 Teaches: cumulative calculation + condition chaining.

/*
function calculateElectricityBill(units) {
    let bill = 0

    if (units > 300) {
        bill += (units - 300) * 12
        units = 300
    }

    if (units > 200) {
        bill += (units - 200) * 10
        units = 200
    }

    if (units > 100) {
        bill += (units - 100) * 7
        units = 100
    }

    if (units > 0 && units < 101) {
        bill += units * 5
        units = 0
    }

    console.log(bill)
}

calculateElectricityBill(200)
*/

// 4. Check if a Character is a Vowel or Consonant

// Input: e
// Output: Vowel
// ✨ Combines logical OR (||) operator and string comparisons.

/*
function isVowelOrConsonant(letter = "") {
    letter = letter.trim()
    if (letter.length === 0 || letter.length > 1) return console.log("a single letter is required")
    
    if (['a', 'e', 'i', 'o', 'u'].some(ltr => ltr === letter)) {
        console.log("Vowel")
    } else {
        console.log("Consonant")
    }
}

isVowelOrConsonant('u')
*/

// 5. Check if a Year is a Leap Year

// Input: 2024
// Output: Leap Year
// ✨ Builds compound condition logic using multiple if statements (%4, %100, %400).
// A year is a leap year if it satisfies these conditions:

// It is divisible by 4,
// ➜ year % 4 === 0
// But not divisible by 100,
// ➜ year % 100 !== 0
// Unless it is also divisible by 400,
// ➜ year % 400 === 0
// 🧩 In Simple Words

// If a year is divisible by 4, it’s a leap year.
// Except if it’s also divisible by 100, then it’s not a leap year.
// But if it’s divisible by 400, it is a leap year again.

// console.log(2024 % 400)

// 6. Check if a Character is Uppercase, Lowercase, Digit, or Special Character

// Input: A
// Output: Uppercase Letter
// ✨ Teaches use of character code ranges (charCodeAt) and compound logical conditions.
// 🔍 Concepts: ASCII range checks, compound && and || operators.

/*
function isUppercaseLowerCaseDigitOrSpecialCharacter(character) {
    if (!character.trim() || character.length > 1) return console.log("a single character is required")
    if (character >= 'A' && character <= "Z") return console.log('Uppercase')
    if (character >= 'a' && character <= "z") return console.log('Lowercase')
    if (typeof parseInt(character) === "number" && (parseInt(character) + parseInt(character))) return console.log('Digit')
    if (['~', '!', '@', '#', '$', '%', '^', '&', '*', '?'].some(char => char === character)) return console.log('Special Character')
}

isUppercaseLowerCaseDigitOrSpecialCharacter('3')
*/

// 7. Check Triangle Type Using Sides and Angles
// Input: Sides = 3, 4, 5

// Output: Right-Angled Triangle

// ✨ Combines geometric reasoning + Pythagoras theorem check.

// Example Logic:

// If a² + b² = c² → Right-angled
// Else if all sides equal → Equilateral
// Else if any two equal → Isosceles
// Else → Scalene

/*
function checkTriangleType(side1, side2, side3) {
    if (!side1 || !side2 || !side3) return console.log("all sides are required")
    if (Math.pow(side1, 2) + Math.pow(side2, 2) === Math.pow(side3, 2)) return console.log("Right-Angled")
    if (side1 === side2 && side1 === side3) return console.log("Equilateral")
    if (side1 === side2 || side1 === side3 || side2 === side3) return console.log("Isosceles")
    console.log("Scalene")
}

checkTriangleType(1, 2, 3)
*/

// 8. Calculate Income Tax Based on Slabs
// Input: Income = ₹7,50,000

// Output: Tax = ₹62,500

// ✨ Applies progressive slab logic similar to electricity bill but with financial context.

// Example Logic (example slabs):

// Up to ₹2,50,000 → No tax
// ₹2,50,001 – ₹5,00,000 → 5%
// ₹5,00,001 – ₹10,00,000 → 20%
// Above ₹10,00,000 → 30%
// 🔍 Requires cumulative calculation using nested if–else or multiple slab loops.

/*
function calculateIncomeTax(income) {
    let tax = 0

    if (income > 1000000) {
        tax += (income - 1000000) * 30 / 100
        income = 1000000
    }

    if (income > 500000) {
        tax += (income - 500000) * 20 / 100
        income = 500000
    }

    if (income > 250000) {
        tax += (income - 250000) * 5 / 100
        income = 250000
    }

    console.log(tax)
}

calculateIncomeTax(750000)
*/