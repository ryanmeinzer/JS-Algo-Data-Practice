class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insert(element) {
        // push value on to heap
        this.values.push(element)
        // bubble up to correct position
        this.bubbleUp()
    }

    bubbleUp() {
        // create 'index' var that's the length of values - 1
        let index = this.values.length - 1
        // create 'element' const that's the element
        const element = this.values[index]
        // loop as long as index is greater than 0
        while (index > 0) {
            // create 'parentIndex' var that's floor of (index - 1) / 2
            let parentIndex = Math.floor((index - 1) / 2)
            // create 'parent' var
            let parent = this.values[parentIndex]
            if (element <= parent) break
            // swap value at parentIndex with value at index
            this.values[parentIndex] = element
            this.values[index] = parent
            // update index to be parentIndex
            index = parentIndex
        }
    }

}

let heap = new MaxBinaryHeap()
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
// anything