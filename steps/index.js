// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// solved with interpolation
// function steps(n) {
//     // USSR
//     // Understand
//         // rephrase - make n stairs deep/lines with n stairs wide
//         // input - integer
//         // output - strings
//         // examples - steps(2)
//             // '# '
//             // '##'
//     // Sudo Chop
//     // Solve / Skip
//         // create for loop with n steps/iterations
//         for (let step = 0; step < n; step++) {
//             // create variable for step equal to #
//             let stepStr = '#'
//             // create n '#' strings
//             if (step > 0) {
//                 stepStr = stepStr.repeat(step + 1)
//             }
//             // create n - step ' ' strings
//             let spaceStr = ' '
//             if (n > step + 1) {

//                 spaceStr = spaceStr.repeat(n - step - 1)
//             }
//             // console log each iteration interpolated with variables
//             n > step + 1 ? console.log(stepStr + spaceStr) : console.log(stepStr)
//         }
//     // Refactor
// }

// // solved with iterative nested loops
// function steps(n) {
//     // USSR
//     // Understand
//     // rephrase - make n stairs deep/lines with n stairs wide
//     // input - integer
//     // output - strings
//     // examples - steps(2)
//     // '# '
//     // '##'
//     // Sudo Chop
//     // Solve / Skip
//     // loop through rows from 0 to n
//     for (let row = 0; row < n; row++) {
//     // create an empty string 'stair'
//         let stair = ''
//     // loop through columns from 0 to n
//         for (let column = 0; column < n; column++) {
//     // if the current column is <= current row, add a # to 'stair'
//             if (column <= row) {
//                 stair += '#'
//     // else add a space to 'stair'
//             } else {
//                 stair += ' '
//             } 
//         }
//     // console log 'stair'
//         console.log(stair)
//     // Refactor 
//     }
// }

// solved with recursion
function steps(n, row = 0, stair = '', increment = 1) {
    // make a base case
    if (row === n){
        return 
    }
    // create an empty string 'stair' (in parameters)
    // if the 'stair' string's length is equal to n, we're at the end of the row
    if (stair.length === n) {
        console.log(stair)
    // change function to increment accordingly to base case
        steps(n, row + increment)
    // make increment default (in parameters)
        return
    }   
    // if the 'stair' string's length is <= the row, add '#'
    if (stair.length <= row) {
        stair += '#'
    // else add ' '
    } else {
        stair += ' '
    }
    steps(n, row, stair)

}

module.exports = steps;
