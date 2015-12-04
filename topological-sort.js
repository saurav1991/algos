'use strict';

var Graph = require('./graph');

var TopoSort = function (graph) {
	var marked = [];
	var reversePost = [];

	for (var v = 0; v < graph.vertices; v++) {
		if (!marked[v]) {
			dfs(v);
		}
	}

	function dfs(v) {
		marked[v] = true;
		graph.neighbours(v).forEach(function (w) {
			if (!marked[w]) {
				dfs(w);
			}
		});
		reversePost.push(v);
	}

	return reversePost;
};

var g = Graph(7);
g.addEdge(0, 1);
g.addEdge(0, 5);
g.addEdge(0, 2);
g.addEdge(5, 2);
g.addEdge(1, 4);
g.addEdge(3, 2);
g.addEdge(3, 5);
g.addEdge(3, 4);
g.addEdge(3, 6);
g.addEdge(6, 4);
g.addEdge(6, 0);

console.log(TopoSort(g).reverse());