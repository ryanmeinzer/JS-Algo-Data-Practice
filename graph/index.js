// undirected graph for adjancency list
class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    // accepts name of vertex
    addVertex(vertex) {
        // add a key to the adjancency list with the name of the vertex and set it's value to an empty array
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    // accepts two edges
    addEdge(vertex1, vertex2) {
        // find the key of vertex1 and push vertex2 to the array
        this.adjacencyList[vertex1].push(vertex2)
        // find the key of vertex2 and push vertex1 to the array
        this.adjacencyList[vertex2].push(vertex1)
    }
    // accepts name of vertex
    removeVertext(vertex) {
        // loop through adjacencyList
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop()
            // removeEdge for each vertex and all respective vertexes
            this.removeEdge(vertex, adjacentVertex);
        }
        // delete vertex's key
        delete this.adjacencyList[vertex]
    }
    removeEdge(vertex1, vertex2) {
        // find the key of vertex1 and push vertex2 to the array
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
        // find the key of vertex2 and push vertex1 to the array
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
    }
    // accept a starting node
    DFRecursive(start) {
        // create 'result' array to store the end result
        const result = []
        // create 'visited' object to store all vertexes visited
        const visited = {}
        // preserve context of adjacencyList for helper function
        const adjacencyList = this.adjacencyList
        // create a DFS helper function that accepts a vertex
        function DFS(vertex) {
            // if the vertex is empty, return null
            if (!vertex) return null
            // place vertex into visited object
            visited[vertex] = true
            // push vertex into result array
            result.push(vertex)
            // loop over all values in adjacencyList for that vertex
            adjacencyList[vertex].forEach(neighbor => {
                // if any values haven't been visited, recursively invoke the helper function with that vertex
                if (!visited[neighbor]) {
                    return DFS(neighbor)
                }
            })
        }
        // invoke DFS helper function
        DFS(start)
        // console.log(result)
        return result
    }
    // accept a starting node (same results as DFRecursive, just in different order)
    DFIterative(start) {
        // create 'stack' to keep track of vertices, adding start vertex
        const stack = [start]
        // create 'result' array to store the end result
        const result = []
        // create 'visited' object to store all vertices visited
        const visited = {}
        // mark start vertex as visited
        visited[start] = true
        // while the stack has anything in it
        while (stack.length) {
            // pop the next vertex from the stack
            let currentVertex = stack.pop()
            // add to result
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    // mark as visited
                    visited[neighbor] = true
                    // add neighbor to stack
                    stack.push(neighbor)
                }
            })
        }
        // console.log(visited)
        // console.log(result)
        return result
    }
    BF(start) {
        // accept a starting node
        // create a queue and place starting node vertex in it
        const queue = [start]
        // create 'result' array to store the end result
        const result = []
        // create 'visited' object to store all vertices visited
        const visited = {}
        // mark start vertex as visited
        visited[start] = true
        // while the queue has anything in it
        while (queue.length) {
            // remove the first vertex from the queue and push it into visited
            let currentVertex = queue.shift()
            // add to result
            result.push(currentVertex)
            // loop over each vertex of adjacency list for the visited vertex
            this.adjacencyList[currentVertex].forEach(neighbor => {
                // if it's not been visited
                if (!visited[neighbor]) {
                    // mark as visited
                    visited[neighbor] = true
                    // enqueue the virtex
                    queue.push(neighbor)
                }
            })
        }
        // console.log(visited)
        // console.log(result)
        return result
    }
}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

g.DFRecursive("A")

g.DFIterative("A")

g.BF("A")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// let g = new Graph()
// g.addVertex("Dallas")
// g.addVertex("Tokyo")
// g.addVertex("Aspen")
// g.addVertex("Los Angeles")
// g.addVertex("Hong Kong")
// g.addEdge("Dallas", "Tokyo")
// g.addEdge("Dallas", "Aspen")
// g.addEdge("Hong Kong", "Tokyo")
// g.addEdge("Hong Kong", "Dallas")
// g.addEdge("Los Angeles", "Hong Kong")
// g.addEdge("Los Angeles", "Aspen")
// breakpoint