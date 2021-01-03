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
    // 0(log n) but not necessarily guaranteed
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
    // 0(log n) but not necessarily guaranteed
    contains(value) {
        if (!this.root) return false
        let current = this.root
        let found = false
        while (current && !found) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                return true
            }
        }
        return false
    }
    BFS() {
        let node = this.root
        let visited = []
        let queue = []
        // add to end of queue, starting with root node
        queue.push(node)
        // while there's anything in the queue
        while (queue.length) {
            // take node from beginning of queue
            node = queue.shift()
            // push node into visited
            visited.push(node)
            // if node has a left node, add it to queue
            if (node.left) queue.push(node.left)
            // if node has a right node, add it to queue
            if (node.right) queue.push(node.right)
        }
        return visited
    }
    // traverse by node then left then right (top-down-left-right)
    DFSPreOrder() {
        let visited = []
        // create helper function that accepts a node
        function traverse(node) {
            // push node into visited
            visited.push(node)
            // if node has a left node, call helper fn with it
            if (node.left) traverse(node.left)
            // if node has a right node, call helper fn with it
            if (node.right) traverse(node.right)
        }
        // invoke helper with root
        traverse(this.root)
        // return visited
        return visited
    }
    // traverse by children then parent (bottom-up-left-right)
    DFSPostOrder() {
        let visited = []
        // create helper function that accepts a node
        function traverse(node) {
            // if node has a left node, call helper fn with it
            if (node.left) traverse(node.left)
            // if node has a right node, call helper fn with it
            if (node.right) traverse(node.right)
            // push node into visited
            visited.push(node)
        }
        // invoke helper with root
        traverse(this.root)
        // return visited
        return visited
    }
    // traverse by left children then parent then right (left-bottom-up-right)
    DFSInOrder() {
        let visited = []
        // create helper function that accepts a node
        function traverse(node) {
            // if node has a left node, call helper fn with it
            if (node.left) traverse(node.left)
            // push node into visited
            visited.push(node)
            // if node has a right node, call helper fn with it
            if (node.right) traverse(node.right)
        }
        // invoke helper with root
        traverse(this.root)
        // return visited
        return visited
    }

}

let tree = new BinarySearchTree()
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
// tree.root = new Node(10)
// tree.root.right = new Node(15)
// tree.root.left = new Node(7)
// tree.root.left.right = new Node(9)
// anything