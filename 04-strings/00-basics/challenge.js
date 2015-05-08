module.exports.formLetter = function(firstName, senderName, message) {
    // Ex: "Hello James,\n\nThings are well.\n\nSincerely,\nRichard"
    console.log("Hello " + firstName + ",\n\n" + message + "\n\nSincerely,\n" + senderName)
    return("Hello " + firstName + ",\n\n" + message + "\n\nSincerely,\n" + senderName);
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
    // Ex: sliceItAndCombineIt("This is a Test", 0, 4, 1, 2) // returns "Thish"
    return(bigString.substring(startA, endA) + bigString.substring(startB, endB));
};

module.exports.findFirstMatch = function(text, searchString) {
    // Ex: findFirstMatch("Roses are red", "re") returns 7 (the position of the "re" in "red")
    return(text.indexOf(searchString));
};

module.exports.findLastMatch = function(text, searchString) {
    // findLastMatch("Roses are red", "re") returns 10 (the position of the "re" in "red")
    return(text.lastIndexOf(searchString));
};

module.exports.substringBetweenMatches = function(text, searchString) {
    // substringBetweenMatches("Roses are red, apples are really red.", "red") // returns ", apples are really "
    console.log(text.substring(text.indexOf(searchString)+searchString.length, text.lastIndexOf(searchString)));
    return     (text.substring(text.indexOf(searchString)+searchString.length, text.lastIndexOf(searchString)));
};