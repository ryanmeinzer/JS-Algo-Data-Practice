// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// // solved with iterative loop
// function vowels(str) {
//     // USSR
//     // Understand 
//         // reword - return the quantity of vowels within a string
//         // inputs - string with characters
//         // outputs - integer
//         // examples - vowels('Yo Wassup?') --> 3
//     // Sudo Chop
//     // Solve / Skip
//         // create a counter variable 'count'
//         let count = 0
//         // create a checker variable 'checkSet'
//         let checker = ['a', 'e', 'i', 'o', 'u']
//         // loop through str and make all lower case
//         for (let char of str.toLowerCase()) {
//             // evaluate every character 'char' to see if it's included in 'checkSet'
//             if (checker.includes(char)) {
//                 count++
//             } 
//                 // if it's a vowel, add one to count
//             }
//         // return 'count'
//         return count
//     // Refactor
// }

function vowels(str) {
    // USSR
    // create results variable to hold result and to account for null value
    let result = str.match(/[aeiou]/gi)
    // return result if not null and 0 if null
    return result ? result.length : 0
}

module.exports = vowels;
