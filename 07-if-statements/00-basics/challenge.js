module.exports.favoriteNumber = function(fav, guess) {
    // "Too high" if `guess` is greater than `fav` 
    // "Too low" if `guess` is less than `fav` 
    // "You got it!" if `guess` is equal to `fav`
    
    if (guess > fav) {
        return "Too high";
    } else if (guess < fav) {
        return "Too low";
    } else {
        return "You got it!";
    }
};

module.exports.checkLock = function(first, second, third, fourth) {
    // valid if:
    // the first number is a 3, 5, or 7
    // the second number is 2
    // the third number is between 5 and 100. 5 and 100 are both valid numbers
    // the fourth number is less than 9 or greater than 20. 9 and 20 both invalid number
    
    // Jean-Denis, I like to break long if conditionals into separate lines, for readability.
    if ((first == 3 || first == 5 || first == 7) && 
      (second == 2) &&
      (third >= 5 && third <= 100) && 
      (fourth < 9 || fourth > 20)) {
        return "correct";
    } else {
        return "incorrect";
    }
};

module.exports.canIGet = function(item, money) {
    // return 'true' if a user can afford a given item according to the price chart below, false otherwise:
    // 'MacBook Air' - $999
    // 'MacBook Pro' - $1299
    // 'Mac Pro' - $2499
    // 'Apple Sticker' - $1
    // return 'false' if the 'item' is not in the above list apple products
    
    // Jean-Denis, let me know if you want this coded with if-then-else. Below is simpler, though.
    return (item == "MacBook Air" && money >= 999) ||
      (item == "MacBook Pro" && money >=1299) ||
      (item == "Mac Pro" && money >=2499) ||
      (item == "Apple Sticker" && money >= 1);
};