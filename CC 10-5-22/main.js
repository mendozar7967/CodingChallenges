//Reversed Words

//Complete the solution so that it reverses all of the words within the string passed in.

//Example(Input --> Output):
//"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

//Solution:

function reverseWords(str){
    return str.split(" ").reverse().join(" ")
  }

//test:

reverseWords("yoda doesn't speak like this")
//return: "this like speak doesn't yoda"