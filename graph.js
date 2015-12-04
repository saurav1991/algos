'use strict';

var Graph = function (V) {

	var that = {};
	that.vertices = V;
	var adj = [];

	for (var i = 0; i < V; i++) {
		adj[i] = [];
	}

	that.addEdge = function (v, w) {
		adj[v].push(w);
	};

	that.neighbours = function (v) {
		return adj[v];
	};

	that.degree = function (v) {
		return adj[v].length;	
	};

	return that;
};

module.exports = Graph;

