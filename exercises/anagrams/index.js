// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // My USSR Method
        // Understand
            // reword - given two strings, determine if their characters are the same quantity
            // inputs - only characters, ignore all else
            // outputs - boolean
            // examples - 'dan', 'and' --> true
        // Sudo Chop
            // convert each string with regex to just characters
            // convert each string to a character mapped object with characters as keys and counts as values
            let aCharMap = buildCharMap(stringA)
            let bCharMap = buildCharMap(stringB)
            // create help function for this
            function buildCharMap(str) {
                let charMap = {}
                for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
                    charMap[char] = charMap[char] + 1 || 1
                }
                return charMap
            }
            // if key length is not the same, return false
            if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
                return false
            }
            // loop through first character map's keys to evaluate if any of the values are not identical to the second character map's keys and return false if so
            for (let char in aCharMap) {
                if (aCharMap[char] !== bCharMap[char]) {
                    return false
                }
            }
            // else, return true
            return true
        // Solve / Skip
        // Refactor

}

module.exports = anagrams;

// sort both strings and compare
// if character count of both strings is equal
    // convert each string to a mapped object with keys as characters and values as counts
    // 
// else return false
// return stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort() === stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort()