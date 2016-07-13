/** Remove blanks
Create a function that, given a string, returns a string without blanks. 
Given " play that Funky Music ", returns a string containing "playthatFunkyMusic".
**/

function removeBlanks(str){
	var strToArr = []
	var newStr = ""
	for (var i=0; i<str.length; i++){
		if (str.charAt(i) != " "){
			strToArr.push(str.charAt(i))
		}
		for (var j=0; j<strToArr.length; j++){
			newStr = strToArr.join("");
		}
	}
	console.log(newStr)
}

str = " yO this is KaT  ! ";
removeBlanks(str);



