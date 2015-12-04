'use strict';

var BST = function () {
	function Node(key, val) {
		var that = {};
		that.key = key;
		that.val = val;
		that.left;
		that.right;
		that.count;
		return that;
	}
	var that = {};
	that.root;
	that.get = function (key) {
		var node = root;
		while (node != null) {
			if (key < node.key) {
				node = node.left;
			} else if (key > node.key) {
				node = node.right;
			} else {
				return node.val;
			}
		}
		return undefined;
	};

	function put(node, key, val) {
		if (node === undefined)		return Node(key, val);
		if (key < node.key) {
			node.left = put(node.left, key, val);
		} else if (key > node.key) {
			node.right = put(node.right, key, val);
		} else {
			node.val = val;
			node.count = 1 + size(node.left) + size(node.right);
		}
		return node;
	}
	that.put = function (key, val) {
		that.root = put(that.root, key, val);
	};

	function traverse(node) {
		if (node === undefined)		return;
		traverse(node.left);
		console.log(node.key);
		traverse(node.right);
	};

	that.floor = function (key) {
		var node = floor(that.root, key);
		if (node === undefined)	return undefined;
		return node.key;
	};

	function floor(node, key) {
		if (node === undefined)	return undefined;
		if (key === node.key)	return node;
		if (key < node.key)	return floor(node.left, key);
		var t = floor(node.right, key);
		if (t !== undefined)	return t;
		else	return node;
	}

	that.size = function () {
		return size(that.root);
	};

	function size(node) {
		if (node === undefined)	return 0;
		return node.count;
	}

	that.rank = function (key) {
		return rank(that.root, key);
	};

	function rank(node, key) {
		if (node === undefined)	return 0;
		if (key < node.key)	return rank(node.left, key);
		else if (key > node.key) return 1 + size(node.left) + rank(node.right, key);
		else	return size(node.left);
	}

	that.del = function (key) {
		that.root = del(that.root, key);
	}

	function min(node) {
		if (node.left === undefined)	return node;
		else	return min(node.left);
	}

	function delMin(node) {
		if (node.left === undefined)	return node.right;
		node.left = delMin(node.left);
		node.count = 1 + size(node.left) + size(node.right);
		return node;
	}

	function del(node, key) {
		if (node === undefined)	return undefined;
		if (key < node.key)	node.left = del(node.left, key);
		else if (key > node.key)	node.right = del(node.right, key);
		else {
			if (node.left === undefined)	return node.right;
			if (node.right === undefined)	return node.left;

			var t = node;
			node = min(t.right);
			node.left = t.left;
			node.right = delMin(t.right);
		}
		node.count = 1 + size(node.left) + size(node.right);
		return node;
	}
	that.traverse = traverse;
	return that;
};

var bst = BST();
bst.put('B', 1);
bst.put('I', 2);
bst.put('N', 3);
bst.put('A', 4);
bst.put('R', 5);
bst.put('Y', 6);
bst.put('S', 7);
bst.put('E', 8);
bst.put('A', 9);
bst.put('R', 10);
bst.put('C', 11);
bst.put('H', 12);

bst.traverse(bst.root);
console.log(bst.floor("G"));
bst.del("N");
console.log("AFTER DELETION");
bst.traverse(bst.root);

