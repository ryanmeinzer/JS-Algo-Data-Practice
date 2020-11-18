// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    // USSR
        // Understand
            // reword - print a pyramid with n rows and # with spaces to the left and right accordingly
            // inputs - integer
            // outputs - print statements with '#' and ' '
            // examples - pyramid(4)
            // '   #   '
            // '  ###  '
            // ' ##### '
            // '#######'
        // Sudo Chop
            // create level length variable 'levLen' from (n + n-1)
            let levLen = n + n - 1    
            // create midpoint variable 'midPoi' with Math.floor of 'levLen' / 2
            let midPoi = Math.floor(levLen / 2)
            // loop through rows from 0 to n
            for (let row = 0; row < n; row++) {
                // create empty string 'level'
                let level = ''
                // nested loop through columns from 0 to 'levLen'
                for (let column = 0; column < levLen; column++) {
                    // if column is less than or equal to midpoint minus row number of elements or greater than or equal to midpoint plus row number of elements, add '#' to 'level'
                    // if (column >= midPoi - row && column <= midPoi + row) {
                    if (midPoi - row <= column && midPoi + row >= column) {
                        level += '#'
                    // else add ' '
                    } else {
                        level += ' '
                    }
                }
                // console.log 'level'
                console.log(level)
            }
        // Solve / Skip
        // Refactor
}

module.exports = pyramid;
