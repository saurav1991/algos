'use strict';

var Graph = require('./graph');

var BFS = function (graph, s) {
	var that = {};
	var queue = [];
	var marked = [];
	var edgeTo = [];

	queue.push(s);
	marked[s] = true;

	while(queue.length !== 0) {
		var v = queue.shift();
		graph.neighbours(v).forEach(function (w) {
			if (!marked[w])
			{
				marked[w] = true;
				edgeTo[w] = v;
				queue.push(w);
			}
		});
	}

	function hasPathTo (v) {
		return marked[v];
	};

	that.pathTo = function (v) {
		var path = [];
		if (!hasPathTo(v)) {
			return undefined;
		}
		for (var x = v; x != s; x = edgeTo[x]) {
			path.push(x);
		}
		return path;
	};

	that.hasPathTo = hasPathTo;

	return that;
};

var g = Graph(7);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(0, 6);
g.addEdge(0, 5);
g.addEdge(5, 3);
g.addEdge(5, 4);
g.addEdge(3, 4);
g.addEdge(4, 6);

console.log(g.neighbours(0));
console.log(g.degree(5));

var bfs = BFS(g, 0);
console.log(bfs.hasPathTo(4));
console.log(bfs.pathTo(3));
