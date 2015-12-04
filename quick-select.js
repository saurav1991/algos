'use strict';

var select = function (arr, k) {

	function swap (a, b) {
		var temp = a;
		a = b;
		b = temp;
	}

	function less (a, b) {
		return (a < b) ? true : false;
	}

	function partition(arr, lo, hi) {

		var i = lo, j = hi + 1;

		while (true) {
			while (less(arr[++i], arr[lo])) {
				if (i === hi)	break;
			}
			while (less(arr[lo], arr[--j])) {
				if (j === lo)	break;
			}

			if (i >= j)		break;
			swap(arr[i], arr[j]);
		}
		swap(arr[lo], arr[j]);
		return j;
	}

/*	function partition(arr, lo, hi) {
		var i = lo;
		var j = hi + 1;

		while (true) {
			while(less(arr[++i], arr[lo])) {
				if (i === hi)	break;
			}
			while(less(arr[lo], arr[--j])) {
				if (j === lo)	break;
			}
			if (i >= j)		break;
			var temp = arr[j];
			arr[j] = arr[i];
			arr[i] = temp;
		}
		var temp1 = arr[lo];
		arr[lo] = arr[j];
		arr[j] = temp1;
		return j;
	}*/

	var lo = 0, hi = arr.length - 1;
	while (hi > lo) {
		var j = partition(arr, lo, hi);
		if (j < k) {
			lo = j + 1;
		} else if (j > k) {
			hi = j - 1;
		} else {
			return arr[k];
		}
	}
	//return arr[k];
};

var arr = [1, 5, 3, 7, 2, 9, 4, 6];
//var arr = [1, 3, 2, 4];
console.log(select(arr, 4));