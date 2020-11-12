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

function steps(n) {
    // USSR
    // Understand
        // rephrase - make n stairs deep/lines with n stairs wide
        // input - integer
        // output - strings
        // examples - steps(2)
            // '# '
            // '##'
    // Sudo Chop
        // create for loop with n steps/iterations
        for (let step = 0; step < n; step++) {
            // create variable for step equal to #
            let stepStr = '#'
            // create n '#' strings
            if (step > 0) {
                stepStr = stepStr.repeat(step + 1)
            }
            // create n - step ' ' strings
            let spaceStr = ' '
            if (n > step + 1) {
                
                spaceStr = spaceStr.repeat(n - step - 1)
            }
            // console log each iteration interpolated with variables
            n > step + 1 ? console.log(stepStr + spaceStr) : console.log(stepStr)
        }
    // Solve / Skip
    // Refactor
}

module.exports = steps;
