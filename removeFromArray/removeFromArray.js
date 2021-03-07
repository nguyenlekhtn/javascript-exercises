const removeFromArray = function(array, ...arguments) {
    // let array = arguments[0];
    
    for(let i = 0, n = arguments.length; i < n; i++)
    {
        // loop through array and compare each element with the argument
        for(let j = 0, arrayLength = array.length; j < arrayLength; j++)
        {
            if(array[j] === arguments[i]) array.splice(j,1);
        }
    }

    return array;
}

module.exports = removeFromArray
