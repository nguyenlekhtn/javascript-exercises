const sumAll = function(intA, intB) {

    if(intA < 0 || intB < 0 || typeof intA !== "number" || typeof intB !== "number" ) return "ERROR";

    let bigger = (intA > intB) ? intA : intB;
    let smaller = (intA > intB) ? intB : intA;
   
    let sum = 0;
    for(let i = smaller; i <= bigger; i++) {
        sum += i;
    }

    return sum;
}

module.exports = sumAll
