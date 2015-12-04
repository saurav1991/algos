'use strict';

var Graph = require('./graph');

var CC = function (graph) {
	var that = {};
	var marked = [];
	var id = [];
	var count = 0;

	for (var v = 0; v < graph.vertices; v++) {
		if (!marked[v]) {
			dfs(graph, v);
			count += 1;
		}
	}

	function dfs(graph, v) {
		marked[v] = true;
		id[v] = count;
		graph.neighbours(v).forEach(function (w) {
			if (!marked[w]) {
				dfs(graph, w);
			}
		});
	}

	that.id = function (v) {
		return id[v];
	};

	return that;
};

var g = Graph(13);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(0, 6);
g.addEdge(0, 5);
g.addEdge(5, 3);
g.addEdge(5, 4);
g.addEdge(3, 4);
g.addEdge(4, 6);
g.addEdge(7, 8);
g.addEdge(9, 10);
g.addEdge(9, 11);
g.addEdge(9, 12);

/*console.log(g.neighbours(0));
console.log(g.degree(5));*/

var cc = CC(g);
console.log(cc.id(4));
console.log(cc.id(8));
console.log(cc.id(11));