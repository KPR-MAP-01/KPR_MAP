
export class PathfindingEngine {
  private graph: { [key: string]: { [key: string]: number } };

  constructor(graph: { [key: string]: { [key: string]: number } }) {
    this.graph = graph;
  }

  findShortestPath(start: string, end: string): string[] {
    const distances: { [key: string]: number } = {};
    const previous: { [key: string]: string | null } = {};
    const unvisited = new Set<string>();

    // Initialize distances
    for (const node in this.graph) {
      distances[node] = node === start ? 0 : Infinity;
      previous[node] = null;
      unvisited.add(node);
    }

    while (unvisited.size > 0) {
      // Find unvisited node with minimum distance
      let current = '';
      let minDistance = Infinity;
      
      for (const node of unvisited) {
        if (distances[node] < minDistance) {
          minDistance = distances[node];
          current = node;
        }
      }

      if (current === end) break;
      if (minDistance === Infinity) break;

      unvisited.delete(current);

      // Only update distances to nodes that are explicitly connected in the graph
      if (this.graph[current]) {
        for (const neighbor in this.graph[current]) {
          if (unvisited.has(neighbor)) {
            const newDistance = distances[current] + this.graph[current][neighbor];
            if (newDistance < distances[neighbor]) {
              distances[neighbor] = newDistance;
              previous[neighbor] = current;
            }
          }
        }
      }
    }

    // Reconstruct path - ensure it only includes valid connections
    const path: string[] = [];
    let current = end;
    
    while (current !== null) {
      path.unshift(current);
      current = previous[current];
    }

    // Verify the path only uses valid graph connections
    if (path.length > 1 && path[0] === start) {
      for (let i = 0; i < path.length - 1; i++) {
        const currentNode = path[i];
        const nextNode = path[i + 1];
        
        // Check if there's a direct connection in the graph
        if (!this.graph[currentNode] || !this.graph[currentNode][nextNode]) {
          console.warn(`Invalid path segment: ${currentNode} -> ${nextNode}`);
          return []; // Return empty path if any segment is invalid
        }
      }
      return path;
    }

    return [];
  }

  // Enhanced method to get detailed path strictly following corridors
  getDetailedPath(waypoints: { [key: string]: { x: number, y: number } }, path: string[]): { x: number, y: number }[] {
    if (path.length === 0) return [];

    const detailedPath: { x: number, y: number }[] = [];
    
    // Only add waypoints that exist in the path - no interpolation
    for (const nodeName of path) {
      if (waypoints[nodeName]) {
        detailedPath.push(waypoints[nodeName]);
      }
    }
    
    return detailedPath;
  }

  // Method to validate if a path follows only predefined connections
  validatePath(path: string[]): boolean {
    if (path.length <= 1) return true;
    
    for (let i = 0; i < path.length - 1; i++) {
      const current = path[i];
      const next = path[i + 1];
      
      if (!this.graph[current] || !this.graph[current][next]) {
        return false;
      }
    }
    
    return true;
  }
}
