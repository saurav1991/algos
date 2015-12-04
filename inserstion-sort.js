'use strict';

var sort = function (arr, compare) {

	var i, j;
	for (i = 0; i < arr.length; i++) {
		for (j = i; j > 0; j--) {
			if (compare(arr[j - 1], arr[j]) > 0) {
				var temp = arr[j];
				arr[j] = arr[j - 1];
				arr[j - 1] = temp;
			}
		}
	}
};

var arr = [1, 5, 3, 7, 2, 9, 4, 6];
sort(arr, function (a, b) {
	return a - b;
});

console.log(arr);