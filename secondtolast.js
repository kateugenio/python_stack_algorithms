//second-to-last algorithm
function secondToLast(arr){
	for (var i=0; i<arr.length; i++){
		secondLast = arr[arr.length - 2];
		if (arr[i] == secondLast){
			return arr[i];
		}
	}
}

arr = [5,10,11,12,13,102023,32424234,1,"abc","Coding","dojo"];

console.log(secondToLast(arr));