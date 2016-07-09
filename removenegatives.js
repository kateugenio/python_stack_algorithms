// remove negatives algorithm
function removeNegs(arr){
	for (var i = arr.length - 1; i >= 0; i--){
		if (arr[i] < 0){
			arr.splice(i,1);
		}
	}
	return arr;
}

arr = [4,12,-15,-16,17,18,-222]
console.log(removeNegs(arr));