//Convert  a string to an array

//Write a function to split a string and convert it into an array of words.

//Examples (Input ==> Output):
//"Robin Singh" ==> ["Robin", "Singh"]

//"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]\

//Solution:

function stringToArray(string){

    return string.split(" ")
  
}

console.log(stringToArray("I love arrays and they are my favorite"))

//Return: [ 'I', 'love', 'arrays', 'they', 'are', 'my', 'favorite' ]