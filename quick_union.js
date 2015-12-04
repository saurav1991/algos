var QuickUnion = function (N) {
	
	var that = {};
	var id = [];
	var i;
	for (i = 0; i < N; i++) {
		id[i] = i;
	}

	function root(i) {
		while (i !== id[i]) {
			id[i] = id[id[i]];
			i = id[i];
		}
		return i;
	}

	that.connected = function (p, q) {
		return root(p) === root(q);
	};

	that.union = function (p, q) {
		var i = root(p);
		var j = root(q);
		id[i] = j;
	};

	return that;
};

var qu = QuickUnion(6);
qu.union(2, 3);
qu.union(1, 4);
qu.union(3, 1);

console.log(qu.connected(1, 4));
console.log(qu.connected(1, 2));
console.log(qu.connected(1, 5));
