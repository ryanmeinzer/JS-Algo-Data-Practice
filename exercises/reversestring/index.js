// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // solved with reverse() 
    // return str.split('').reverse().join('')

    // // solve with for loop 
    // let reversed = ''
    // // for (let i = 0; i < str.length; i++){
    // //     reversed = str[i] + reversed
    // for (let character of str){
    //     reversed = character + reversed
    // }
    // return reversed

    // solved with reduce 
        return str.split('').reduce((reversed, character) => character + reversed, '')
    }

module.exports = reverse;
