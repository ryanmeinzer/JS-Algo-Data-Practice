// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
        // since it's width, do a breadth-first search of tree
        // create two separate arrays, 'counters' to hold width of each level and 'array' which serves as the iteration queue with a single character in it 'stop'
        let counters = [0]
        let array = [root, 'stop']
        // while there is more than one element in the array
        while (array.length > 1) {
            // grab first node of array
            let node = array.shift()
            // if that first element is the 'stop' element, we've hit the end of the level
            if (node === 'stop') {
                // so, add a zero element to the end of 'counters'
                counters.push(0)
                // and push the 'stop' element to the end of the array
                array.push(node)
            } else {
                // if node is not the 'stop' element, add all of the node's children to end of the array with the spread operator so that it merges the elements of the children array into the array
                array.push(...node.children)
                // and increment last value in counter by one
                counters[counters.length - 1]++
            } 
        }
        // return counters
        return counters
}

module.exports = levelWidth;
