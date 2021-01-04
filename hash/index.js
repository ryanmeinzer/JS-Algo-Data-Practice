// improved hash function using prime to reduce collisions and with separate chaining to account for duplicates with 0(1) for insertion, deletion and accessing
class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }
    _hash(key) {
        let total = 0
        let WEIRD_PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total
    }
    // accepts a key and value
    set(key, value) {
        // hashes the key
        let index = this._hash(key)
        // if nothing is there, set the index of keyMap to an empty array
        if (!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        // store key-value pair in the respective hash table array via separate chaining (to account for duplicates)
        this.keyMap[index].push([key, value])
    }
    // accepts a key
    get(key) {
        // hashes the key
        let index = this._hash(key);
        // get key-value pair in hash table, if it exists
        if (this.keyMap[index]) {
            // once found, loop over array to get key-value pair
            for (let i = 0; i < this.keyMap[index].length; i++) {
                // if key is found
                if (this.keyMap[index][i][0] === key) {
                    // return key's value
                    return this.keyMap[index][i][1]
                }
            }
        }
        // if key isn't found, return undefined
        return undefined;
    }
    keys() {
        // create an array to store all data
        let keysArr = []
        // loop over entire keyMap
        for (let i = 0; i < this.keyMap.length; i++) {
            // if there's something in the keyMap
            if (this.keyMap[i]) {
                // loop over each item of keyMap
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    // handle/merge duplicates
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArr
    }
    values() {
        // create an array to store all data
        let valuesArr = []
        // loop over entire keyMap
        for (let i = 0; i < this.keyMap.length; i++) {
            // if there's something in the keyMap
            if (this.keyMap[i]) {
                // loop over each item of keyMap
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    // handle/merge duplicates
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr
    }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000")
ht.set("yellow", "#FFFF00")
ht.set("olive", "#808000")
ht.set("salmon", "#FA8072")
ht.set("lightcoral", "#F08080")
ht.set("mediumvioletred", "#C71585")
ht.set("plum", "#DDA0DD")
// debugger

// // basic hash function with strings with linear time complexity
// function hash(key, arrayLength) {
//     let total = 0
//     for (let char of key) {
//         let value = char.charCodeAt(0) - 96
//         total = (total + value) % arrayLength
//     }
//     return total
// }