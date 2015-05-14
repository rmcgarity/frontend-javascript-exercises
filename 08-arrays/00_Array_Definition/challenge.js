module.exports.newArray = function(one, two, three, four) {
    // newArray(1,2,3,4) should return [1,2,3,4]
    var returnVal = [one,two, three, four];
    return(returnVal);
};

module.exports.firstAndLast = function(incomingArray) {
    // take one argument, an array with at least 3 elements
    // return a new array with the first and last element of the passed array
    var returnVal = [incomingArray[0], incomingArray[incomingArray.length]-1];
    return(returnVal);
};