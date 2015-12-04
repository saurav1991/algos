'use strict';

var sort = function (arr, compare) {

	var N = arr.length;
	var h = 1;

	while (h < N / 3) {
		h = 3 * h + 1;
	}

	while (h >= 1) {
		for (var i = h; i < N; i++) {
			for (var j = i; j >= h; j = j - h) {
				if (compare(arr[j - h], arr[j]) > 0) {
					var temp = arr[j];
					arr[j] = arr[j - h];
					arr[j - h] = temp;
				}
			}
		}
		console.log('After h sorting', h);
		console.log(arr);
		h = Math.floor(h / 3);
	}
};

var arr = [1, 5, 3, 7, 2, 9, 4, 6];
sort(arr, function (a, b) {
	return a - b;
});

console.log(arr);