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
}

let g = new Graph()
g.addVertex("Dallas")
g.addVertex("Tokyo")
g.addVertex("Aspen")
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");
// breakpoint