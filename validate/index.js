// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

// function validate(node, min = null, max = null) {
//     console.log(node.data)
//     // start at head node and ensure it's less
//     // create 'min' and 'max' variables with default values of null (done in function above)
//     // if max isn't null (ie has been set) AND the node is greater than max
//     if (max !== null && node.data > max) {
//         // return false as it's not a binary tree
//         return false
//     }
//     // if min isn't null (ie has been set) AND the node is less than min
//     if (min !== null && node.data < min) {
//         // return false as it's not a binary tree
//         return false
//     }
//     // if there's a node to the left AND if calling validate with that left node and a min value and the max value of the current node's data
//     if (node.left && !validate(node.left, min, node.data)) {
//         // return false as it's not a binary tree
//         return false
//     }
//     // if there's a node to the right AND if calling validate with that right node and a max value and the min value of the current node's data
//     if (node.right && !validate(node.right, node.data, max)) {
//         // return false as it's not a binary tree
//         return false
//     }
//     // if it recurses fully and gets past both if statements, return true as it is a binary tree
//     return true
// }

// solved refactored
// set a 'min'and 'max' variable
function validate(node, min, max) {
    // if node is a leaf ie has no children ie is at the bottom, return true
    if (node === null) return true
    // if node is less than min or greater than or equal to max, return false
    if (node.data < min || node.data >= max) return false
    // recurse through all left-sides of nodes and if invalid, return false
    if (!validate(node.left, min, node.data)) return false
    // recurse through all right-sides of nodes and if invalid, return false
    if (!validate(node.right, node.data, max)) return false
    // if successfully escapes all recursive validations, return true
    return true
}

module.exports = validate;
