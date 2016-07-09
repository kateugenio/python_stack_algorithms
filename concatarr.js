//concat function algorithm
function concatArr(arr1,arr2) {
	var arrNew = [];
	for (var i=0; i<arr1.length; i++){
		arrNew.push(arr1[i]);
	}
	for (var j=0; j<arr2.length; j++) {
		arrNew.push(arr2[j]);
	}
	return arrNew;
}

arr1 = [1, 2, 3, 4, 5];
arr2 = ["a", "b", "c", "d", "e"]

console.log(concatArr(arr1, arr2));