'use strict';

var nodeobj = function () {
	var that = {};
	that.ch;
	that.val;
	that.left;
	that.mid;
	that.right;
	return that;
};

var tst = function () {

	var that = {};
	var root;

	that.put = function (key, val) {
		key = key.toLowerCase();
		root = put(root, key, val, 0);
	};

	function put (node, key, val, d) {

		if (node === undefined) {
			node = nodeobj();
			node.ch = key.charAt(d);
		}
		if (key.charAt(d) < node.ch) {
			node.left = put(node.left, key, val, d);
		} else if (key.charAt(d) > node.ch) {
			node.right = put(node.right, key, val, d);
		} else if (d < key.length - 1) {
			node.mid = put(node.mid, key, val, d + 1);
		} else {
			node.val = val;
		}
		return node;
	}

	that.get = function (key) {
		key = key.toLowerCase();
		var node = get(root, key, 0);

		if (node) {
			return node.val;
		}
		return undefined;
	};

	function get (node, key, d) {

		if (node === undefined) {
			return undefined;
		}
		if (key.charAt(d) < node.ch) {
			return get(node.left, key, d);
		} else if (key.charAt(d) > node.ch) {
			return get(node.right, key, d);
		} else if (d < key.length - 1) {
			return get(node.mid, key, d + 1);
		} else {
			return node;
		}
	}

	that.keys = function () {
		var keys = [];
		collect(root, "", keys);
		return keys;
	};

	function collect(node, prefix, queue) {
		if (node === undefined) {
			return;
		}
		collect(node.left, prefix, queue);
		if (node.val !== undefined) {
			queue.push(prefix + node.ch);
		}
		collect(node.mid, prefix + node.ch, queue);
		collect(node.right, prefix, queue);
	};

	that.keysWithPrefix = function (prefix) {
		var keys = [];
		var node = get(root, prefix, 0);
		if (node === undefined) {
			return keys;
		}
		if (node.val !== undefined) {
			keys.push(prefix);
		}
		collect(node.mid, prefix, keys);
		return keys;
	};

	that.longestPrefixOf = function (query) {
		var length = search(root, query, 0, 0);
		return query.substr(0, length);
	};

	function search(node, query, d, length) {
		if (node === undefined) {
			return length;
		}
		if (node.val !== undefined) {
			length = d;
		}
		if (d === query.length) {
			return length;
		}
		if (query.charAt(d) < node.val) {
			return search(node.left, query, d, length);
		} else if (query.charAt(d) > node.val) {
			return search(node.right, query, d, length);
		} else if (d < query.length - 1) {
			return search(node.mid, query, d + 1, length);
		} else {
			return length + 1;
		}
	};

	return that;
}();

tst.put("she", 0);
tst.put("sells", 1);
tst.put('sea', 2);
tst.put('shells', 3);
tst.put('by', 4);
tst.put('the', 5);
tst.put('sea', 6);
tst.put('shore', 7);

console.log(tst.get('she'));
console.log(tst.get('sells'));
console.log(tst.get('sea'));
console.log(tst.get('shells'));
console.log(tst.get('by'));
console.log(tst.get('the'));
console.log(tst.get('sea'));
console.log(tst.get('shore'));
console.log(tst.get('shell'));

console.log(tst.keys());
console.log('***********');
console.log(tst.keysWithPrefix('sh'));
console.log(tst.longestPrefixOf('shellsort'));