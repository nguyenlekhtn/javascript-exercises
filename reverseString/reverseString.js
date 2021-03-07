const reverseString = function(text) {
    let arrayText = text.split('');
    let newArrayText = [];
    while(arrayText.length != 0) {
        newArrayText.push(arrayText.pop());
    }

    text = newArrayText.join('');
    return text;
}

module.exports = reverseString
