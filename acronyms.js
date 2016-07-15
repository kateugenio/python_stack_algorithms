/** Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
Given "Live from New York, it's Saturday Night!", return "LFNYISN". **/


function acronym(str){
	newStr = []
	newAcro = ""
	for (var i=0; i<str.length; i++){
		newStr = str.split(" ");
	}
	for (var j=0; j<newStr.length; j++){
		newStr.splice(j, 1, newStr[j][0]);
		newAcro = newStr.join("");
		newAcro = newAcro.toUpperCase();
	}
	return newAcro;
}

str = "I hope I can Solve all These algorithms"
console.log(acronym(str));