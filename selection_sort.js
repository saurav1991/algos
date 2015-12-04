'use strict';

var sort = function (arr, compare) {
	var i, j, min;
	for (i = 0; i < arr.length; i++) {
		min = i;
		for (j = i + 1; j < arr.length; j++) {
			if (compare(arr[min], arr[j]) > 0) {
				var temp = arr[min];
				arr[min] = arr[j];
				arr[j] = temp;
			}
		}
	}
};

var arr = [1, 5, 3, 7, 2, 9, 4, 6];
sort(arr, function (a, b) {
	return a - b;
});

console.log(arr);