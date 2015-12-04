'use strict';

var MaxPQ = function (capacity) {
	var that = {};
	var pq = [];
	var N = 0;
	pq[0] = 0;

	that.insert = function (val) {
		pq[++N] = val;
		swim(N);
	};

	function swim(k) {
		while (k > 1 && less(Math.floor(k/2), k)) {
			exch(k, Math.floor(k / 2));
			k = Math.floor(k / 2);
		}
	}

	that.delMax = function() {
		var max = pq[1];
		exch(1, N--);
		sink(1);
		pq.pop();
		return max;
	};

	function sink(k) {
		while (2 * k <= N) {
			var j = 2 * k;
			if (j < N && less(j, j + 1))	j++;
			if (!less(k, j))	break;
			exch(j, k);
			k = j;
		}
	}

	function less(j, k) {
		return (pq[j] < pq[k] ? true : false);
	}

	function exch(j, k) {
		var temp = pq[k];
		pq[k] = pq[j];
		pq[j] = temp;
	}

	that.pq = pq;
	return that;
};

var mpq = MaxPQ(6);
mpq.insert(2);
mpq.insert(3);
mpq.insert(7);
mpq.insert(321);
mpq.insert(4);
mpq.insert(9);
console.log(mpq.delMax());

console.log(mpq.pq);