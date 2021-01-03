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
//     }
//     return results[n]  
// }

// // solved with recursion with 0(2^n) exponential time
// function fib(n) {
//     // USSR
//     // Understand - in a fibonacci series, return the nth index's integer
//     // Sudo Chop
//     // Solve / Skip
//     // Refactor
//     // base case - if n is less than 2, return n
//     if (n < 2) {
//         return n
//     }
//     // if not, return fib(n-1) + fib(n-2)
//     return fib(n-2) + fib(n-1)
// }

// solved with memoization recursion with [0(n) linear?] time
// pass in slowFib into memoize assigned to variable
let fib = memoize(slowFib)

function memoize(fn) {
    // store all function calls to an assigned cache variable object
    let cache = {}
    // make an anonymous function/version of the memoize function that will essentially be 'fib', accepting TBD array of arguments (via ES6)
    return function(...args) {
        // look at cache object and determine if the args key has been used in the function
        if (args in cache) {
        // if (cache[args]) {
            // if so, return
            return cache[args]
        }
        // else, call the function, take the result of calling slowFib and cache it
        let result = fn.apply(this, args)
        // take result of calling our slowFib and store inside of cache object
        cache[args] = result
        console.log(cache)
        // return result
        return result
    }
}

// slowFib
function slowFib(n) {
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
    return fib(n - 2) + fib(n - 1)
}

// the above is the same as
// function fib(n) {
//     if (n < 2) {
//         return n
//     }
//     return fib(n - 2) + fib(n - 1)
// }
// let fib = memoize(fib)

module.exports = fib;

// just adding something here for a test

// adding something again