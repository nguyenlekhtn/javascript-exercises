const leapYears = function(years) {
    isLeap = false;
    if (years % 4 == 0) {
        isLeap = true;
        if (years % 100 == 0) {
            isLeap = false;
            if (years % 400 == 0) {
                isLeap = true;
            }
        }
    }

    return isLeap;
}

module.exports = leapYears
