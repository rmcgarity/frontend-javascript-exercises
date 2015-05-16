module.exports.sumNumbers = function(inputArray) {
    // Return the sum of all numbers inside of the array that is passed to the function
    // If the array is empty, this function should return 0
    var result = 0;
    for (var i=0; i < inputArray.length; i++) {
        result += inputArray[i];
    }
    return result;
};

module.exports.splitAndLowerCaseString = function(inString) {
    // - split the `inputString` argument into an array of strings by commas
    // - return an array with the set of split strings in lowercase format
    
    // It's not clear to me how this exercise is related to looping.
    // Maybe it's a review exercise?
    
    return(inString.toLocaleLowerCase().split(","));
};

module.exports.addIndex = function(inObject) {
     // EX: addIndex(['My', 1, 'number']) // returns ["0 is My", "1 is 1", "2 is number"]
     var returnArray = [];
     var i = 0;
     for (var item in inObject) {
         returnArray[i++] = item + " is " + inObject[item];
     }
     return(returnArray);
};
