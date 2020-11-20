// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

// USSR
// Understand
    // reword - given a number, return an evenly-spiraled matrix 
    // inputs - integer
    // outputs - arrays of arrays of integers
    // examples - see above
// Sudo Chop
    // create empty array of arrays of integers 'results'
    let results = []
    for (let i = 0; i < n; i++) {
        results.push([])
    }
    // create a counter variable that starts at one
    let counter = 1
    // create start and end rows and columns
    let startRow = 0
    let startColumn = 0
    let endRow = n - 1
    let endColumn = n - 1
    // if start column <= end column AND start row <= end row
    while (startColumn <= endColumn && startRow <= endRow) {
        // loop from start column to end column for top row of matrix
        for (i = startColumn; i <= endColumn; i++) {
            // assign counter variable at results[start row][i]
            results[startRow][i] = counter
            // increment counter
            counter++
        }
        // increment start row
        startRow++
        // loop from start row to end row for right column of matrix
        for (i = startRow; i <= endRow; i++) {
            // assign counter variable at results[i][end column]
            results[i][endColumn] = counter
            // increment counter
            counter++
        }
        // decrement end column
        endColumn--
        // repeat for bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter
            counter++
        }
        endRow--
        // repeat for start column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter
            counter++
        }
        startColumn++
    }
    return results
// Solve / Skip
// Refactor

}

module.exports = matrix;
