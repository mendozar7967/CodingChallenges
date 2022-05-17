//Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

//Solution:

function abbrevName(name){
    let string = name.split(' ');
    return (string[0][0] + "." + string[1][0]).toUpperCase();

}

console.log(abbrevName("Samm Harris"))
console.log(abbrevName("patrick feeney"))