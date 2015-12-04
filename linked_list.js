'use strict';

var Node = function (val) {
	var that = {};
	that.val = val;
	that.next;
	return that;
}

var LinkedList = function () {

	var that = {};
	that.list = undefined;

	that.insert = function (val) {
		var node = Node(val);
		if (that.list === undefined) {
			that.list = node;
		} else {
			node.next = that.list;
			that.list = node;
		}
	};

	var search = function (val) {
		if (that.list === undefined) {
			return undefined;
		}
		var node =  that.list;
		while (node.next) {
			if (val === node.val) {
				return node;
			}
			node = node.next;
		}
		return undefined;
	};

	that.traverse = function () {
		var elements = []
		if (that.list === undefined) {
			return elements;
		}
		var node = that.list;
		while (node.next) {
			elements.push(node.val);
			node = node.next;
		}
		elements.push(node.val);
		return elements;
	};

	function predecessor_list(node, val) {
		if (node === undefined) {
			return undefined;
		}
		if (node.next.val === val) {
			return node;
		} else {
			return predecessor_list(node.next, val);
		}
	}

	that.del = function (val) {

		var prev;
		if (that.list === undefined) {
			return undefined;
		}
		var pred = predecessor_list(that.list, val);
		var node = search(val);
		
		if (node !== undefined) {
			if (pred !== undefined) {
				pred.next = node.next;
			} else {
				that.list = node.next;
			}
		}
	}
	that.search = search;
	return that;
}

var list = LinkedList();
list.insert(1);
list.insert("a");
list.insert("b");
list.insert(4);
list.insert(5);

console.log(list.search(4));
console.log(list.traverse());
console.log(list.del("b"));
console.log(list.traverse());