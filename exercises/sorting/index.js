// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    // solve with nested loops
    // (find largest element of array and drag it to right-hand side)
    // for all i elements (outer for loop)
    for (let i = 0; i < arr.length; i++) {
        // for every j step/element with a shrinking element size set (inner for loop), restrict window with i and subtracting 1 as the array length is always offset by one based off the 0-index of the array and I want to make sure we handle the first iteration case where i = 0 so that I don't iterate out of bounds
        for (let j = 0; j < (arr.length - i - 1); j++) {
            // if the element at j is greater than j + 1
            if (arr[j] > arr[j + 1]) {
                // swap elements at j and j + 1
                let lesser = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = lesser
            }
        }
    }
    // return bubble-sorted array
    return arr
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
