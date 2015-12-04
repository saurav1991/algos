'use strict';

var util = require('util');

var nodeobj = function () {
	
	var that = {};
	that.val = undefined;
	that.next = [];
	return that;
};

var trie = function () {

	var that = {};
	var root = nodeobj();
	var R = 256;

	that.put = function (key, value) {
		key = key.toLowerCase();
		root = put(root, key, value, 0)
	};

	function put(node, key, val, d) {
		if (!node) {
			node = nodeobj();
		}
		if (d === key.length) {
			node.val = val;
			return node;
		}
		var c = key.charCodeAt(d);
		node.next[c] = put(node.next[c], key, val, d + 1);
		return node;
	}

	that.get = function (key) {

		var node = get(root, key, 0);
		if (node) {
			return node.val;
		}
		return "undefined";
	};

	function get(node, key, d) {
		if (node === undefined) {
			return undefined;
		}
		if (d === key.length) {
			return node;
		}
		var c = key.charCodeAt(d);
		return get(node.next[c], key, d + 1);
	}


	function del (node, key, d) {

		var c = key.charCodeAt(d);
		if (node === undefined) {
			return undefined;
		}
		if (d === key.length) {
			if (node.val) {
				node.val = undefined;
				return node;
			}
		} else {
			node.next[c] = del(node.next[c], key, d + 1);
		}
		if (node.val !== undefined) {
			return node;
		}
		if (node.next.length !== 0) {
			return node;
		}
		return undefined;
	}

	that.del = function (key) {

		del(root, key, 0)
	};

	that.keys = function () {
		var keys = [];
		collect(root, "", keys);
		return keys;
	};

	function collect(node, prefix, queue) {
		if (!node) {
			return;
		}
		if (node.val !== undefined) {
			queue.push(prefix);
		}

		for (var c = 0; c < R; c++) {
			collect(node.next[c], prefix + String.fromCharCode(c), queue);
		}
	};

	that.keysWithPrefix = function (prefix) {
		var keys = [];
		var node = get(root, prefix, 0);
		collect(node, prefix, keys);
		return keys;
	};

	that.longestPrefixOf = function (query) {
		var length = search(root, query, 0, 0);
		console.log(length);
		return query.substr(0, length);
	};

	function search(node, query, d, length) {
		var c = query.charCodeAt(d);
		if (node === undefined) {
			return length;
		}
		if (node.val !== undefined) {
			length = d;
		}
		if (d === query.length) {
			return length;
		}
		return search(node.next[c], query, d + 1, length);
	}

	return that;
}();

trie.put("she", 0);
trie.put("sells", 1);
trie.put('sea', 2);
trie.put('shells', 3);
trie.put('on', 4);
trie.put('the', 5);
trie.put('sea', 6);
trie.put('shore', 7);

trie.del('on');

//console.log(util.inspect(trie.root, {depth : null}));
console.log(trie.get('she'));
console.log(trie.get('sells'));
console.log(trie.get('sea'));
console.log(trie.get('shells'));
console.log(trie.get('on'));
console.log(trie.get('the'));
console.log(trie.get('sea'));
console.log(trie.get('shore'));
console.log(trie.get('shell'));
console.log(trie.keys());
console.log(trie.keysWithPrefix('sh'));
console.log(trie.longestPrefixOf('shellsort'));
