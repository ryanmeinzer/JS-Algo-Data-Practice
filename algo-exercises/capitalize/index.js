// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // My USSR Approach
    // Understand
        // reword - return each word of a string capitalized
        // inputs - string, characters
        // outputs - string
        // examples - capitalize('here's An example) --> 'Here's An Example'
    // Sudo Chop
    // Solve / Skip
        // // <-- START UNCOMMENT
        // // split each word of string by space into an array
        // let splitString = str.split(' ')
        // // create capitalized array
        // let capitalizedArray = []
        // // loop over array
        // for (let word of splitString) {
        //     // capitalize the first letter of each word of the array
        //     word = word[0].toUpperCase() + word.slice(1)
        //     // push each word into capitalizedArray
        //     capitalizedArray.push(word)
        // }
        // // join capitalized array back into a string
        // let joinedString = capitalizedArray.join(' ')
        // // return joined string
        // return joinedString
        // // END UNCOMMENT -->
    
    // Refactor
    // // <-- START UNCOMMENT
    // // create capitalized array
    // let capitalizedArray = []
    // // loop over array
    // // split each word of string by space into an array
    // for (let word of str.split(' ')) {
    //     // capitalize the first letter of each word of the array
    //     // push each word into capitalizedArray
    //     capitalizedArray.push(word[0].toUpperCase() + word.slice(1))
    // }
    // // join capitalized array back into a string
    // // return joined string
    // return capitalizedArray.join(' ')
    // // END UNCOMMENT -->

    // solved with standard loop (not ideal IMO)
    // create an empty string 'result' with the first character capitalized
    let result = str[0].toUpperCase()
    // for each character in string
    for (i = 1; i < str.length; i++) {
        // if the character to the left is a space or the first character
        if (str[i - 1] === ' ') {
            // capitalize it and add to 'result'
            result += str[i].toUpperCase()
        // else add it to 'result'
        } else {
            result += str[i]
        }
    }
    // return result
    return result
}

module.exports = capitalize;