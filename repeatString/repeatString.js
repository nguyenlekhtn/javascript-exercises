const repeatString = function(text, times) {

    let newText = "";
    if(times < 0) return "ERROR";

    for(let i = 0; i < times; i++) {
        newText += text;
    }
    return newText;
}

module.exports = repeatString
