// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

// note - a Binary Search Tree's left-child is less than and right-child is greater than the parent. A Binary Tree simply has two children but without value parameters. 

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }

    insert(data) {
        // solved using recursion
        // call insert on root node
        // if the data is less than the root node AND if there's a left node
        if (data < this.data && this.left) {
            // delegate to and pass in data to the left 
            return this.left.insert(data)
        } else if (data < this.data) {
            // if not AND if there's not a left node
            // create new node and assign data to it
            this.left = new Node(data)
            // repeat for right side only opposite
        } else if (data > this.data && this.right) {
            // delegate to and pass in data to the right
            return this.right.insert(data)
        } else if (data > this.data) {
            // if not AND if there's not a right node
            // create new node and assign data to it
            this.right = new Node(data)
        }
    }

    contains(data) {
        // if node is equal to data
        if (this.data === data) {
            // return node
            return this
        }
        // if data is less than node and there is a left node
        if (data < this.data && this.left) {
            // go left and see if it's equal through recursion
            return this.left.contains(data)
            // else if data is greater than node
        } else if (data > this.data && this.right) {
            // go right and see if it's equal through recursion
            return this.right.contains(data)
        }
        // if cannot find value, return null
        return null
    }
}

module.exports = Node;
