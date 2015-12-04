'use strict';

var Graph = require('./graph');

var dfsPaths = function (graph, s) {
	var that = {};
	var marked = [];
	var edgeTo = [];

	for (var i = 0; i < graph.vertices; i++) {
		marked[i] = false;
	}

	dfs(graph, s);

	function dfs(graph, v)	{
		marked[v] = true;
		graph.neighbours(v).forEach(function (w) {
			if (!marked[w]) {
				marked[w] = true;
				edgeTo[w] = v;
				dfs(graph, w);
			}
		});
	}

	var hasPathTo = function (v) {
		return marked[v];
	}

	that.hasPathTo = hasPathTo;

	that.pathTo = function (v) {
		var path = [];
		if (!hasPathTo(v)) {
			return undefined;
		}
		for (var x = v; x != s; x = edgeTo[x]) {
			path.push(x);
		}
		return path;
	}
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

var dfs = dfsPaths(g, 0);
console.log(dfs.hasPathTo(4));
console.log(dfs.pathTo(2));