/** Shuffle
Recreate the shuffle(arr) function built into JavaScript, to efficiently shuffle a given array’s values. 
Work in-place, of course. Do you need to return anything from your function? **/


function shuffle(arr) {
	for (var i=0; i<arr.length; i++) {
		var random_num = Math.random();
		var random_index = Math.floor(random_num * arr.length);

		var temp = arr[random_index];
		arr[random_index] = arr[i];
		arr[i] = temp;
	}
}

var arr = [2,6,3,7,3,5,9];
shuffle(arr);
console.log(arr);