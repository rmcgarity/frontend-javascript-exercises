module.exports.addItem = function(item, groceryArray) {
    // Examples:
    //      addItem(1, [5,4,3,2]); // returns [5,4,3,2,1]
	//      addItem("brown", ["green", "yellow"]); // returns ["green", "yellow", "brown"]
	//      addItem("brown", ["green", "yellow", "brown"]); // returns ["green", "yellow", "brown"] since "brown" was already present
	var returnArray = groceryArray.concat();

	if (returnArray.indexOf(item) < 0) {
	    returnArray.push(item);
	}
	return returnArray;
};

module.exports.reverseSortedList = function(groceryArray) {
    // Examples:
    //      reverseSortedList([2,4,1,5,3]); // returns [5,4,3,2,1]
	//      reverseSortedList(["b", "d", "q", "a"]); // returns ["q", "d", "b", "a"]
	var returnArray = groceryArray.sort();
	returnArray = returnArray.reverse();
	return returnArray;
};