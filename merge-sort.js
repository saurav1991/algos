'use strict';

var sort = function(arr, less) {

	function merge (arr, aux, lo, mid, hi) {
		var i, j, k;
		for (k = lo; k <= hi; k++) {
			aux[k] = arr[k];
		}

		i = lo; j = mid + 1;

		for (k = lo; k <= hi; k++) {
			if (i > mid) {
				arr[k] = aux[j++];
			} else if (j > hi) {
				arr[k] = aux[i++];
			} else if (less(aux[j], aux[i])) {
				arr[k] = aux[j++];
			} else {
				arr[k] = aux[i++];
			}
		}
		console.log('arr ', arr);
	}

	function innerSort (arr, aux, lo, hi) {
		var mid = lo + Math.floor((hi - lo) / 2);

		if (hi <= lo) {
			return;
		}
		innerSort(arr, aux, lo, mid);
		innerSort(arr, aux, mid + 1, hi);
		if (less(arr[mid], arr[mid + 1])) return;
		merge(arr, aux, lo, mid, hi);
	}

	var aux = [];

	innerSort(arr, aux, 0, arr.length - 1);
};

var arr = [1, 5, 3, 7, 2, 9, 4, 6];
//var arr = [1, 3, 2, 4];
sort(arr, function (a, b) {
	return a < b ? true : false;
});

console.log(arr);