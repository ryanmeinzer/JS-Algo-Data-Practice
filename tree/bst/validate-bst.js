/*
Validate that a Binary tree is a Binary Search Tree

                 3
            2           5
        1       4     
Given a node, validate BST ensuring that every node's L and R childs is less than the parent's value and that every R child is greater than parent (as shown above)
Solve / Psuedocode - 
    get node, set a min and a max variable
    if node is null, return true
    if the node is < or > max, return false
    recurse through all L nodes if invalid, return F
    same for R
    if passes all recursions, return true
*/

// create BST
class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

// create root node
let node = new Node(3)
let rootLeft = new Node(2)
let rootRight = new Node(5)
node.left = rootLeft
node.right = rootRight
node.left.left = new Node(1)
node.left.right = new Node(4)

// let min = 0
let min = -Infinity
let max = Infinity
// let max = 10000

// validate if BST
function validate(node, min, max) {
    if (node === null) return true
    if (node.data < min || node.data >= max) return false
    if (!validate(node.left, min, node.data)) return false
    if (!validate(node.right, node.data, max)) return false
    console.log('it is a BST!')
    return true
}

validate(node, min, max)