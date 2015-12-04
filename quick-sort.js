'use strict';

var sort = function (arr, less) {

	function partition(arr, lo, hi) {
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
	}

	function innerSort(arr, lo, hi) {
		if (hi <= lo)	return;
		var j = partition(arr, lo, hi);
		innerSort(arr, lo, j - 1);
		innerSort(arr, j + 1, hi);
	}

	innerSort(arr, 0, arr.length - 1);
};

var arr = [1, 5, 3, 7, 2, 9, 4, 6];
//var arr = [1, 3, 2, 4];
sort(arr, function (a, b) {
	return a < b ? true : false;
});

console.log(arr);