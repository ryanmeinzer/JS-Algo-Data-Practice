// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data
        this.children = []
    }

    add(data){
        this.children.push(new Node(data))
    }

    remove(data){
        this.children = this.children.filter(node => {
            return node.data !== data
        })
        // or:
        // this.children = this.children.filter(node => {
        //     node !== data
        // })
    }

}



class Tree {
    // initialize root property of tree to be null
    constructor() {
        this.root = null
    }

    traverseBF(fn){
        // create an empty array
        // take root node and stick it at the start of array
        let workingArray = [this.root]
        // unnecessary: 
        // workingArray.push(this.root)
        // iterate through array
        // while the array has elements in the array
        while (workingArray.length) {
            // remove the first element/node of the array
            let node = workingArray.shift()
            // remove all children from that node's children array then add them to the END of the array
            // using spread operator to take every element from node's children array and push into the END of the array
            workingArray.push(...node.children)
            // or:
            // for (let child of node.children) {
            //     workingArray.push(child)
            // }
            // call function of traverse method with that node
            fn(node)
            // console.log(node.data)
            // essentially, throw that node away (was done prior in first step of while loop)
        }
    }

    traverseDF(fn){
        // create an empty array
        // take root node and stick it at the start of array
        let workingArray = [this.root]
        // unnecessary: 
        // workingArray.push(this.root)
        // iterate through array
        // while the array has elements in the array
        while (workingArray.length) {
            // remove the first element/node of the array
            let node = workingArray.shift()
            // remove all children from that node's children array then add them to the START of the array
            // using spread operator to take every element from node's children array and push into the START of the array
            workingArray.unshift(...node.children)
            // or:
            // for (let child of node.children) {
            //     workingArray.push(child)
            // }
            // call function of traverse method with that node
            fn(node)
            // essentially, throw that node away (was done prior in first step of while loop)
        }
    }

}

module.exports = { Tree, Node };
