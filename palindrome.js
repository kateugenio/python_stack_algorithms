/** Is Palindrome
Strings like "Able was I, ere I saw Elba" or "Madam, I'm Adam" could be considered palindromes, 
because (if we ignore spaces, punctuation and capitalization) the letters are the same from back to front. 
Create a function that returns a boolean indicating whether the string is a strict palindrome. 
For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and 
capitalization: if given "Dud" or "oho!", return false. **/


function palindrome(str){
	var newStr = []
	var strbwd = ""

	for (var i=str.length-1; i>=0; i--){
		newStr.push(str[i]);
		strbwd = newStr.join("");
	}
	if (str == strbwd){
		console.log(str == strbwd);
	} else {
		console.log("This is not a strict palindrome");
	}
}

var str = "yoyoyoy"
palindrome(str);

