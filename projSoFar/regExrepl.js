var myRegExp = /(\b\a\b)|(\B\a\b)/gi;

var myString = "a dog walked in off a street and ordered a finest beer"

myString = myString.replace(myRegExp, "the");

console.log(myString); 

// right way:  /\ba\b/gi
