class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        // solved using iteration
        // create new node
        let newNode = new Node(value)
        // if there isn't a root, make new node the root
        if (!this.root) {
            this.root = newNode
            return this
        }
        let current = this.root
        // loop indefinitely until return/insert
        while (true) {
            // handle duplicates
            if (newNode.value === current.value) return undefined
            // if new node is less than root
            if (newNode.value < current.value) {
                // if there isn't a node to the left, make new node left
                if (!current.left) {
                    current.left = newNode
                    return this
                }
                current = current.left
                // repeat for right side
            } else {
                // if there isn't a node to the left, make new node left
                if (!current.right) {
                    current.right = newNode
                    return this
                }
                current = current.right
            }
        }
    }
}

let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(2)
tree.insert(13)
tree.insert(11)
tree.insert(16)
tree.insert(7)
// tree.root = new Node(10)
// tree.root.right = new Node(15)
// tree.root.left = new Node(7)
// tree.root.left.right = new Node(9)
// anything