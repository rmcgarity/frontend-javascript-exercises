module.exports.equalStrings = function(stringOne, stringTwo) {
    // Ex: equalStrings('fun', 'fun') // should return true
    // Ex: equalStrings('bloc', 'boring') // should return false
    return(stringOne === stringTwo);
};

module.exports.notEqual = function(one, two) {
    // Ex: notEqual(1, '1') // should return true
    // Ex: notEqual(1, 1) // should return false
    return(one !== two);
};

module.exports.inBetween = function(lower, middle, upper) {
    // Ex: inBetween(1,3,5) // should return true
    // EX: inBetween(3,1,5) // should return false
    return((lower < middle) && (middle < upper));
};

module.exports.outsideRanges = function(number) {
    // return true when the number is:
    // not between 10 and 20, it also can't be 10 or 20
    // not between 42 and 75, it also can't be 75. 42 is allowed
    // not between 1 and 6. 1 and 6 are allowed 
    return (!((number >= 10 && number <= 20) || (number > 42 && number <= 75) || (number > 1 && number < 6)));
};

module.exports.nameAndPrice = function(name, price) {
    // return true if name is 'NYTimes' or 'LATimes', and price is greater than or equal to 1
    return((name == 'NYTimes' || name == 'LATimes') && price >=1);
};