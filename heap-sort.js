'use strict';

var heapSort = function (str) {
	str = str.split("");
	var heap = [];
	heap.push(0);
	str.forEach(function (ch) {
		heap.push(ch);
	});

	var N = heap.length - 1;
	for (var k = Math.floor(N / 2); k >= 1; k--) {
		sink(k);
	}
	console.log("After sinking ", heap);
	while (N > 1) {
		exch(1, N--);
		console.log("After exchange ", heap);
		sink(1);
		console.log("After sinking top ele ", heap);
	}
	return heap;

	function sink(k) {
		while (2 * k <= N) {
			var j = 2 * k;
			if (j < N && less(j, j + 1))	j++;
			if (!less(k, j))	break;
			exch(k, j);
			k = j;
		}
	}

	function exch(j, k) {
		var temp = heap[j];
		heap[j] = heap[k];
		heap[k] = temp;
	}

	function less(j, k) {
		return heap[j] < heap[k] ? true : false;
	}
};

console.log(heapSort("SORTEXAMPLE"));