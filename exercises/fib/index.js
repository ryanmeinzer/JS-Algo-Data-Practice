// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// // solved with iteration with 0(n) linear runtime
// function fib(n) {
// // USSR
// // Understand - in a fibonacci series, return the nth index's integer
// // Sudo Chop
// // Solve / Skip
// // Refactor
//     // create 'results' array with first two numbers
//     let results = [0,1]
//     // for index of i = 2, loop / iterate up to n
//     for (let i = 2; i <= n; i++) {
//         // let value = sum of last two numbers
//         value = results[i - 2] + results[i - 1]
//         // push i into 'results'
//         results.push(value)
//         }
//     return results[n]  
// }

// solved with recursion with 0(n^2) quadradic time
function fib(n) {
    // USSR
    // Understand - in a fibonacci series, return the nth index's integer
    // Sudo Chop
    // Solve / Skip
    // Refactor
    // base case - if n is less than 2, return n
    if (n < 2) {
        return n
    }
    // if not, return fib(n-1) + fib(n-2)
    return fib(n-2) + fib(n-1)
}


module.exports = fib;

// just adding something here for a test

// adding something again